package com.electricalknowhow.backend.service;

import com.electricalknowhow.backend.entity.CourseGroup;
import com.electricalknowhow.backend.repository.CourseGroupRepository;
import com.electricalknowhow.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseGroupService {
    private final CourseGroupRepository courseGroupRepository;

    public List<CourseGroup> getAllCourseGroups(UUID categoryId) {
        return courseGroupRepository.findByCategory_CategoryIdOrderByOrderIndexAsc(categoryId);
    }

    public Optional<CourseGroup> getCourseGroupBySlug(String slug) {
        return courseGroupRepository.findBySlug(slug);
    }

    public Optional<CourseGroup> getCourseGroupById(UUID id) {
        return courseGroupRepository.findById(id);
    }

    public CourseGroup createCourseGroup(CourseGroup courseGroup) {
        return courseGroupRepository.save(courseGroup);
    }

    public CourseGroup updateCourseGroup(UUID id, CourseGroup updateInfo) {
        CourseGroup existing = courseGroupRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course group not found"));
        if (updateInfo.getName() != null) {
            existing.setName(updateInfo.getName());
        }
        if (updateInfo.getOrderIndex() != null) {
            existing.setOrderIndex(updateInfo.getOrderIndex());
        }
        return courseGroupRepository.save(existing);
    }

    public void deleteCourseGroup(UUID id) {
        if (!courseGroupRepository.existsById(id)) {
            throw new ResourceNotFoundException("Course group not found");
        }
        courseGroupRepository.deleteById(id);
    }
}
