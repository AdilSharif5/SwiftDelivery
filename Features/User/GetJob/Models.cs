namespace user.getjob
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
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string status { get; set; } = string.Empty;
        public string? Remarks { get; set; }
    }
}