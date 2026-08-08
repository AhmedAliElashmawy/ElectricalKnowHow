package com.electricalknowhow.backend.service;

import com.electricalknowhow.backend.entity.Course;
import com.electricalknowhow.backend.repository.CourseRepository;
import com.electricalknowhow.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    public List<Course> getAllCourses(UUID courseGroupId) {
        return courseRepository.findByCourseGroup_CourseGroupIdOrderByOrderIndexAsc(courseGroupId);
    }

    public Optional<Course> getCourseById(UUID courseId) {
        return courseRepository.findById(courseId);
    }

    public Optional<Course> getCourseBySlug(String slug) {
        return courseRepository.findBySlug(slug);
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(UUID courseId, Course updateInfo) {
        Course existing = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found"));
        if (updateInfo.getTitle() != null) {
            existing.setTitle(updateInfo.getTitle());
        }
        if (updateInfo.getDescription() != null) {
            existing.setDescription(updateInfo.getDescription());
        }
        if (updateInfo.getOrderIndex() != null) {
            existing.setOrderIndex(updateInfo.getOrderIndex());
        }
        return courseRepository.save(existing);
    }

    public void deleteCourse(UUID courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new ResourceNotFoundException("Course not found");
        }
        courseRepository.deleteById(courseId);
    }
}
