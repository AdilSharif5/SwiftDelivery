namespace use.getjobs
{
    internal sealed class Request
    {

    }

    internal sealed class Validator : Validator<Request>
    {
        public Validator()
        {

        }
    }

    internal sealed class Response
    {
        public int JobID { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string status { get; set; } = string.Empty;
        public string? Remarks { get; set; }

    }
}