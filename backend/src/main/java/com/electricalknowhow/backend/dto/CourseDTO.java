package com.electricalknowhow.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDTO {
    private UUID courseId;
    @NotBlank(message = "Title is required")
    private String title;
    private String description;
    @NotBlank(message = "Slug is required")
    private String slug;
    @NotNull(message = "Order index is required")
    private Integer orderIndex;
    @NotNull(message = "Course Group ID is required")
    private UUID courseGroupId;
}
