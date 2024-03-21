package com.lander.lwg.mapper;

import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getUserId(),
                user.getId(),
                user.getPassword(),
                user.getUsername(),
                user.getEmail(),
                user.getLanguageName(),
                user.getDesiredLanguageName()
        );
    }

    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getUserId(),
                userDto.getId(),
                userDto.getPassword(),
                userDto.getUsername(),
                userDto.getEmail(),
                userDto.getLanguageName(),
                userDto.getDesiredLanguageName()
        );
    }
}
