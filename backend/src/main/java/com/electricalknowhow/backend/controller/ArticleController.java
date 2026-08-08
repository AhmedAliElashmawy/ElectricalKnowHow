package com.electricalknowhow.backend.controller;

import com.electricalknowhow.backend.dto.ArticleDTO;
import com.electricalknowhow.backend.entity.Article;
import com.electricalknowhow.backend.mapper.EntityMapper;
import com.electricalknowhow.backend.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/articles")
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleService articleService;
    private final EntityMapper mapper;

    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<ArticleDTO>> getAllArticles(@PathVariable UUID courseId) {
        return ResponseEntity.ok(articleService.getAllArticles(courseId).stream()
                .map(mapper::toArticleDTO)
                .collect(Collectors.toList()));
    }

    @GetMapping("/{articleId}")
    public ResponseEntity<ArticleDTO> getArticleById(@PathVariable UUID articleId) {
        return articleService.getArticleById(articleId)
                .map(mapper::toArticleDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<ArticleDTO> getArticleBySlug(@PathVariable String slug) {
        return articleService.getArticleBySlug(slug)
                .map(mapper::toArticleDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ArticleDTO> createArticle(@Valid @RequestBody ArticleDTO articleDTO) {
        Article created = articleService.createArticle(mapper.toArticleEntity(articleDTO));
        return ResponseEntity.ok(mapper.toArticleDTO(created));
    }

    @PutMapping("/{articleId}")
    public ResponseEntity<ArticleDTO> updateArticle(@PathVariable UUID articleId, @Valid @RequestBody ArticleDTO articleDTO) {
        Article updated = articleService.updateArticle(articleId, mapper.toArticleEntity(articleDTO));
        return ResponseEntity.ok(mapper.toArticleDTO(updated));
    }

    @DeleteMapping("/{articleId}")
    public ResponseEntity<String> deleteArticle(@PathVariable UUID articleId) {
        articleService.deleteArticle(articleId);
        return ResponseEntity.ok("Article deleted");
    }
}
