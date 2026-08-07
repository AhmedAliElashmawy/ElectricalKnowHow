package com.electricalknowhow.backend.repository;

import com.electricalknowhow.backend.entity.Category;
import com.electricalknowhow.backend.enums.CategoryType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID> {
    public List<Category> getCategoriesByType(CategoryType categoryType);

    Optional<Category> findBySlug(String slug);
}
