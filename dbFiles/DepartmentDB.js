var config = require("../dbconfig");
const sql = require("mssql");

async function getDepartments() {
  try {
    let pool = await sql.connect(config);
    let departments = await pool.request().query("SELECT * from Department");
    return departments.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getDepartment(departmentId) {
  try {
    let pool = await sql.connect(config);
    let department = await pool
      .request()
      .input("input_parameter", sql.Int, departmentId)
      .query("SELECT * from Academic where DepartmentId = @input_parameter");
    return department.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteDepartment(departmentId) {
  try {
    let pool = await sql.connect(config);
    let deleteDepartment = await pool
      .request()
      .input("input_parameter", sql.Int, departmentId)
      .query("DELETE from Department where Id = @input_parameter");
    return deleteDepartment.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function addDepartment(department) {
  try {
    let pool = await sql.connect(config);
    let InsertDepartment = await pool
      .request()
      .input("facultyId", sql.Int, department.FacultyId)
      .input("name", sql.NVarChar, department.Name)
      .input("UniqueID", sql.NChar, department.UniqueID)
      .input("code", sql.NChar, department.Code)
      .input("status", sql.Int, department.Status)
      .execute("InsertDepartment");
    return InsertDepartment.recordsets;
  } catch (err) {
    console.log(err);
  }
}
async function editDepartment(department) {
  try {
    let pool = await sql.connect(config);
    let UpdateDepartment = await pool
      .request()
      .input("departmentId", sql.VarChar, department.DepartmentId)
      .input("facultyId", sql.Int, department.FacultyId)
      .input("name", sql.NVarChar, department.Name)
      .input("UniqueID", sql.NChar, department.UniqueID)
      .input("code", sql.NChar, department.Code)
      .input("status", sql.Int, department.Status)
      .execute("InsertDepartment");
    return UpdateDepartment = await pool
    .recordsets;
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  getDepartments: getDepartments,
  getDepartment: getDepartment,
  addDepartment: addDepartment,
  deleteDepartment: deleteDepartment,
  editDepartment: editDepartment,
};