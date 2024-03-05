package com.lander.lwg.mapper;

import com.lander.lwg.dto.ChatDto;
import com.lander.lwg.entity.Chat;

public class ChatMapper {
    public static ChatDto mapToChatDto(Chat chat){
        return new ChatDto(
                chat.getChatID(),
                chat.getSenderID(),
                chat.getReceiverID(),
                chat.getMessage(),
                chat.getSentTime()
        );
    }

    public static Chat mapToChat(ChatDto chatDto){
        return new Chat(
                chatDto.getChatID(),
                chatDto.getSenderID(),
                chatDto.getReceiverID(),
                chatDto.getMessage(),
                chatDto.getSentTime()
        );
    }
}
