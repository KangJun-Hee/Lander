package com.lander.lwg.dto.language;

import com.lander.lwg.entity.DesiredLanguage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DesiredLanguageDto {
    private int languageId;
    private String desiredLanguageName;

    public static DesiredLanguageDto toDesiredLanguageDto(DesiredLanguage desiredLanguage){
        DesiredLanguageDto desiredLanguageDto = new DesiredLanguageDto();
        desiredLanguageDto.setLanguageId(desiredLanguage.getLanguageId());
        desiredLanguageDto.setDesiredLanguageName(desiredLanguage.getDesiredLanguageName());

        return desiredLanguageDto;
    }
}
