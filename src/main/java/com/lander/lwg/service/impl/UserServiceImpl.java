package com.lander.lwg.service.impl;

import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.User;
import com.lander.lwg.exception.ResourceNotFoundException;
import com.lander.lwg.mapper.UserMapper;
import com.lander.lwg.repository.UserRepository;
import com.lander.lwg.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return null;
    }

    @Override
    public UserDto getUserById(int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User is not exist with given id : "+userId));
        return UserMapper.mapToUserDto(user);
    }


    public UserDto login(UserDto userDto){
        Optional<User> byUserEmail = userRepository.findByEmail(userDto.getEmail());
        if(byUserEmail.isPresent()){
            User user = byUserEmail.get();
            if(user.getPassword().equals(userDto.getPassword())){
                UserDto dto = UserDto.toUserDto(user);
                return dto;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }


    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user)->UserMapper.mapToUserDto(user))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(int userId, UserDto updatedUser) {
        User user = userRepository.findById(userId).orElseThrow(
                ()-> new ResourceNotFoundException("User is not exist with given id : "+userId)
        );

        user.setId(updatedUser.getId());
        user.setPassword(updatedUser.getPassword());
        user.setEmail(updatedUser.getEmail());
        user.setUsername(updatedUser.getUsername());

        User updatedUserObj = userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(int userId) {
        User user = userRepository.findById(userId).orElseThrow(
                ()-> new ResourceNotFoundException("User is not exist with given id : "+userId)
        );

        userRepository.deleteById(userId);
    }
}
