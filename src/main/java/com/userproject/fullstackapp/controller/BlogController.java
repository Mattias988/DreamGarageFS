package com.userproject.fullstackapp.controller;

import com.userproject.fullstackapp.DTO.BlogDTO;
import com.userproject.fullstackapp.Service.BlogService;
import com.userproject.fullstackapp.model.Posts;
import com.userproject.fullstackapp.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private BlogService blogService;

    @GetMapping("/posts")
    public ResponseEntity<List<Posts>> getAllPosts() {
        List<Posts> postsList = blogRepository.findAll();
        return new ResponseEntity<>(postsList, HttpStatus.OK);
    }

    @PostMapping("/posts")
    public Posts posts(@RequestBody Posts newPost){
        return blogRepository.save(newPost);
    }

    @PutMapping("/posts/{postId}")
    public Posts updatePosts(@PathVariable Long postId, @RequestBody BlogDTO blogDTO){
        return blogService.updateBlog(postId, blogDTO);
    }

    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<Posts> deletePost(@PathVariable Long postId){
        return blogService.deletePost(postId);
    }
}
