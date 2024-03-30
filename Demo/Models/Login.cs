using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace Demo.Models
{
    public class Login
    {
        public int LoginId { get; set; }

        [Required(ErrorMessage = "Email address is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        //[MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
        //[RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$",
       //ErrorMessage = "Password must contain at least one capital letter, one number, and one lowercase letter")]
        public string LPassword { get; set; }
    }
}
