using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using Demo.Models;
using System.Data.SqlClient;
using System.Data;
using System.Reflection;



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

        /*
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
        }*/


        [HttpPost]
        //[Route("Login")]
        public Response Login(Login login)
        {
            Response response = new Response();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");

            // Perform the login logic here
            // Replace the code below with your actual implementation to query the database and verify the username and password
            bool loginSuccessful = VerifyLogin(login.Email, login.LPassword);

            if (loginSuccessful)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Login Successful!";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Login Failed!";
            }

            return response;
        }

        private bool VerifyLogin(string Email, string LPassword)
        {
            // Implement your database query or any other logic to verify the username and password
            // For simplicity, let's assume the username and password are stored in a table named "Users"

            string query = "SELECT LoginID FROM dbo.Login WHERE Email = @Email AND LPassword = @LPassword";

            int result = 0;
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("VacancyConn")))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Email", Email);
                    command.Parameters.AddWithValue("@LPassword",LPassword);
                    connection.Open();
                    result = (int)command.ExecuteScalar();
                }
            }

            // If the result is greater than 0, the login is successful
            return result > 0;
        }


    }
}
