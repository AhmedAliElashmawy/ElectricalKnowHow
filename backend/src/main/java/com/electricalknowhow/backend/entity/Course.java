package com.electricalknowhow.backend.entity;

import jakarta.persistence.*;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "course")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID courseId;

    @Column(nullable = false)
    private String title;

    private String description;

    @Column(nullable = false, unique = true)
    private String slug;

    private Integer orderIndex;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_group_id")
    private CourseGroup courseGroup;
}
