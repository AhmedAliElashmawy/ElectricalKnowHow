package com.electricalknowhow.backend.dto;

import com.electricalknowhow.backend.enums.CategoryType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {
    private UUID categoryId;
    @NotBlank(message = "Slug is required")
    private String slug;
    @NotBlank(message = "Name is required")
    private String name;
    private String description;
    @NotNull(message = "Type is required")
    private CategoryType type;
}
