package com.bss.quiz.controller;

import com.bss.quiz.model.QuizResult;
import com.bss.quiz.service.QuizResultService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "*")
public class QuizResultController {
    
    @Autowired
    private QuizResultService quizResultService;
    
    @PostMapping("/results")
    public ResponseEntity<Map<String, String>> saveResult(@Valid @RequestBody QuizResult result) {
        quizResultService.saveResult(result);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Sonuç başarıyla kaydedildi (Result successfully saved)");
        response.put("status", "success");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/results")
    public ResponseEntity<List<QuizResult>> getAllResults() {
        List<QuizResult> results = quizResultService.getAllResults();
        return ResponseEntity.ok(results);
    }
    
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStatistics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalParticipants", quizResultService.getTotalParticipants());
        stats.put("averageScore", quizResultService.getAverageScore());
        stats.put("averageTime", quizResultService.getAverageTime());
        return ResponseEntity.ok(stats);
    }
}

