var config = require("../dbconfig");
const sql = require("mssql");

async function getCourse() {
  try {
    let pool = await sql.connect(config);
    let courses = await pool.request().query("SELECT * from Course");
    return courses.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCourse(courseId) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.Int, courseId)
      .query("SELECT * from Academic where CourseId = @input_parameter");
    return course.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteCourses(courseId) {
  try {
    let pool = await sql.connect(config);
    let course = await pool
      .request()
      .input("input_parameter", sql.Int, courseId)
      .query("DELETE * from Academic where CourseId = @input_parameter");
    return course.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addCourse(course) {
  try {
    let pool = await sql.connect(config);
    let InsertCourse = await pool
      .request()
      .input("departmentId", sql.Int, course.DepartmentId)
      .input("name", sql.NVarChar, course.Name)
      .input("UniqueID", sql.NChar, course.UniqueID)
      .input("units", sql.Int, course.Units)
      .input("code", sql.NChar, course.Code)
      .input("courseLevel", sql.Int, course.CourseLevel)
      .input("courseSemester", sql.Int, course.CourseSemester)
      .input("status", sql.Int, course.Status)
      .execute("InsertCourse");
    return InsertCourse.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function editCourse(course) {
  try {
    let pool = await sql.connect(config);
    let UpdateCourse = await pool
      .request()
      .input("courseId", sql.Int, course.CourseId)
      .input("departmentId", sql.Int, course.DepartmentId)
      .input("name", sql.NVarChar, course.Name)
      .input("UniqueID", sql.NChar, course.UniqueID)
      .input("units", sql.Int, course.Units)
      .input("code", sql.NChar, course.Code)
      .input("courseLevel", sql.Int, course.CourseLevel)
      .input("courseSemester", sql.Int, course.CourseSemester)
      .input("status", sql.Int, course.Status)
      .execute("InsertCourse");
    return UpdateCourse.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getCourse: getCourse,
  getCourse: getCourse,
  addCourse: addCourse,
  deleteCourses: deleteCourses,  
  editCourse:  editCourse,
};