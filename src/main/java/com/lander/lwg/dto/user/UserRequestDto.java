package com.lander.lwg.dto.user;

import com.lander.lwg.entity.User;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor
public class UserRequestDto {
    private String email;
    private String password;


}
