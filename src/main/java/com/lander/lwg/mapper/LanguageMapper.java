package com.lander.lwg.mapper;

import com.lander.lwg.dto.LanguageDto;
import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.Language;
import com.lander.lwg.entity.User;

public class LanguageMapper {
    public static LanguageDto mapToLanguageDto(Language language){
        return new LanguageDto(
                language.getLanguageId(),
                language.getLanguageName()

        );
    }
}
