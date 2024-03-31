using System.ComponentModel.DataAnnotations;

namespace Demo.Models
{
    public class Student
    {
        public int SID { get; set; }

        public string SName { get; set; }

        public string SLName { get; set; }

        [Range(1, 13, ErrorMessage = "Grade must be between 1 and 13.")]
        public int Grade { get; set; }

        public string SAddress { get; set; }

        [RegularExpression("^0[0-9]{9}$", ErrorMessage = "ContactNumber must be exactly 10 digits.")]
        public string ContactNumber { get; set; }
    }
}
