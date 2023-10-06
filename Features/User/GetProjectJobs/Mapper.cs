using SwiftDelivery.Entities;

namespace user.getprojectjobs
{
    internal sealed class Mapper : Mapper<Request, Response, Project>
    {
        public override Response FromEntity(Project e) => new Response()
        {
            
            Jobs = e.Jobs,
        };
    }
}