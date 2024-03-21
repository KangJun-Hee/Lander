package com.lander.lwg.dto.language;

import com.lander.lwg.entity.Language;
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
