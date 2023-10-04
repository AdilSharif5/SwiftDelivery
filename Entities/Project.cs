namespace SwiftDelivery.Entities
{
    public class Project
    {
        public int ProjectId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public bool IsActice { get; set; } = false;

       // public Guid AssignedTo { get; set; }
    }
}
