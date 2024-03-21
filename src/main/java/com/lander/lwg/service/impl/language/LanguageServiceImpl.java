package com.lander.lwg.service.impl.language;

import com.lander.lwg.dto.language.LanguageDto;
import com.lander.lwg.entity.Language;
import com.lander.lwg.exception.ResourceNotFoundException;
import com.lander.lwg.mapper.language.LanguageMapper;
import com.lander.lwg.repository.language.LanguageRepository;
import com.lander.lwg.service.language.LanguageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LanguageServiceImpl implements LanguageService {
    private LanguageRepository languageRepository;

    @Override
    public LanguageDto getLanguageById(int languageId) {
        Language language = languageRepository.findById(languageId)
                .orElseThrow(()-> new ResourceNotFoundException("Language is not exist with given id : "+languageId));
        return LanguageMapper.mapToLanguageDto(language);
    }

    @Override
    public List<LanguageDto> getAllLanguages() {
        List<Language> languages = languageRepository.findAll();
        return languages.stream().map((language)->LanguageMapper.mapToLanguageDto(language))
                .collect(Collectors.toList());
    }

    @Override
    public LanguageDto updateLanguage(int languageId, LanguageDto updatedLanguage) {
        Language language = languageRepository.findById(languageId).orElseThrow(
                ()-> new ResourceNotFoundException("Language is not exist with given id : "+languageId)
        );

        language.setLanguageId(updatedLanguage.getLanguageId());
        language.setLanguageName(updatedLanguage.getLanguageName());

        Language updatedLanguageObj = languageRepository.save(language);

        return LanguageMapper.mapToLanguageDto(updatedLanguageObj);
    }
}
