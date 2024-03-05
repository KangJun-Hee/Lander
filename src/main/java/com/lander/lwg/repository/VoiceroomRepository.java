package com.lander.lwg.repository;

import com.lander.lwg.entity.User;
import com.lander.lwg.entity.Voiceroom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoiceroomRepository extends JpaRepository<Voiceroom, Integer> {
    Optional<Voiceroom> findByVoiceroomId(int voiceroomId);

}
