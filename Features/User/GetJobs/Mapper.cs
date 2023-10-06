using SwiftDelivery.Entities;

namespace use.getjobs
{
    internal sealed class Mapper : ResponseMapper <Response, Job>
    {
        public override Response FromEntity(Job e) => new Response()
        {
            JobID = e.JobId,
            Title = e.Title,
            Remarks = e.Remarks,
            Description = e.Description,
            status = e.status
        };


    }
}