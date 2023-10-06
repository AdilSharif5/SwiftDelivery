using SwiftDelivery.Entities;

namespace user.getjob
{
    internal sealed class Mapper : Mapper<Request, Response, Job>
    {
        public override Response FromEntity(Job e) => new Response()
        {
            Title = e.Title,
            Description = e.Description,
            Remarks = e.Remarks,
            status = e.status
        };
        

    }
}