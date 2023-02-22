var config = require("../dbconfig");
const sql = require("mssql");

async function getLecturer() {
  try {
    let pool = await sql.connect(config);
    let courses = await pool.request().query("SELECT * from lecturer");
    return courses.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getLecturer(lecturerId) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.Int, lecturerId)
      .query("SELECT * from Academic where lecturerId = @input_parameter");
    return course.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteLecturer(lecturerId) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.Int, lecturerId)
      .query("DELETE * from Academic where lecturerId = @input_parameter");
    return course.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addLecturer(lecturer) {
  try {
    let pool = await sql.connect(config);
    let Insertlecturer = await pool
      .request()
      .input("departmentId", sql.Int, lecturer.DepartmentId)
      .input("surName", sql.NVarChar, lecturer.SurName)
      .input("firstName", sql.NVarChar, lecturer.FirstName)
      .input("otherName", sql.NChar, lecturer.OtherName)
      .input("staffId", sql.NChar, lecturer.StaffId)
      .input("status", sql.Int, lecturer.Status)
      .execute("InsertLecturer");
    return Insertlecturer.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function editLecturer(lecturer) {
  try {
    let pool = await sql.connect(config);
    let Updatelecturer = await pool
      .request()
      .input("lecturerId", sql.Int, lecturer.LecturerId)
      .input("departmentId", sql.Int, lecturer.DepartmentId)
      .input("surName", sql.NVarChar, lecturer.SurName)
      .input("firstName", sql.NVarChar, lecturer.FirstName)
      .input("otherName", sql.NChar, lecturer.OtherName)
      .input("staffId", sql.NChar, lecturer.StaffId)
      .input("status", sql.Int, lecturer.Status)
      .execute("InsertLecturer");
    return Updatelecturer.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getLecturer: getLecturer,
  getLecturer: getLecturer,
  addLecturer: addLecturer,
  deleteLecturer: deleteLecturer,  
  editLecturer: editLecturer,
};