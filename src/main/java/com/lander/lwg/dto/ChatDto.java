package com.lander.lwg.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatDto {
    private int ChatID;
    private int SenderID;
    private int ReceiverID;
    private String Message;
    private Timestamp sentTime;
}
