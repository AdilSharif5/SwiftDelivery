using SwiftDelivery.Entities;

namespace admin.updateproject
{
    internal sealed class Mapper : Mapper<Request, Response, Project>
    {
        public override Project ToEntity(Request r) => new Project()
        {
            Name = r.Name,
            Description = r.Description,
            CreatedDate = r.CreatedDate,
            IsActice = true,
        };

    }
}