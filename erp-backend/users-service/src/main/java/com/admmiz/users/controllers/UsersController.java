package com.admmiz.users.controllers;

import com.admmiz.users.model.Users;
import com.admmiz.users.repository.UsersRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UsersController {

    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    //Objeto hash para o user
    private Map<Long, String> users = new HashMap<>();

    //construtor recebe os valores e passa para as variaveis
    public UsersController(UsersRepository usersRepository, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    public Users createUser(@RequestBody Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return usersRepository.save(user);
    }

    @GetMapping
    public Map<Long, String> getUsers() {
        return users;
    }

    @GetMapping("/{id}")
    public String getUser(@PathVariable Long id) {
        return users.getOrDefault(id, "Usuário não encontrado");
    }

    @PutMapping("/{id}")
    public String updateUser(@PathVariable Long id, @RequestParam String email) {
        if(users.containsKey(id)) {
            users.put(id, email);
            return "Usuário atualizado com sucesso";
        }
        return "Usuário não encontrado";
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {
        if (users.containsKey(id)) {
            users.remove(id);
            return "Usuário deletado com sucesso" + id;
        }
        return "Usuário não encontrado";
    }
}
