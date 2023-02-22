var config = require("../dbconfig");
const sql = require("mssql");

async function getFaculties() {
  try {
    let pool = await sql.connect(config);
    let faculties = await pool.request().query("SELECT * from Faculty");
    return faculties.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getFaculty(facultyId) {
  try {
    let pool = await sql.connect(config);
    let faculty = await pool
      .request()
      .input("input_parameter", sql.Int, facultyId)
      .query("SELECT * from faculty where FacultyId = @input_parameter");
    return faculty.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteFaculty(facultyId) {
  try {
    let pool = await sql.connect(config);
    let faculty = await pool
      .request()
      .input("input_parameter", sql.Int, facultyId)
      .query("DELETE * from faculty where FacultyId = @input_parameter");
    return faculty.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addFaculty(faculty) {
  try {
    let pool = await sql.connect(config);
    let InsertFaculty = await pool
      .request()
      .input("name", sql.NVarChar, faculty.Name)
      .input("UniqueID", sql.NChar, faculty.UniqueID)
      .input("code", sql.NChar, faculty.Code)
      .input("status", sql.Int, faculty.Status)
      .execute("InsertFaculty");
    return InsertFaculty.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function editFaculty(faculty) {
  try {
    let pool = await sql.connect(config);
    let UpdateFaculty = await pool
      .request()
      .input("facultyId", sql.Int, faculty.FacultyId)
      .input("name", sql.NVarChar, faculty.Name)
      .input("UniqueID", sql.NChar, faculty.UniqueID)
      .input("code", sql.NChar, faculty.Code)
      .input("status", sql.Int, faculty.Status)
      .execute("InsertFaculty");
    return  UpdateFaculty = await pool
    .recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getFaculties: getFaculties,
  getFaculty: getFaculty,
  addFaculty: addFaculty,
  deleteFaculty: deleteFaculty,
  editFaculty: editFaculty,
};