package com.omeerdvrn.todoapp.controllers;

import com.omeerdvrn.todoapp.dto.TaskDto;
import com.omeerdvrn.todoapp.model.Task;
import com.omeerdvrn.todoapp.service.TaskService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @Operation(
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = @Content(
                                    mediaType = MediaType.APPLICATION_JSON_VALUE,
                                    schema= @Schema(implementation= TaskDto.class)
                            )
                    )
            })
    @GetMapping
    private ResponseEntity<List<TaskDto>> readAll(){
        List<TaskDto> taskDtos = taskService.readAll();
        return ResponseEntity.ok(taskDtos);
    }

    @GetMapping("/readWithId")
    private ResponseEntity<List<Task>> readAllWithId(){
        return ResponseEntity.ok(taskService.readWithIds());
    }

    @Operation(
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = @Content(
                                    mediaType = MediaType.APPLICATION_JSON_VALUE,
                                    schema= @Schema(implementation= TaskDto.class)
                            )
                    )
                    ,
                    @ApiResponse (
                            responseCode = "404",
                            description = "BAD request",
                            content = @Content (schema= @Schema (hidden = true))
                    )
            })
    @GetMapping("/{id}")
    private ResponseEntity<TaskDto> readById(@PathVariable String id){
        TaskDto dto = taskService.readById(id);
        if(dto != null)
            return ResponseEntity.ok(dto);
        else
            return ResponseEntity.notFound().build();
    }

    @Operation(
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "201",
                            description = "Created",
                            content = @Content(
                                    mediaType = MediaType.APPLICATION_JSON_VALUE,
                                    schema= @Schema(implementation= TaskDto.class)
                            )
                    )
            })
    @PostMapping
    private ResponseEntity<TaskDto> postTask(@RequestBody TaskDto taskDto){
        taskService.save(taskDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskDto);
    }

    @Operation(
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = @Content(
                                    mediaType = MediaType.APPLICATION_JSON_VALUE,
                                    schema= @Schema(implementation= TaskDto.class)
                            )
                    )
                    ,
                    @ApiResponse (
                            responseCode = "404",
                            description = "BAD request",
                            content = @Content (schema= @Schema (hidden = true))
                    )
            })
    @PutMapping("/{id}")
    private ResponseEntity<TaskDto> putTask(@PathVariable String id, @RequestBody TaskDto newTaskDto){
        TaskDto dto = taskService.putTask(id, newTaskDto);
        if(dto != null)
            return ResponseEntity.ok(newTaskDto);
        else
            return ResponseEntity.notFound().build();
    }

    @Operation(
            method = "GET",
            responses = {
                    @ApiResponse(
                            responseCode = "204",
                            description = "Success",
                            content = @Content(
                                    mediaType = MediaType.APPLICATION_JSON_VALUE,
                                    schema= @Schema(implementation= TaskDto.class)
                            )
                    )
            })
    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deleteTask(@PathVariable String id){
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }
}
