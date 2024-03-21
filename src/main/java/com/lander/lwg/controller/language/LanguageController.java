package com.lander.lwg.controller.language;

import com.lander.lwg.dto.language.LanguageDto;
import com.lander.lwg.repository.language.LanguageRepository;
import com.lander.lwg.service.language.LanguageService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/languages")
public class LanguageController {
    private LanguageService languageService;
    private LanguageRepository languageRepository;

    @GetMapping("{id}")
    //Build Get User REST API
    public ResponseEntity<LanguageDto> getLanguageById(@PathVariable("id") Integer languageId){
        LanguageDto languageDto = languageService.getLanguageById(languageId);
        return ResponseEntity.ok(languageDto);
    }

    @GetMapping
    public ResponseEntity<List<LanguageDto>> getAllLanguages(){
        List<LanguageDto> languages = languageService.getAllLanguages();
        return ResponseEntity.ok(languages);
    }


    @PutMapping("{id}")
    public  ResponseEntity<LanguageDto> updateLanguage(@PathVariable("id") int languageId,
                                                       @RequestBody LanguageDto updatedLanguage){
        LanguageDto languageDto = languageService.updateLanguage(languageId, updatedLanguage);
        return ResponseEntity.ok(languageDto);
    }
}
