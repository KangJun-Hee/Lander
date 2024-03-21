package com.lander.lwg.mapper.language;

import com.lander.lwg.dto.language.DesiredLanguageDto;
import com.lander.lwg.dto.language.LanguageDto;
import com.lander.lwg.entity.DesiredLanguage;
import com.lander.lwg.entity.Language;

public class DesiredLanguageMapper {
    public static DesiredLanguageDto mapToDesiredLanguageDto(DesiredLanguage language){
        return new DesiredLanguageDto(
                language.getLanguageId(),
                language.getDesiredLanguageName()

        );
    }
}
