﻿using SwiftDelivery.Entities;

namespace admin.getprojects
{
    internal sealed class Mapper : ResponseMapper<Response, Project>
    {
        public override Response FromEntity(Project e) => new Response()
        {
            ProjectId = e.ProjectId,
            Name = e.Name,
            Description = e.Description,
            CreatedDate = e.CreatedDate,
            LastUpdatedDate = e.LastUpdatedDate
        };

    }
}