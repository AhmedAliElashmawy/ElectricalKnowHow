package com.electricalknowhow.backend.service;

import com.electricalknowhow.backend.entity.Category;
import com.electricalknowhow.backend.enums.CategoryType;
import com.electricalknowhow.backend.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(UUID id) {
        return categoryRepository.findById(id);
    }

    public List<Category> getCategoriesByType(CategoryType categoryType) {
        return categoryRepository.getCategoriesByType(categoryType);
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category updateCategory(Category updatedInfo, UUID id) {
        Category existingCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with id " + id));
        if (updatedInfo.getName() != null) {
            existingCategory.setName(updatedInfo.getName());
        }
        if (updatedInfo.getDescription() != null) {
            existingCategory.setDescription(updatedInfo.getDescription());
        }
        return categoryRepository.save(existingCategory);
    }

    public void deleteCategory(UUID id) {
        if(!categoryRepository.existsById(id)) {
            throw new RuntimeException("Category not found with id " + id);
        }
        categoryRepository.deleteById(id);
    }

    public Optional<Category> getCategoryBySlug(String slug) {
        return categoryRepository.findBySlug(slug);
    }
}
