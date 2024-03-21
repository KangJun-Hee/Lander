package com.lander.lwg.mapper.language;

import com.lander.lwg.dto.language.LanguageDto;
import com.lander.lwg.entity.Language;

public class LanguageMapper {
    public static LanguageDto mapToLanguageDto(Language language){
        return new LanguageDto(
                language.getLanguageId(),
                language.getLanguageName()

        );
    }
}
