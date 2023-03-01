package com.omeerdvrn.todoapp.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TaskDto {
    private String title;
    private String completed;
}
