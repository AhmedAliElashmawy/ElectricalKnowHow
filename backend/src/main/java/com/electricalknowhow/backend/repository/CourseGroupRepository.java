package com.electricalknowhow.backend.repository;

import com.electricalknowhow.backend.entity.Category;
import com.electricalknowhow.backend.entity.CourseGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CourseGroupRepository extends JpaRepository<CourseGroup, UUID> {

    List<CourseGroup> findByCategory_CategoryIdOrderByOrderIndexAsc(UUID categoryId);

    List<CourseGroup> findByCategory_SlugOrderByOrderIndexAsc(String categorySlug);

    Optional<CourseGroup> findBySlug(String slug);
}
