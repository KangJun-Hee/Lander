package com.lander.lwg.service.impl;

import com.lander.lwg.dto.VoiceroomDto;
import com.lander.lwg.dto.user.UserDto;
import com.lander.lwg.entity.User;
import com.lander.lwg.entity.Voiceroom;
import com.lander.lwg.mapper.UserMapper;
import com.lander.lwg.mapper.VoiceroomMapper;
import com.lander.lwg.repository.VoiceroomRepository;
import com.lander.lwg.service.VoiceroomService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VoiceroomImpl implements VoiceroomService {

    private VoiceroomRepository voiceroomRepository;

    @Override
    public VoiceroomDto createVoiceroom(VoiceroomDto voiceroomDto){
        Voiceroom voiceroom = VoiceroomMapper.mapToVoiceroom(voiceroomDto);
        Voiceroom savedVoiceroom = voiceroomRepository.save(voiceroom);
        return null;
    }

    @Override
    public List<VoiceroomDto> getAllVoicerooms() {
        List<Voiceroom> voicerooms = voiceroomRepository.findAll();
        return voicerooms.stream().map((voiceroom)-> VoiceroomMapper.mapToVoiceroomDto(voiceroom))
                .collect(Collectors.toList());
    }
}
