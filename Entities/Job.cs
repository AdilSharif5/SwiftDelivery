using System.Text.Json.Serialization;

namespace SwiftDelivery.Entities
{
    public class Job
    {
        public int JobId { get; set; }
        [JsonIgnore]
        public Project project { get; set; }
        public int ProjectId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string status { get; set; } = string.Empty;
        public string? Remarks { get; set; }
    }
}
