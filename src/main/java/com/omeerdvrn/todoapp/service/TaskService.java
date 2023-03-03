package com.omeerdvrn.todoapp.service;

import com.omeerdvrn.todoapp.dto.TaskDto;
import com.omeerdvrn.todoapp.model.Task;
import com.omeerdvrn.todoapp.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskDto> readAll(){
        List<Task> tasks = taskRepository.findAll();
        List<TaskDto> taskDtos = new ArrayList<>();

        tasks.stream().forEach(t -> {
            TaskDto dto = TaskDto.builder()
                    .title(t.getTitle())
                    .completed(t.getCompleted())
                    .build();
            taskDtos.add(dto);
        });
        return taskDtos;
    }

    public List<Task> readWithIds(){
        List<Task> tasks = taskRepository.findAll();
        return tasks;
    }

    public TaskDto readById(String id) {
        Task task = taskRepository.findById(id).orElse(null);
        if (task != null) {
            TaskDto dto = TaskDto.builder()
                    .title(task.getTitle())
                    .completed(task.getCompleted())
                    .build();
            return dto;
        }
        return null;
    }

    public TaskDto save(TaskDto taskDto) {
        Task newTask = Task.builder()
                .title(taskDto.getTitle())
                .completed(taskDto.getCompleted())
                .build();
        taskRepository.save(newTask);

        return taskDto;
    }

    public TaskDto putTask(String id, TaskDto newTaskDto) {
        if(taskRepository.findById(id).isPresent()){
            Task task = Task.builder()
                    .id(id)
                    .title(newTaskDto.getTitle())
                    .completed(newTaskDto.getCompleted())
                    .build();
            taskRepository.save(task);

            return newTaskDto;
        }
        return null;


    }

    public void deleteTask(String id) {
        if(taskRepository.findById(id).isPresent()){
            taskRepository.deleteById(id);
        }
    }
}
