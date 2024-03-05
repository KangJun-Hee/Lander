package com.lander.lwg.service.impl;


import com.lander.lwg.dto.ChatDto;
import com.lander.lwg.entity.Chat;
import com.lander.lwg.exception.ResourceNotFoundException;
import com.lander.lwg.mapper.ChatMapper;
import com.lander.lwg.repository.ChatRepository;
import com.lander.lwg.service.ChatService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ChatServiceImpl implements ChatService {
    private ChatRepository chatRepository;

    @Override
    public ChatDto createChat(ChatDto chatDto) {
        Chat chat = ChatMapper.mapToChat(chatDto);
        Chat savedChat = chatRepository.save(chat);
        return null;
    }

    @Override
    public ChatDto getChatById(int chatId) {
        Chat chat = chatRepository.findById(chatId)
                .orElseThrow(()-> new ResourceNotFoundException("Chat is not exist with given id : "+chatId));
        return ChatMapper.mapToChatDto(chat);
    }

    @Override
    public List<ChatDto> getAllChats() {
        List<Chat> chats = chatRepository.findAll();
        return chats.stream().map((chat)->ChatMapper.mapToChatDto(chat))
                .collect(Collectors.toList());
    }


}
