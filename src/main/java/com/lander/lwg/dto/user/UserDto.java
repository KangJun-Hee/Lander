package com.lander.lwg.dto.user;

import com.lander.lwg.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int userId;
    private String id;
    private String password;
    private String username;
    private String email;
    private String languageName;

    public static UserDto toUserDto(User user){
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setPassword(user.getPassword());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setLanguageName(user.getLanguageName());

        return userDto;
    }
}
