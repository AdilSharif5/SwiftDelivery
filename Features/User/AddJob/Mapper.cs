using SwiftDelivery.Entities;

namespace user.addjob
{
    internal sealed class Mapper : Mapper<Request, Response, Job>
    {
        public override Job ToEntity(Request r) => new Job
        {
            Title = r.Title,
            Remarks = r.Remarks,
            Description = r.Description,
            Status = r.status
        };

    }
}