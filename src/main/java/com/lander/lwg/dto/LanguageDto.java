package com.lander.lwg.dto;

import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.Language;
import com.lander.lwg.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LanguageDto {
    private int languageId;
    private String languageName;

    public static LanguageDto toLanguageDto(Language language){
        LanguageDto languageDto = new LanguageDto();
        languageDto.setLanguageId(language.getLanguageId());
        languageDto.setLanguageName(language.getLanguageName());

        return languageDto;
    }
}
