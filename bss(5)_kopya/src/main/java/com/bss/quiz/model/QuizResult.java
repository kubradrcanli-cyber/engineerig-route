package com.bss.quiz.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Table(name = "quiz_results")
public class QuizResult {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Kullanıcı adı boş olamaz")
    @Column(nullable = false, length = 50)
    private String username;
    
    @NotNull(message = "Skor boş olamaz")
    @Column(nullable = false)
    private Integer score;
    
    @NotNull(message = "Toplam soru sayısı boş olamaz")
    @Column(nullable = false)
    private Integer totalQuestions;
    
    @NotNull(message = "Süre boş olamaz")
    @Column(nullable = false)
    private Integer timeInSeconds;
    
    @Column(nullable = false, updatable = false)
    private LocalDateTime timestamp;
    
    @PrePersist
    protected void onCreate() {
        timestamp = LocalDateTime.now();
    }
    
    // Constructors
    public QuizResult() {
    }
    
    public QuizResult(String username, Integer score, Integer totalQuestions, Integer timeInSeconds) {
        this.username = username;
        this.score = score;
        this.totalQuestions = totalQuestions;
        this.timeInSeconds = timeInSeconds;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public Integer getScore() {
        return score;
    }
    
    public void setScore(Integer score) {
        this.score = score;
    }
    
    public Integer getTotalQuestions() {
        return totalQuestions;
    }
    
    public void setTotalQuestions(Integer totalQuestions) {
        this.totalQuestions = totalQuestions;
    }
    
    public Integer getTimeInSeconds() {
        return timeInSeconds;
    }
    
    public void setTimeInSeconds(Integer timeInSeconds) {
        this.timeInSeconds = timeInSeconds;
    }
    
    public LocalDateTime getTimestamp() {
        return timestamp;
    }
    
    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}

