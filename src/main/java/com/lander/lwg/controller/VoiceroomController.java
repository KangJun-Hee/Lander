package com.lander.lwg.controller;

import com.lander.lwg.dto.VoiceroomDto;
import com.lander.lwg.service.VoiceroomService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/voicerooms")
public class VoiceroomController {
    private VoiceroomService voiceroomService;

    @PostMapping
    public ResponseEntity<VoiceroomDto> createVoiceroom(@RequestBody VoiceroomDto voiceroomDto){
        System.out.println("createVoiceroom runs : "+voiceroomDto);
        System.out.println("createVoiceroom roomTitle:"+voiceroomDto.getRoomTitle());
        System.out.println("createVoiceroom language:"+voiceroomDto.getLanguageName());
        VoiceroomDto savedVoiceroom = voiceroomService.createVoiceroom(voiceroomDto);
        return new ResponseEntity<>(savedVoiceroom, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    //Build Get User REST API
    public ResponseEntity<VoiceroomDto> getVoiceroomById(@PathVariable("id") Integer voiceroomId){
        System.out.println("getVoiceroomById voiceroomId : "+voiceroomId);

        VoiceroomDto voiceroomDto = voiceroomService.getVoiceroomById(voiceroomId);
        return ResponseEntity.ok(voiceroomDto);
    }

    //Buld Get All Voicerooms REST API
    @GetMapping
    public ResponseEntity<List<VoiceroomDto>> getAllVoicerooms(){
        List<VoiceroomDto> voicerooms = voiceroomService.getAllVoicerooms();

        System.out.println("getAllVoicerooms():runs");
        return ResponseEntity.ok(voicerooms);
    }
}
