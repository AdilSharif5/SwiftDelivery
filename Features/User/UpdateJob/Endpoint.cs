using SwiftDelivery.Data;

namespace user.updatejob
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
            Put("user/Projects/{projectid}/jobs/{jobid}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            int projectId = Route<int>("projectid");
            int jobId = Route<int>("jobid");
            var job = Map.ToEntity(r);
            job.ProjectId = projectId;
            job.JobId = jobId;
            _dbContext.Update(job);
            await _dbContext.SaveChangesAsync();
            await SendNoContentAsync();
        }
    }
}