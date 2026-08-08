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
public class CourseGroupDTO {
    private UUID courseGroupId;
    @NotBlank(message = "Slug is required")
    private String slug;
    @NotBlank(message = "Name is required")
    private String name;
    @NotNull(message = "Order index is required")
    private Integer orderIndex;
    @NotNull(message = "Category ID is required")
    private UUID categoryId;
}
