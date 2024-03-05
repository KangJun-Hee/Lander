package com.lander.lwg.service;

import com.lander.lwg.dto.LanguageDto;
import com.lander.lwg.dto.user.UserDto;

import java.util.List;

public interface LanguageService {
    LanguageDto getLanguageById(int languageId);

    List<LanguageDto> getAllLanguages();

    LanguageDto updateLanguage(int languageId, LanguageDto updatedLanguage);

}
