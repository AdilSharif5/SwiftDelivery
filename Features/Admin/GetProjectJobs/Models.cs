using SwiftDelivery.Entities;

namespace admin.getprojectjobs
{
    internal sealed class Request
    {
        public int Id { get; set; }
    }

    internal sealed class Validator : Validator<Request>
    {
        public Validator()
        {

        }
    }

    internal sealed class Response
    {
        public List<Job>? Jobs { get; set; }
    }
}