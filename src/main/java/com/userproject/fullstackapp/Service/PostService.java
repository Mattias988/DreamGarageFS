package com.userproject.fullstackapp.Service;

import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.userproject.fullstackapp.DTO.*;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Posts updatePost(Long postId, PostDTO postDTO){
        Posts post = postRepository.findById(postId)
                .orElseThrow(()-> new EntityNotFoundException("Ten post nie istnieje!"));
        post.getTitle(postDTO.);
    }

        public ResponseEntity<Posts> deletePost(Long postId){
        Posts existingPost = postRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Ten post nie istnieje"));
        postRepository.delete(existingPost);
        return null;
    }
}
