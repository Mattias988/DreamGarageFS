package com.userproject.fullstackapp.controller;

<<<<<<< HEAD
import com.userproject.fullstackapp.DTO.PostDTO;
import com.userproject.fullstackapp.Service.PostService;
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.model.Products;
=======
import com.userproject.fullstackapp.Service.PostService;
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.DTO.*;
>>>>>>> 0e6fd8e04d3f692ddb9c123444633f78bab58d57
import com.userproject.fullstackapp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PostService postService;

    @PostMapping("/post")
<<<<<<< HEAD
    public Posts posts(@RequestBody Posts newPost){
        return postRepository.save(newPost);
    }

    @GetMapping("/post")
    public ResponseEntity<List<Posts>> getAllPosts() {
=======
    public Posts addPost(@RequestBody Posts posts){
        return postRepository.save(posts);
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Posts>> getAllPosts(){
>>>>>>> 0e6fd8e04d3f692ddb9c123444633f78bab58d57
        List<Posts> postsList = postRepository.findAll();
        return new ResponseEntity<>(postsList, HttpStatus.OK);
    }

    @PutMapping("/post/{postId}")
    public Posts updatePost(@PathVariable Long postId, @RequestBody PostDTO postDTO){
        return postService.updatePost(postId, postDTO);
    }

<<<<<<< HEAD
=======
    @DeleteMapping("/post/{postId}")
    public ResponseEntity<Posts> deletePost(@PathVariable Long postId){
        return postService.deletePost(postId);
    }
>>>>>>> 0e6fd8e04d3f692ddb9c123444633f78bab58d57
}
