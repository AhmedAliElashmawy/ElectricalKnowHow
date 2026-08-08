package com.electricalknowhow.backend.mapper;

import com.electricalknowhow.backend.dto.*;
import com.electricalknowhow.backend.entity.*;
import com.electricalknowhow.backend.repository.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class EntityMapper {

    @Autowired
    protected CategoryRepository categoryRepository;
    @Autowired
    protected CourseGroupRepository courseGroupRepository;
    @Autowired
    protected CourseRepository courseRepository;

    public abstract CategoryDTO toCategoryDTO(Category category);

    public abstract Category toCategoryEntity(CategoryDTO dto);

    @Mapping(source = "category.categoryId", target = "categoryId")
    public abstract CourseGroupDTO toCourseGroupDTO(CourseGroup group);

    @Mapping(target = "category", expression = "java(dto.getCategoryId() != null ? categoryRepository.findById(dto.getCategoryId()).orElse(null) : null)")
    public abstract CourseGroup toCourseGroupEntity(CourseGroupDTO dto);

    @Mapping(source = "courseGroup.courseGroupId", target = "courseGroupId")
    public abstract CourseDTO toCourseDTO(Course course);

    @Mapping(target = "courseGroup", expression = "java(dto.getCourseGroupId() != null ? courseGroupRepository.findById(dto.getCourseGroupId()).orElse(null) : null)")
    public abstract Course toCourseEntity(CourseDTO dto);

    @Mapping(source = "course.courseId", target = "courseId")
    public abstract ArticleDTO toArticleDTO(Article article);

    @Mapping(target = "course", expression = "java(dto.getCourseId() != null ? courseRepository.findById(dto.getCourseId()).orElse(null) : null)")
    public abstract Article toArticleEntity(ArticleDTO dto);
}
