package com.lander.lwg.mapper;

import com.lander.lwg.dto.VoiceroomDto;
import com.lander.lwg.entity.Voiceroom;

public class VoiceroomMapper {
    public static VoiceroomDto mapToVoiceroomDto(Voiceroom voiceroom){
        return new VoiceroomDto(
                voiceroom.getVoiceroomId(),
                voiceroom.getUserId(),
                voiceroom.getRoomTitle(),
                voiceroom.getRoleId(),
                voiceroom.getLanguageName()
//                voiceroom.getChat()
        );
    }

    public static Voiceroom mapToVoiceroom(VoiceroomDto voiceroomDto){
        return new Voiceroom(
                voiceroomDto.getVoiceroomId(),
                voiceroomDto.getUserId(),
                voiceroomDto.getRoomTitle(),
                voiceroomDto.getRoleId(),
                voiceroomDto.getLanguageName()
//                voiceroomDto.getChat()
        );
    }
}
