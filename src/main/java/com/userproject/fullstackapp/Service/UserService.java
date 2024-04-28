package com.userproject.fullstackapp.Service;

import com.userproject.fullstackapp.DTO.UserDTO;
import com.userproject.fullstackapp.model.User;
import com.userproject.fullstackapp.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User updateUser(Long userId, UserDTO userDTO){
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("Ten użytkownik nie istnieje!"));
        existingUser.setName(userDTO.getNewName());
        existingUser.setUsername(userDTO.getNewUsername());
        existingUser.setEmail(userDTO.getNewEmail());
        return userRepository.save(existingUser);
    }

    public ResponseEntity<User> deleteUser(Long userId){
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("Ten użytkownik nie istnieje!"));
        userRepository.delete(existingUser);
        return null;
    }


}
