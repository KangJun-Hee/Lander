package com.lander.lwg.service;

import com.lander.lwg.dto.ChatDto;

import java.util.List;

public interface ChatService {
    ChatDto createChat(ChatDto chatDto);

    ChatDto getChatById(int chatId);

    List<ChatDto> getAllChats();
}
