namespace admin.signup
{
    internal sealed class Endpoint : Endpoint<Request, Response, Mapper>
    {
        public override void Configure()
        {
            Post("admin/login");
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {

            await SendAsync(new Response());
        }
    }
}