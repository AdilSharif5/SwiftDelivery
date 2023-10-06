﻿using Microsoft.EntityFrameworkCore;
using SwiftDelivery.Data;

namespace admin.updateproject
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
            Put("admin/projects/{id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            int id = Route<int>("id");
            var projectToupdate = Map.ToEntity(r);
            projectToupdate.ProjectId = id;
            var res = _dbContext.Projects.Update(projectToupdate);
            _dbContext.SaveChanges();
            await SendNoContentAsync();
        }
    }
}