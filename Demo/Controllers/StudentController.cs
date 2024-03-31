using Demo.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public StudentController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        // GET: api/<StudentController>
        [HttpGet]


        public JsonResult Get()
        {

            string query = @"SELECT SID,SName,SLName,Grade,SAddress,ContactNumber from dbo.Student";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        // POST api/<StudentController>
        [HttpPost]
        public JsonResult Post(Student sd)
        {
            string query = @"INSERT INTO dbo.Student (SName,SLName,Grade,SAddress,ContactNumber) VALUES (@SName,@SLName,@Grade,@SAddress,@ContactNumber)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Grade", sd.Grade);
                    myCommand.Parameters.AddWithValue("@SName", sd.SName);
                    myCommand.Parameters.AddWithValue("@SLName", sd.SLName);
                    myCommand.Parameters.AddWithValue("@SAddress", sd.SAddress);
                    myCommand.Parameters.AddWithValue("@ContactNumber", sd.ContactNumber);


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        // PUT api/<StudentController>/5
        [HttpPut]
        public JsonResult Put(Student sd)
        {
            string query = @"Update dbo.Student set SName=@SName,SLName=@SLName,Grade=@Grade,SAddress=@SAddress,ContactNumber=@ContactNumber where SID=@SID";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@SID", sd.SID);
                    myCommand.Parameters.AddWithValue("@SName", sd.SName);
                    myCommand.Parameters.AddWithValue("@SLName", sd.SLName);
                    myCommand.Parameters.AddWithValue("@Grade", sd.Grade);
                    myCommand.Parameters.AddWithValue("@SAddress", sd.SAddress);
                    myCommand.Parameters.AddWithValue("@ContactNumber", sd.ContactNumber);




                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update Successfully");
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from  dbo.Student  where SID=@SID";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@SID", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}
