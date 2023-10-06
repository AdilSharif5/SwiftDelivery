using SwiftDelivery.Data;

namespace user.deletejob
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
            Delete("user/jobs/{id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            var jobentity = _dbContext.Projects.Find(r.Id);
            if (jobentity == null) {
            await SendNotFoundAsync(); }
            _ = _dbContext.Projects.Remove(jobentity!);
            _dbContext.SaveChanges();
            await SendNoContentAsync();
        }
    }
}