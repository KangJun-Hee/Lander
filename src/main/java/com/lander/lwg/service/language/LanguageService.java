package com.lander.lwg.service.language;

import com.lander.lwg.dto.language.LanguageDto;

import java.util.List;

public interface LanguageService {
    LanguageDto getLanguageById(int languageId);

    List<LanguageDto> getAllLanguages();

    LanguageDto updateLanguage(int languageId, LanguageDto updatedLanguage);

}
