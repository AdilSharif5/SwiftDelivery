using Microsoft.EntityFrameworkCore;
using SwiftDelivery.Data;

namespace admin.deleteproject
{
    internal sealed class Endpoint : Endpoint<Request, Response, Mapper>
    {
        private DataContext _dbContext;

        public Endpoint(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public override void Configure()
        {
            Delete("admin/projects/{id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            _dbContext.Projects
                      .First(x => x.ProjectId == r.Id)
                      .IsActive = false;
            _dbContext.SaveChanges();
            await SendNoContentAsync();
        }
    }
}