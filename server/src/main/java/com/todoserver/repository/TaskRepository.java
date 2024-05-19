package com.todoserver.repository;


import com.todoserver.entity.TaskEntity;
import com.todoserver.enums.Priority;
import com.todoserver.enums.Status;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface TaskRepository extends JpaRepository<TaskEntity, Long> {

    @Query("SELECT t FROM TaskEntity t WHERE" +
            "(:priority IS NULL OR t.priority = :priority) AND " +
            "(:status IS NULL OR t.status = :status) AND" +
            "(:dueDate IS NULL OR t.dueDate = :dueDate)")
    List<TaskEntity> findTasksByFilters(@Param("priority") Priority priority, @Param("status") Status status, @Param("dueDate") String dueDate, Sort sort);

}
