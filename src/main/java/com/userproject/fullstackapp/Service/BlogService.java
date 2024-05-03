package com.userproject.fullstackapp.Service;

import com.userproject.fullstackapp.DTO.BlogDTO;
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.repository.BlogRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;

    public Posts updateBlog(Long postId, BlogDTO blogDTO){
        Posts existingPosts = blogRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Ten blog nie istnieje!"));
        existingPosts.setTitle(blogDTO.getNewTitle());
        existingPosts.setDescription(blogDTO.getNewDescription());

        return blogRepository.save(existingPosts);
    }

    public ResponseEntity<Posts> deletePost(Long postId){
        Posts existingPosts = blogRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Ten blog nie istnieje!"));
        blogRepository.delete(existingPosts);
        return null;
    }
}
