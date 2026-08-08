package com.electricalknowhow.backend.controller;

import com.electricalknowhow.backend.dto.CourseGroupDTO;
import com.electricalknowhow.backend.entity.CourseGroup;
import com.electricalknowhow.backend.mapper.EntityMapper;
import com.electricalknowhow.backend.service.CourseGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/course-groups")
@RequiredArgsConstructor
public class CourseGroupController {
    private final CourseGroupService courseGroupService;
    private final EntityMapper mapper;

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<CourseGroupDTO>> getAllCourseGroups(@PathVariable UUID categoryId) {
        return ResponseEntity.ok(courseGroupService.getAllCourseGroups(categoryId).stream()
                .map(mapper::toCourseGroupDTO)
                .collect(Collectors.toList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseGroupDTO> getCourseGroupById(@PathVariable UUID id) {
        return courseGroupService.getCourseGroupById(id)
                .map(mapper::toCourseGroupDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/slug/{slug}")
    public ResponseEntity<CourseGroupDTO> getCourseGroupBySlug(@PathVariable String slug) {
        return courseGroupService.getCourseGroupBySlug(slug)
                .map(mapper::toCourseGroupDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CourseGroupDTO> createCourseGroup(@Valid @RequestBody CourseGroupDTO courseGroupDTO) {
        CourseGroup created = courseGroupService.createCourseGroup(mapper.toCourseGroupEntity(courseGroupDTO));
        return ResponseEntity.ok(mapper.toCourseGroupDTO(created));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseGroupDTO> updateCourseGroup(@PathVariable UUID id, @Valid @RequestBody CourseGroupDTO courseGroupDTO) {
        CourseGroup updated = courseGroupService.updateCourseGroup(id, mapper.toCourseGroupEntity(courseGroupDTO));
        return ResponseEntity.ok(mapper.toCourseGroupDTO(updated));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourseGroup(@PathVariable UUID id) {
        courseGroupService.deleteCourseGroup(id);
        return ResponseEntity.ok("Course Group has been deleted");
    }
}
