using SwiftDelivery.Data;

namespace use.getjobs
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
            Get("user/jobs");
            AllowAnonymous();
        }

        public override async Task HandleAsync(CancellationToken c)
        {
            var jobs = new List<Response>();
            jobs = _dbContext.Jobs
                             .Select(x => Map.FromEntity(x)).ToList();
           await SendOkAsync(jobs);
        }
    }
}