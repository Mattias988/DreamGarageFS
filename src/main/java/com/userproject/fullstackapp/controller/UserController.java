package com.userproject.fullstackapp.controller;


import com.userproject.fullstackapp.model.User;
import com.userproject.fullstackapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //add user controller
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
}
