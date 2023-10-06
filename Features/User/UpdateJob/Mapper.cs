using SwiftDelivery.Entities;

namespace user.updatejob
{
    internal sealed class Mapper : Mapper<Request, Response, Job>
    {
        public override Job ToEntity(Request r) => new Job()
        {
            Title = r.Title,
            Description = r.Description,
            status = r.status,
            Remarks = r.Remarks
        };
    }
}