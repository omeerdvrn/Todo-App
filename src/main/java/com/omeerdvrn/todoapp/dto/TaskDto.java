package com.omeerdvrn.todoapp.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
public class TaskDto {
    private String title;
    private String completed;
    private LocalDate creationDate;
    private LocalDate endDate;
}
