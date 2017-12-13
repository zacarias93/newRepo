package lee.zac.repository;

import lee.zac.model.TimeSheet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/*** Created by zaclee on 10/26/16. ***/

@Repository
public interface TimeSheetDAO extends JpaRepository<TimeSheet, Long> {

    List<TimeSheet> findById(@Param("id") Long id);
}
