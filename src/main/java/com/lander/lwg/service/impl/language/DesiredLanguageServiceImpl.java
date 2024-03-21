package com.lander.lwg.service.impl.language;

import com.lander.lwg.dto.language.DesiredLanguageDto;
import com.lander.lwg.entity.DesiredLanguage;
import com.lander.lwg.mapper.language.DesiredLanguageMapper;
import com.lander.lwg.repository.language.DesiredLanguageRepository;
import com.lander.lwg.service.language.DesiredLanguageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DesiredLanguageServiceImpl implements DesiredLanguageService {
    private DesiredLanguageRepository desiredLanguageRepository;

    @Override
    public List<DesiredLanguageDto> getAllLanguages() {
        List<DesiredLanguage> languages = desiredLanguageRepository.findAll();
        return languages.stream().map((language)-> DesiredLanguageMapper.mapToDesiredLanguageDto(language))
                .collect(Collectors.toList());
    }
}
