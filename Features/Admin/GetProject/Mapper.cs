using SwiftDelivery.Entities;

namespace admin.getproject
{
    internal sealed class Mapper : Mapper<Request, Response, Project>
    {
        public override Response FromEntity(Project e) => new Response()
        {
            ProjectId = e.ProjectId,
            Name = e.Name,
            Description = e.Description,
            CreatedDate = e.CreatedDate
        };
    }
}