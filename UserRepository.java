package com.example.nikkyhomes.repository;

import com.example.nikkyhomes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {}
