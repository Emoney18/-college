class CourseOfStudy{
    constructor(
        CourseOfStudyId,
        departmentId,
        name,
        shortName,
        uniqueID,
        award,
        duration,
        requiredCreditUnit,
        advisor,
        status
    ){
        this.CourseOfStudyId = CourseOfStudyId;
        this.DepartmentId = departmentId;
        this.Name = name;
        this.ShortName = shortName;
        this.UniqueID =  uniqueID;
        this.Award = award;
        this.Duration = duration;
        this.RequiredCreditUnit = requiredCreditUnit;
        this.Advisor = advisor;
        this.status = status;
    }
}