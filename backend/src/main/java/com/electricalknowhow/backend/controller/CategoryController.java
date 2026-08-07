package com.electricalknowhow.backend.controller;

import com.electricalknowhow.backend.entity.Category;
import com.electricalknowhow.backend.enums.CategoryType;
import com.electricalknowhow.backend.repository.CategoryRepository;
import com.electricalknowhow.backend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/type/{categoryType}")
    public List<Category> getAllCategoriesByType(@PathVariable CategoryType categoryType) {
        return categoryService.getCategoriesByType(categoryType);
    }

    @GetMapping("/{id}")
    public Optional<Category> getCategoryById(@PathVariable UUID id) {
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/{slug}")
    public Optional<Category> getCategoryBySlug(@PathVariable String slug) {
        return categoryService.getCategoryBySlug(slug);
    }

    @PostMapping
    public Category createCategory(@RequestBody Category category) {
        return categoryService.createCategory(category);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@RequestBody Category category,  @PathVariable UUID id) {
        return categoryService.updateCategory(category,id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable UUID id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category deleted successfully!");
    }
}
