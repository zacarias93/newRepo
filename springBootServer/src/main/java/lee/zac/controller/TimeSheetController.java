package lee.zac.controller;

import lee.zac.model.TimeSheet;
import lee.zac.repository.TimeSheetDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/*** Created by zaclee on 10/26/16. ***/
@CrossOrigin
@RestController
public class TimeSheetController {

    @Autowired
    TimeSheetDAO timeSheetDAO;

    @RequestMapping(value = "/timesheet", method = RequestMethod.GET)
    public Iterable<TimeSheet> getAllTimeSheet(){
        return timeSheetDAO.findAll();
    }

    @RequestMapping(value = "/timesheet" , method = RequestMethod.POST)
    public TimeSheet addTimeSheet(@RequestBody TimeSheet timeSheet){
        timeSheetDAO.save(timeSheet);
        return timeSheet;
    }

    @RequestMapping(value = "/timesheet/remove/{id}" , method = RequestMethod.GET)
    public String remove(@PathVariable Long id) {
        timeSheetDAO.delete(id);
        return "{\"message\":\"TimeSheet: Removed\"}";
    }

//    @RequestMapping(value = "/timesheet" , method = RequestMethod.OPTIONS)
//    public ResponseEntity handle(){
//        return new ResponseEntity(HttpStatus.OK);
//    }

    //    @RequestMapping(value = "/timecard/{employeeid}", method = RequestMethod.GET)
//    public List<TimeSheet> getEmployeeTimeCards(@PathVariable Long employeeid){
//        Iterable<TimeSheet> allTimeCards = timeSheetDAO.findAll();
//        List<TimeSheet> employeeTimeCards = new ArrayList<>();
//        for(TimeSheet tc : allTimeCards) {
//            if(tc.getEmployeeID() == employeeid) {
//                employeeTimeCards.add(tc);
//            }
//        }
//        return employeeTimeCards;
//    }
}
