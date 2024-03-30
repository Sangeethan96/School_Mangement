using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.VisualBasic;
namespace Demo.Models
{
    public class Employee
    {

        public int EID { get; set; }

        
        public string EFName { get; set; }

       
        public string ELName { get; set; }


        public string EAddress { get; set; }

        
    }
}
