using Microsoft.EntityFrameworkCore;
using SwiftDelivery.Data;
using SwiftDelivery.Entities;

namespace admin.addproject
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
            Post("/admin/addproject");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            Project entity = Map.ToEntity(r);
            _dbContext.Add<Project>(entity);
            _dbContext.SaveChanges();
            await SendCreatedAtAsync<getprojects.Endpoint>(null, Response, generateAbsoluteUrl: true);
            //await SendAsync(new Response());
        }
    }
}