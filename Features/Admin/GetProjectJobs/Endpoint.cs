using Microsoft.EntityFrameworkCore;
using SwiftDelivery.Data;

namespace admin.getprojectjobs
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
            Get("admin/Projects/{id}/jobs");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            var projects = new Response();
            projects = _dbContext.Projects
                        .Where(p => p.ProjectId == r.Id)
                        .Where(x => x.IsActive == true)
                        .Include(p => p.Jobs)
                        .Select(x => Map.FromEntity(x)).FirstOrDefault();
            await SendOkAsync(projects);
        }
    }
}