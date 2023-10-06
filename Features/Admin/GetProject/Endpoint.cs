using Namotion.Reflection;
using SwiftDelivery.Data;

namespace admin.getproject
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
            Get("admin/projects/{id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            var projects = new List<Response>();
            projects = _dbContext.Projects
                        .Where(x => x.ProjectId == r.Id)
                        .Where(x => x.IsActive == true)
                        .Select(x => Map.FromEntity(x)).ToList();
            await SendOkAsync(projects);
        }
    }
}