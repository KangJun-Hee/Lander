package com.lander.lwg.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "voicerooms", uniqueConstraints = @UniqueConstraint(columnNames = "voiceroomId"))
public class Voiceroom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int voiceroomId;

//    @ManyToOne(fetch = FetchType.EAGER, optional = false)
//    @JoinColumn(name="userId")
    @Column(name = "userId" ,nullable = false)
    private Integer userId;

    @Column(name = "roomTitle", nullable = false)
    private String roomTitle;

    @Column(name = "roleId")
//    @Column(name = "roleId", nullable = false)
    private int roleId;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @ManyToOne(fetch = FetchType.EAGER, optional = false)
//    @JoinColumn(name = "languageName")
    @Column(name = "languageName" ,nullable = false)
    private String LanguageName;

//    @ManyToOne(fetch = FetchType.EAGER)
////    @ManyToOne(fetch = FetchType.EAGER, optional = false)
//    @JoinColumn(name = "chatId")
//    private Chat chat;
}
