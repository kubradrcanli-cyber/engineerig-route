package com.bss.quiz.repository;

import com.bss.quiz.model.QuizResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {
    
    List<QuizResult> findAllByOrderByScoreDescTimeInSecondsAsc();
    
    @Query("SELECT COUNT(r) FROM QuizResult r")
    Long countTotalParticipants();
    
    @Query("SELECT AVG(r.score) FROM QuizResult r")
    Double getAverageScore();
    
    @Query("SELECT AVG(r.timeInSeconds) FROM QuizResult r")
    Double getAverageTime();
}

