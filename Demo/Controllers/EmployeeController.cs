using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Demo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase


    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public EmployeeController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        // GET: api/<EmployeeController>
        [HttpGet]

       
        public JsonResult Get()
        {
            
            string query = @"SELECT EID,EFName,ELName,EAddress from dbo.Employee";
            
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

        // POST api/<EmployeeController>
        [HttpPost]
        public JsonResult Post(Employee jb)
        {
            string query = @"INSERT INTO dbo.Employee (EFName,ELName,EAddress) VALUES (@EFName,@ELName,@EAddress)";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@EFName", jb.EFName);
                    myCommand.Parameters.AddWithValue("@ELName", jb.ELName);
                    myCommand.Parameters.AddWithValue("@EAddress", jb.EAddress);



                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut]
        public JsonResult Put(Employee jb)
        {
            string query = @"Update dbo.Employee set EFName=@EFName,ELName=@ELName,EAddress=@EAddress where EID=@EID";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@EID", jb.EID);
                    myCommand.Parameters.AddWithValue("@EFName", jb.EFName);
                    myCommand.Parameters.AddWithValue("@ELName", jb.ELName);
                    myCommand.Parameters.AddWithValue("@EAddress", jb.EAddress);




                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update Successfully");
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from  dbo.Employee  where EID=@JID";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VacancyConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@JID", id);

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
