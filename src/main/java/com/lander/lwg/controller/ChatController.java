package com.lander.lwg.controller;

import com.lander.lwg.dto.ChatDto;
import com.lander.lwg.service.ChatService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/chats")
public class ChatController {
    private ChatService chatService;

    @PostMapping
    public ResponseEntity<ChatDto> createUser(@RequestBody ChatDto chatDto){
        ChatDto savedChat = chatService.createChat(chatDto);
        return new ResponseEntity<>(savedChat, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    //Build Get User REST API
    public ResponseEntity<ChatDto> getChatById(@PathVariable("id") Integer chatId){
        ChatDto chatDto = chatService.getChatById(chatId);
        return ResponseEntity.ok(chatDto);
    }

    //Buld Get All Users REST API
    @GetMapping
    public ResponseEntity<List<ChatDto>> getAllChats(){
        List<ChatDto> chats = chatService.getAllChats();
        return ResponseEntity.ok(chats);
    }
}
