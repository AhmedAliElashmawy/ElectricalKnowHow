package com.electricalknowhow.backend.entity;

import com.electricalknowhow.backend.enums.CategoryType;
import java.util.UUID;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID categoryId;

    @Column(nullable = false)
    private String slug;

    @Column(nullable = false, unique = true)
    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CategoryType type;
}
