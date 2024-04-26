package com.userproject.fullstackapp.Service;

import com.userproject.fullstackapp.DTO.BlogDTO;
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Posts updatePost(Long postId, BlogDTO postDTO){
        Posts post = postRepository.findById(postId)
                .orElseThrow(()-> new EntityNotFoundException("Ten post nie istnieje!"));
        post.setTitle(postDTO.getNewTitle());
        System.out.println("Yo tu był - benedetto");
        post.setDescription(postDTO.getNewDescription());
        postRepository.save(post);
        return null;
    }

        public ResponseEntity<Posts> deletePost(Long postId){
        Posts existingPost = postRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Ten post nie istnieje"));
        postRepository.delete(existingPost);
        return null;
    }
}
