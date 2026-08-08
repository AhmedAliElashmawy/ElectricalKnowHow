package com.electricalknowhow.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDTO {
    private UUID articleId;
    @NotBlank(message = "Title is required")
    private String title;
    @NotBlank(message = "Slug is required")
    private String slug;
    @NotBlank(message = "Body is required")
    private String body;
    @NotNull(message = "Order index is required")
    private Integer orderIndex;
    @NotNull(message = "Course ID is required")
    private UUID courseId;
    private LocalDateTime publishedAt;
    private LocalDateTime updatedAt;
}
