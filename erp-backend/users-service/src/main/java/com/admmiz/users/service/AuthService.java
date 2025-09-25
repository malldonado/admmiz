package com.admmiz.users.service;

import com.admmiz.users.model.Users;
import com.admmiz.users.repository.UsersRepository;
import com.admmiz.users.security.JwtTokenProvider;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UsersRepository usersRepository;
    private final JwtTokenProvider jwtTokenProvider;

    public AuthService(UsersRepository usersRepository, JwtTokenProvider jwtTokenProvider) {
        this.usersRepository = usersRepository;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public String authenticate(String email, String password) {
        Users user = usersRepository.findByEmail(email);
        if (user == null) return "Usuário não encontrado";

        if(!BCrypt.checkpw(password, user.getPassword())) return "Senha Incorreta";

        return jwtTokenProvider.generateToken(email);
    }

}
