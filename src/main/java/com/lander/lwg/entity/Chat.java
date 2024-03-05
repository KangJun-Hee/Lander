package com.lander.lwg.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "chats")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ChatID;

    @Column(name = "senderId", nullable = false)
    private int SenderID;

    @Column(name = "receiverId", nullable = false)
    private int ReceiverID;

    @Column(name = "message", nullable = false)
    private String Message;

    @Column(name = "sendTime", nullable = false)
    private Timestamp sentTime;
}
