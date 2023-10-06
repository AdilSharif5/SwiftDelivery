using SwiftDelivery.Data;

namespace user.addjob
{
    internal sealed class Endpoint : Endpoint<Request, Response, Mapper>
    {
        private readonly DataContext _dbContext;
        public Endpoint(DataContext dataContext)
        {
            _dbContext = dataContext;
        }
        public override void Configure()
        {
            Post("user/projects/{id}/jobs");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            int id = Route<int>("id");
            var entity = Map.ToEntity(r);
            entity.ProjectId = id;
            _dbContext.Add(entity);
            await _dbContext.SaveChangesAsync();
            await SendOkAsync(new Response());
        }
    }
}