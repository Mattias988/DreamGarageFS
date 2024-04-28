package com.userproject.fullstackapp.repository;

import com.userproject.fullstackapp.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Posts, Long> {
}
