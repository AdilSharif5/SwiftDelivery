namespace admin.addproject
{
    internal class Request
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
    }

    internal sealed class Validator : Validator<Request>
    {
        public Validator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Name for project is required")
                .MinimumLength(3).WithMessage("Name is too Short")
                .MaximumLength(50).WithMessage("Name is too Long");
            RuleFor(x => x.Description)
                .NotEmpty().WithMessage("description Should not be empty");
        }
    }

    internal sealed class Response
    {
        public string Message => "This endpoint hasn't been implemented yet!";
    }
}