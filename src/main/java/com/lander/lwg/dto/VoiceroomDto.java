package com.lander.lwg.dto;

import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.Chat;
import com.lander.lwg.entity.Language;
import com.lander.lwg.entity.User;
import com.lander.lwg.entity.Voiceroom;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VoiceroomDto {
    private int voiceroomId;
    private int userId;
    private String roomTitle;
    private int roleId;
    private String languageName;
//    private Chat ChatID;

    // getUser 메서드 추가
//    public int getUser() {
//        return new User().getUserId(); // 또는 원하는 방식으로 User 엔티티 생성
//    }

    // getLanguage 메서드 추가
//    public Language getLanguage() {
//        return new Language(); // 또는 원하는 방식으로 Language 엔티티 생성
//    }

    // getChat 메서드 추가
//    public Chat getChat() {
//        return new Chat(); // 또는 원하는 방식으로 Chat 엔티티 생성
//    }

    public static VoiceroomDto toVoiceroomDto(Voiceroom voiceroom){
        VoiceroomDto voiceroomDto = new VoiceroomDto();
        voiceroomDto.setVoiceroomId(voiceroom.getVoiceroomId());
//        voiceroomDto.setChatID(voiceroom.getChat());
        voiceroomDto.setLanguageName(voiceroom.getLanguageName());
        voiceroomDto.setRoleId(voiceroom.getRoleId());
        voiceroomDto.setUserId(voiceroom.getUserId());
        voiceroomDto.setRoomTitle(voiceroom.getRoomTitle());

        return voiceroomDto;
    }
}
