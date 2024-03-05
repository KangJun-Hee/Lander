package com.lander.lwg.service;

import com.lander.lwg.dto.VoiceroomDto;
import com.lander.lwg.dto.user.UserDto;

import java.util.List;

public interface VoiceroomService {
    VoiceroomDto createVoiceroom(VoiceroomDto voiceroomDto);

    List<VoiceroomDto> getAllVoicerooms();

}
