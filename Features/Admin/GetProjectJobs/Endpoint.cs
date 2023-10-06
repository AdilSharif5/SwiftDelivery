using Microsoft.EntityFrameworkCore;
using SwiftDelivery.Data;

namespace admin.getprojectjobs
{
    internal sealed class Endpoint : Endpoint<Request, List<Response>, Mapper>
    {

        private DataContext _dbContext;

        public Endpoint(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public override void Configure()
        {
            Get("admin/Prjects/{id}/jobs");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            var projects = new List<Response>();
            projects = _dbContext.Projects
                        .Where(x => x.IsActive == true)
                        .Include(p => p.Jobs)
                        .Select(x => Map.FromEntity(x)).ToList();
            await SendOkAsync(projects);
        }
    }
}