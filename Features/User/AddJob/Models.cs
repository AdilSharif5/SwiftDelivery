using Newtonsoft.Json;
using SwiftDelivery.Entities;

namespace user.addjob
{
    internal sealed class Request
    {
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string status { get; set; } = string.Empty;
        public string? Remarks { get; set; }

    }

    internal sealed class Validator : Validator<Request>
    {
        public Validator()
        {

        }
    }

    internal sealed class Response
    {
        public string Message => "Job created sucessfully";
    }
}