package com.electricalknowhow.backend.repository;

import com.electricalknowhow.backend.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ArticleRepository extends JpaRepository<Article, UUID> {
    List<Article> findByCourse_CourseIdOrderByOrderIndexAsc(UUID courseId);

    Optional<Article> findBySlug(String slug);
}
