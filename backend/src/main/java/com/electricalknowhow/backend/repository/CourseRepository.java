package com.electricalknowhow.backend.repository;

import com.electricalknowhow.backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CourseRepository extends JpaRepository<Course, UUID> {

}
