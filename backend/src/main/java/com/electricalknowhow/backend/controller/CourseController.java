package com.electricalknowhow.backend.controller;

import com.electricalknowhow.backend.dto.CourseDTO;
import com.electricalknowhow.backend.entity.Course;
import com.electricalknowhow.backend.mapper.EntityMapper;
import com.electricalknowhow.backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService courseService;
    private final EntityMapper mapper;

    @GetMapping("/course-group/{courseGroupId}")
    public ResponseEntity<List<CourseDTO>> getAllCourses(@PathVariable UUID courseGroupId) {
        return ResponseEntity.ok(courseService.getAllCourses(courseGroupId).stream()
                .map(mapper::toCourseDTO)
                .collect(Collectors.toList()));
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<CourseDTO> getCourseById(@PathVariable UUID courseId) {
        return courseService.getCourseById(courseId)
                .map(mapper::toCourseDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<CourseDTO> getCourseBySlug(@PathVariable String slug) {
        return courseService.getCourseBySlug(slug)
                .map(mapper::toCourseDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CourseDTO> createCourse(@Valid @RequestBody CourseDTO courseDTO) {
        Course created = courseService.createCourse(mapper.toCourseEntity(courseDTO));
        return ResponseEntity.ok(mapper.toCourseDTO(created));
    }

    @PutMapping("/{courseId}")
    public ResponseEntity<CourseDTO> updateCourse(@PathVariable UUID courseId, @Valid @RequestBody CourseDTO courseDTO) {
        Course updated = courseService.updateCourse(courseId, mapper.toCourseEntity(courseDTO));
        return ResponseEntity.ok(mapper.toCourseDTO(updated));
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<String> deleteCourse(@PathVariable UUID courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.ok("Course has been deleted");
    }
}
