package com.todoserver.service;


import com.todoserver.entity.TaskEntity;
import com.todoserver.enums.Priority;
import com.todoserver.enums.Status;
import com.todoserver.repository.TaskRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskEntity> getAllTasks(Priority priority, Status status, String dueDate, String sortBy, String direction) {
        Sort sort = Sort.by(Sort.Direction.fromString(direction), sortBy);
        return taskRepository.findTasksByFilters(priority, status, dueDate, sort);
    }

    public Optional<TaskEntity> findById(Long id) {
        return taskRepository.findById(id);
    }

    public TaskEntity save(TaskEntity taskEntity) {
        return taskRepository.save(taskEntity);
    }

    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }
}
