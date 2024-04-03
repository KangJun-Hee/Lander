package com.lander.lwg.controller;

import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.User;
import com.lander.lwg.repository.UserRepository;
import com.lander.lwg.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;
    private UserRepository userRepository;

    //Build Add User REST API
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    //Build Get User REST API
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Integer userId){
        UserDto userDto = userService.getUserById(userId);
        System.out.println("getUserById userId : "+userDto.getUserId());

        return ResponseEntity.ok(userDto);
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    public UserDto getUserByEmail(String email) {
        Optional<User> byUserEmail = userRepository.findByEmail(email);
        return byUserEmail.map(UserDto::toUserDto).orElse(null);
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto, HttpSession session) {
        Optional<User> byUserEmail = userRepository.findByEmail(userDto.getEmail());
        if (byUserEmail.isPresent()) {
            User user = byUserEmail.get();
            if (user.getPassword().equals(userDto.getPassword())) {
                // 비밀번호가 일치하면 로그인 성공
                session.setAttribute("loginEmail", user.getEmail());
                System.out.println("Server Log: " + userDto.getEmail() + ", " + userDto.getPassword());

                return ResponseEntity.ok(Map.of("success", true, "message", "Login successful","nickname", user.getUsername(), "userId",user.getUserId()));
            } else {
                // 비밀번호가 일치하지 않으면 로그인 실패
                return ResponseEntity.ok(Map.of("success", false, "message", "Invalid credentials"));
            }
        } else {
            // 사용자가 존재하지 않으면 로그인 실패
            return ResponseEntity.ok(Map.of("success", false, "message", "User not found"));
        }
    }

    //Buld Get All Users REST API
    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //Bulid Update User REST API
    @PutMapping("{id}")
    public  ResponseEntity<UserDto> updateUser(@PathVariable("id") int userId,
                                               @RequestBody UserDto updatedUser){
        UserDto userDto = userService.updateUser(userId, updatedUser);
        return ResponseEntity.ok(userDto);
    }

    //Build Delete user REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") int userId){
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully!");
    }
}
