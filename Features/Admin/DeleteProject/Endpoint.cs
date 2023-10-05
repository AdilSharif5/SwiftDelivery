namespace admin.deleteproject
{
    internal sealed class Endpoint : Endpoint<Request, Response, Mapper>
    {
        public override void Configure()
        {
            Post("admin/projects/{id}");
        }

        public override async Task HandleAsync(Request r, CancellationToken c)
        {
            await SendAsync (new Response());
        }
    }
}