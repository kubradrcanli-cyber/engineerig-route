package com.bss.quiz.service;

import com.bss.quiz.model.QuizResult;
import com.bss.quiz.repository.QuizResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class QuizResultService {
    
    @Autowired
    private QuizResultRepository quizResultRepository;
    
    public QuizResult saveResult(QuizResult result) {
        return quizResultRepository.save(result);
    }
    
    public List<QuizResult> getAllResults() {
        return quizResultRepository.findAllByOrderByScoreDescTimeInSecondsAsc();
    }
    
    public Long getTotalParticipants() {
        return quizResultRepository.countTotalParticipants();
    }
    
    public Double getAverageScore() {
        Double avg = quizResultRepository.getAverageScore();
        return avg != null ? avg : 0.0;
    }
    
    public Double getAverageTime() {
        Double avg = quizResultRepository.getAverageTime();
        return avg != null ? avg : 0.0;
    }
}

