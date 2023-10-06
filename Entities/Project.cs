namespace SwiftDelivery.Entities
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        public bool IsActive { get; set; } = false;
        public List<Job>? Jobs { get; set; }

    }
}
