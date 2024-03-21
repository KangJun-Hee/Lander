package com.lander.lwg.controller.language;

import com.lander.lwg.dto.language.DesiredLanguageDto;
import com.lander.lwg.service.language.DesiredLanguageService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/desiredLanguages")
public class DesiredLanguageController {
    private DesiredLanguageService desiredLanguageService;

    @GetMapping
    public ResponseEntity<List<DesiredLanguageDto>> getAllLanguages(){
        List<DesiredLanguageDto> languages = desiredLanguageService.getAllLanguages();
        return ResponseEntity.ok(languages);
    }
}
