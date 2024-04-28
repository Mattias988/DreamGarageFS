package com.userproject.fullstackapp.Service;

<<<<<<< HEAD
import com.userproject.fullstackapp.DTO.PostDTO;
=======
>>>>>>> 0e6fd8e04d3f692ddb9c123444633f78bab58d57
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.repository.PostRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.stereotype.Service;
=======
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.userproject.fullstackapp.DTO.*;
>>>>>>> 0e6fd8e04d3f692ddb9c123444633f78bab58d57

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Posts updatePost(Long postId, PostDTO postDTO){
<<<<<<< HEAD
        Posts existingPost = postRepository.findById(postId)
                .orElseThrow(()-> new EntityNotFoundException("Ten post nie istnieje!"));
        existingPost.setTitle(postDTO.getNewTitle());
        existingPost.setDescription(postDTO.getNewDescription());

        return postRepository.save(existingPost);
=======
        Posts post = postRepository.findById(postId)
                .orElseThrow(()-> new EntityNotFoundException("Ten post nie istnieje!"));
        post.getTitle(postDTO.);
    }

        public ResponseEntity<Posts> deletePost(Long postId){
        Posts existingPost = postRepository.findById(postId)
                .orElseThrow(() -> new EntityNotFoundException("Ten post nie istnieje"));
        postRepository.delete(existingPost);
        return null;
>>>>>>> 0e6fd8e04d3f692ddb9c123444633f78bab58d57
    }
}
