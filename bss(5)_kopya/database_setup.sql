-- PostgreSQL Veritabanı Kurulum Scripti
-- Bu scripti PostgreSQL'de çalıştırarak veritabanını oluşturun

-- Veritabanı oluştur (eğer yoksa)
CREATE DATABASE quiz_db;

-- Veritabanına bağlan
\c quiz_db;

-- Tablo otomatik olarak Spring Boot tarafından oluşturulacak
-- Ancak manuel oluşturmak isterseniz aşağıdaki komutu kullanabilirsiniz:

CREATE TABLE IF NOT EXISTS quiz_results (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    time_in_seconds INTEGER NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- İndeksler (performans için)
CREATE INDEX IF NOT EXISTS idx_quiz_results_score ON quiz_results(score DESC);
CREATE INDEX IF NOT EXISTS idx_quiz_results_time ON quiz_results(time_in_seconds ASC);
CREATE INDEX IF NOT EXISTS idx_quiz_results_timestamp ON quiz_results(timestamp DESC);

-- Örnek veri (isteğe bağlı)
-- INSERT INTO quiz_results (username, score, total_questions, time_in_seconds) 
-- VALUES ('TestUser', 8, 10, 300);
