package lee.zac;

import lee.zac.model.Employee;
import lee.zac.model.Job;
import lee.zac.model.TimeSheet;
import lee.zac.repository.TimeSheetDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HrAppApplication implements CommandLineRunner {


    @Autowired
    TimeSheetDAO timeSheetDAO;

    public static void main(String[] args) {
        SpringApplication.run(HrAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {


        Employee employee1 = new Employee(1, "The", "Reaper", "z", 22.00);
        Employee employee2 = new Employee(1, "Mr.", "Jones", "z", 99.00);

        Job job1 = new Job(1, "Job1");
        Job job2 = new Job(2, "Job2");

        TimeSheet timecard1 = new TimeSheet( employee1, job1, "8");
        TimeSheet timecard2 = new TimeSheet( employee2, job2, "10");

        timeSheetDAO.save(timecard1);
        timeSheetDAO.save(timecard2);

    }
}
