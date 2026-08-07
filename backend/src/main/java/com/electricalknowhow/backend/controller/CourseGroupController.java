package com.electricalknowhow.backend.controller;

import com.electricalknowhow.backend.entity.CourseGroup;
import com.electricalknowhow.backend.service.CourseGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/course-groups")
@RequiredArgsConstructor
public class CourseGroupController {
    private final CourseGroupService courseGroupService;

    @GetMapping("/category/{categoryId}")
    public List<CourseGroup> getAllCourseGroups(@PathVariable UUID categoryId) {
        return courseGroupService.getAllCourseGroups(categoryId);
    }

    @GetMapping("/{id}")
    public Optional<CourseGroup> getCourseGroupById(@PathVariable UUID id) {
        return courseGroupService.getCourseGroupById(id);
    }

    @GetMapping("/slug/{slug}")
    public Optional<CourseGroup> getCourseGroupBySlug(@PathVariable String slug) {
        return courseGroupService.getCourseGroupBySlug(slug);
    }

    @PostMapping
    public CourseGroup createCourseGroup(@RequestBody CourseGroup courseGroup) {
        return courseGroupService.createCourseGroup(courseGroup);
    }

    @PutMapping("/{id}")
    public CourseGroup updateCourseGroup(@PathVariable UUID id, @RequestBody CourseGroup courseGroup) {
        return courseGroupService.updateCourseGroup(id,courseGroup);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCourseGroup(@PathVariable UUID id) {
        courseGroupService.deleteCourseGroup(id);
        return ResponseEntity.ok("Course Group has been deleted");
    }
}
