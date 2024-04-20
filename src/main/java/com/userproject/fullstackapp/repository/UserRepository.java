package com.userproject.fullstackapp.repository;

import com.userproject.fullstackapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long> {
}
