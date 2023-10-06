using SwiftDelivery.Data;

namespace user.getjob
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
            Get("user/jobs/{id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            var jobentity = _dbContext.Jobs
                                      .Where(j => j.JobId == r.Id)
                                      .Select( j => Map.FromEntity(j)).FirstOrDefault();
            if (jobentity == null)
                await SendNotFoundAsync();
            await SendOkAsync(jobentity!);
        }
    }
}