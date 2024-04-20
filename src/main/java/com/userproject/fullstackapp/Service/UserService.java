package com.userproject.fullstackapp.Service;

import com.userproject.fullstackapp.DTO.UserDTO;
import com.userproject.fullstackapp.model.User;
import com.userproject.fullstackapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

//    public User updateUser(Long userId, UserDTO userDTO){
//        Optional<User> updateUser = Optional.ofNullable(userRepository.findById(userId)
//                .orElseThrow(() -> {
//                    return new RuntimeException("Nie istnieje");
//                }));
//
//
//    }


}
