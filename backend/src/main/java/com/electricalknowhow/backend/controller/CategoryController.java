package com.electricalknowhow.backend.controller;

import com.electricalknowhow.backend.dto.CategoryDTO;
import com.electricalknowhow.backend.entity.Category;
import com.electricalknowhow.backend.enums.CategoryType;
import com.electricalknowhow.backend.mapper.EntityMapper;
import com.electricalknowhow.backend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    private final EntityMapper mapper;

    @GetMapping("/all")
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories().stream()
                .map(mapper::toCategoryDTO)
                .collect(Collectors.toList()));
    }

    @GetMapping("/type/{categoryType}")
    public ResponseEntity<List<CategoryDTO>> getAllCategoriesByType(@PathVariable CategoryType categoryType) {
        return ResponseEntity.ok(categoryService.getCategoriesByType(categoryType).stream()
                .map(mapper::toCategoryDTO)
                .collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable UUID id) {
        return categoryService.getCategoryById(id)
                .map(mapper::toCategoryDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<CategoryDTO> getCategoryBySlug(@PathVariable String slug) {
        return categoryService.getCategoryBySlug(slug)
                .map(mapper::toCategoryDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> createCategory(@Valid @RequestBody CategoryDTO categoryDTO) {
        Category created = categoryService.createCategory(mapper.toCategoryEntity(categoryDTO));
        return ResponseEntity.ok(mapper.toCategoryDTO(created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoryDTO> updateCategory(@Valid @RequestBody CategoryDTO categoryDTO, @PathVariable UUID id) {
        Category updated = categoryService.updateCategory(mapper.toCategoryEntity(categoryDTO), id);
        return ResponseEntity.ok(mapper.toCategoryDTO(updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable UUID id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category deleted successfully!");
    }
}
