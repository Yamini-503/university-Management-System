package com.uni.springboot.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uni.springboot.entities.User;
import com.uni.springboot.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
      
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email is already registered.");
        }

        
        return userRepository.save(user);
    }

    public User loginUser(String email, String password, String role) {
        return userRepository.findByEmail(email)
                .filter(user -> user.getPassword().equals(password) && user.getRole().equalsIgnoreCase(role))
                .orElseThrow(() -> new RuntimeException("Invalid credentials or role"));
    }
}