using SwiftDelivery.Entities;

namespace admin.getprojectjobs
{
    internal sealed class Mapper : Mapper<Request, Response, Project>
    {
        public override Response FromEntity(Project e) => new Response()
        {
            //ProjectId = e.ProjectId,
            //Name = e.Name,
            //Description = e.Description,
            //CreatedDate = e.CreatedDate,
            //LastUpdatedDate = e.LastUpdatedDate,
            Jobs = e.Jobs,
        };
    }
}