package com.omeerdvrn.todoapp.controller;

import com.omeerdvrn.todoapp.dto.TaskDto;
import com.omeerdvrn.todoapp.service.TaskService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    private ResponseEntity<List<TaskDto>> readAll(){
        List<TaskDto> taskDtos = taskService.readAll();
        return ResponseEntity.ok(taskDtos);
    }

    @GetMapping("/{id}")
    private ResponseEntity<TaskDto> readById(@PathVariable String id){
        TaskDto dto = taskService.readById(id);
        if(dto != null)
            return ResponseEntity.ok(dto);
        else
            return ResponseEntity.notFound().build();
    }

    @PostMapping
    private ResponseEntity<TaskDto> postTask(@RequestBody TaskDto taskDto){
        taskService.save(taskDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskDto);
    }

    @PutMapping("/{id}")
    private ResponseEntity<TaskDto> putTask(@PathVariable String id, @RequestBody TaskDto newTaskDto){
        TaskDto dto = taskService.putTask(id, newTaskDto);
        if(dto != null)
            return ResponseEntity.ok(newTaskDto);
        else
            return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deleteTask(@PathVariable String id){
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}
