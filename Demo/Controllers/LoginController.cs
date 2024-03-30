using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using Demo.Models;
using System.Data.SqlClient;
using System.Data;



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public LoginController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

       
       

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Login(Login model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid model data.");
            }

            string query = "SELECT LoginID FROM dbo.Login WHERE Email = @Email AND LPassword = @LPassword";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@Email", model.Email);
                        myCommand.Parameters.AddWithValue("@LPassword", model.LPassword);

                        myCon.Open();
                        SqlDataReader myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                    }
                }

                if (table.Rows.Count == 1)
                {
                    // Login successful
                    return Ok("Login successful.");
                }
                else
                {
                    // Login failed
                    return Unauthorized("Invalid email or password.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}
