package com.userproject.fullstackapp.Service;

import com.userproject.fullstackapp.DTO.PostDTO;
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Posts updatePost(Long postId, PostDTO postDTO){
        Posts existingPost = postRepository.findById(postId)
                .orElseThrow(()-> new EntityNotFoundException("Ten post nie istnieje!"));
        existingPost.setTitle(postDTO.getNewTitle());
        existingPost.setDescription(postDTO.getNewDescription());

        return postRepository.save(existingPost);
    }
}
