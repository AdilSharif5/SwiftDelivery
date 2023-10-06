namespace admin.getproject
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
        public int ProjectId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }

    }
}