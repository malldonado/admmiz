package com.admmiz.app_admmiz.controllers;

import com.admmiz.app_admmiz.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    public ResponseEntity<String> createUser(@RequestBody User user) {
        String message = "Usuário: " + user.getEmail() + "Password: " + user.getPassword();
        return new ResponseEntity<>(message, HttpStatus.CREATED);
    }
}
