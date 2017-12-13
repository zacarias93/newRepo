package lee.zac.model;

import javax.persistence.*;

/*** Created by zaclee on 10/26/16. ***/

@Entity
@Table(name = "timecard")
public class TimeSheet {

    private static long counter = 0;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long employeeID;
    private String employeeFirstName;
    private String employeeLastName;
    private double payRate;

    private String jobName;
    private long jobID;

    private String hoursWorked;

    private String dateString;

    public TimeSheet() {
    }



    public TimeSheet(Employee employee, Job job, String hoursWorked) {
        this.employeeID = employee.getID();
        this.employeeFirstName = employee.getFirstName();
        this.employeeLastName = employee.getLastName();
        this.jobName = job.getName();
        this.jobID = job.getID();
        this.hoursWorked = hoursWorked;
        this.dateString = "dateString";
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDateString() {
        return dateString;
    }

    public void setDateString(String dateString) {
        this.dateString = dateString;
    }

    public long getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(long employeeID) {
        this.employeeID = employeeID;
    }

    public String getEmployeeFirstName() {
        return employeeFirstName;
    }

    public void setEmployeeFirstName(String employeeFirstName) {
        this.employeeFirstName = employeeFirstName;
    }

    public String getEmployeeLastName() {
        return employeeLastName;
    }

    public void setEmployeeLastName(String employeeLastName) {
        this.employeeLastName = employeeLastName;
    }

    public double getPayRate() {
        return payRate;
    }

    public void setPayRate(double payRate) {
        this.payRate = payRate;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public long getJobID() {
        return this.jobID;
    }

    public void setJobID(long jobID) {
        this.jobID = jobID;
    }

    public String getHoursWorked() {
        return hoursWorked;
    }

    public void setHoursWorked(String hoursWorked) {
        this.hoursWorked = hoursWorked;
    }
}
