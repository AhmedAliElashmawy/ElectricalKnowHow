package com.electricalknowhow.backend.service;

import com.electricalknowhow.backend.entity.Article;
import com.electricalknowhow.backend.repository.ArticleRepository;
import com.electricalknowhow.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ArticleService {
    private final ArticleRepository articleRepository;

    public List<Article> getAllArticles(UUID courseId) {
        return articleRepository.findByCourse_CourseIdOrderByOrderIndexAsc(courseId);
    }

    public Optional<Article> getArticleById(UUID articleId) {
        return articleRepository.findById(articleId);
    }

    public Optional<Article> getArticleBySlug(String slug) {
        return articleRepository.findBySlug(slug);
    }

    public Article createArticle(Article article) {
        article.setPublishedAt(LocalDateTime.now());
        return articleRepository.save(article);
    }

    public Article updateArticle(UUID articleId, Article updatedInfo) {
        Article existing = articleRepository.findById(articleId)
                .orElseThrow(() -> new ResourceNotFoundException("Article not found"));
        if (updatedInfo.getTitle() != null) {
            existing.setTitle(updatedInfo.getTitle());
        }
        if (updatedInfo.getBody() != null) {
            existing.setBody(updatedInfo.getBody());
        }
        if (updatedInfo.getOrderIndex() != null) {
            existing.setOrderIndex(updatedInfo.getOrderIndex());
        }
        existing.setUpdatedAt(LocalDateTime.now());
        return articleRepository.save(existing);
    }

    public void deleteArticle(UUID articleId) {
        if (!articleRepository.existsById(articleId)) {
            throw new ResourceNotFoundException("Article not found");
        }
        articleRepository.deleteById(articleId);
    }
}
