namespace admin.updateproject
{
    internal sealed class Request
    {
       
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }

    }

    internal sealed class Validator : Validator<Request>
    {
        public Validator()
        {

        }
    }

    internal sealed class Response
    {
        public string Message => "This endpoint hasn't been implemented yet!";
    }
}