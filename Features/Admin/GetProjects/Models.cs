using SwiftDelivery.Entities;

namespace admin.getprojects
{

    internal sealed class Response
    {
        public int ProjectId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public int PercentageOfStatus { get; set; }

    }

}