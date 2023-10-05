using SwiftDelivery.Data;
using SwiftDelivery.Entities;

namespace admin.getprojects
{
    internal sealed class Endpoint : EndpointWithoutRequest<List<Response>, Mapper>
    {
        private DataContext _dbContext;

        public Endpoint(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public override void Configure()
        {
            Get("admin/projects");
            AllowAnonymous();

        }

        public override async Task HandleAsync( CancellationToken c)
        {
            var projects = new List<Response>();
            projects = _dbContext.Projects
                        .Where(x => x.IsActice == true)
                        .Select(x => Map.FromEntity(x)).ToList();
            await SendOkAsync(projects);
        }
    }
}