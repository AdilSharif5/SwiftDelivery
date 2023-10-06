using Azure;
using SwiftDelivery.Entities;

namespace admin.getprojects
{
    internal sealed class Mapper : ResponseMapper<Response, Project>
    {
        public override Response FromEntity(Project e) => new Response()
        {
            ProjectId = e.ProjectId,
            Name = e.Name,
            Description = e.Description,
            CreatedDate = e.CreatedDate,
            LastUpdatedDate = e.LastUpdatedDate,
            PercentageOfStatus = CalculatePercentage(e)
        };
        public int CalculatePercentage(Project e)
        {
            int percentage = 0;
            var stat = e.Jobs?.Where(j => j.Status == "done").Count();
            if(stat > 0)
                percentage = (int)(((double)stat/e.Jobs.Count())* 100);
            return percentage;
         
        }
            
         
         
           
        

    }
}