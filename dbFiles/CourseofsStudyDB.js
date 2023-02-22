var config = require("../dbconfig");
const sql = require("mssql");

async function getCourseOfStudy() {
  try {
    let pool = await sql.connect(config);
    let coursesOfStudy = await pool.request().query("SELECT * from courseOfStudyt");
    return coursesOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCourseOfStudy(courseOfStudytId) {
  try {
    let pool = await sql.connect(config);
    let courseOfStudy = await pool
      .request()
      .input("input_parameter", sql.Int, courseOfStudytId)
      .query("SELECT * from Academic where courseOfStudytId = @input_parameter");
    return courseOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteCourseOfStudy(courseOfStudyId) {
  try {
    let pool = await sql.connect(config);
    let courseOfStudy = await pool
      .request()
      .input("input_parameter", sql.Int,courseOfStudyId)
      .query("DELETE * from Academic where courseOfStudytId = @input_parameter");
    return courseOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addCourseOfStudy(courseOfStudy) {
  try {
    let pool = await sql.connect(config);
    let InsertcourseOfStudy = await pool
      .request()
      .input("departmentId", sql.Int, courseOfStudy.DepartmentId)
      .input("name", sql.NVarChar, courseOfStudy.Name)
      .input("shortName", sql.NVarChar, courseOfStudy.ShortName)
      .input("UniqueID", sql.Int, courseOfStudy.UniqueID)
      .input("award", sql.NVarChar, courseOfStudy.Award)
      .input("duration", sql.Int, courseOfStudy.Duration)
      .input("requiredCreditUnit", sql.Int, courseOfStudy.RequiredCreditUnit)
      .input("advisor", sql.NVarChar, courseOfStudy.Advisor)
      .input("status", sql.Int, courseOfStudy.Status)
      .execute("InsertLecturer");
    return InsertcourseOfStudy.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function editCourseOfStudy(courseOfStudy) {
  try {
    let pool = await sql.connect(config);
    let UpdatecourseOfStudy = await pool
      .request()
      .input("courseOfStudy", sql.Int, courseOfStudy.CourseOfStudy)
      .input("departmentId", sql.Int, courseOfStudy.DepartmentId)
      .input("name", sql.NVarChar, courseOfStudy.Name)
      .input("shortName", sql.NVarChar, courseOfStudy.ShortName)
      .input("UniqueID", sql.Int, courseOfStudy.UniqueID)
      .input("award", sql.NVarChar, courseOfStudy.Award)
      .input("duration", sql.Int, courseOfStudy.Duration)
      .input("requiredCreditUnit", sql.Int, courseOfStudy.RequiredCreditUnit)
      .input("advisor", sql.NVarChar, courseOfStudy.Advisor)
      .input("status", sql.Int, courseOfStudy.Status)
      .execute("InsertLecturer");
    return UpdatecourseOfStudy.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCourseOfStudy: getCourseOfStudy,
  getCourseOfStudy: getCourseOfStudy,
  addCourseOfStudy: addCourseOfStudy,
  deleteCourseOfStudy: deleteCourseOfStudy,
  editCourseOfStudy: editCourseOfStudy,
};