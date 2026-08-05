package com.electricalknowhow.backend.repository;

import com.electricalknowhow.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
