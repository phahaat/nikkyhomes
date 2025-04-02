package com.example.nikkyhomes.repository;

import com.example.nikkyhomes.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {}
