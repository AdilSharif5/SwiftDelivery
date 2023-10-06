using SwiftDelivery.Entities;

namespace admin.updateproject
{
    internal sealed class Mapper : Mapper<Request, Response, Project>
    {
        public override Project ToEntity(Request r) => new Project()
        {
            Name = r.Name,
            Description = r.Description,
            LastUpdatedDate = r.UpdatedDate,
            IsActive = true,
        };

    }
}