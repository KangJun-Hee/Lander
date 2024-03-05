package com.lander.lwg.service;

import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.repository.UserRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {


    UserDto createUser(UserDto userDto);

    UserDto getUserById(int userId);

    UserDto login(UserDto userDto);

    List<UserDto> getAllUsers();

    UserDto updateUser(int userId, UserDto updatedUser);

    void deleteUser(int userId);
}
