# 🎯 Mühendislik Rotası Quiz Sistemi

Bu proje, QR kod tabanlı interaktif bir quiz sistemidir. Kullanıcılar QR kodları okutarak soruları cevaplar ve sonuçlar PostgreSQL veritabanına kaydedilir.

## 🏗️ Teknolojiler

- **Backend**: Spring Boot (Java 17)
- **Veritabanı**: PostgreSQL
- **Frontend**: HTML, CSS, JavaScript
- **QR Kod**: html5-qrcode kütüphanesi

## 📦 Kurulum (Local)

### Gereksinimler
- Java 17+
- Maven 3.6+
- PostgreSQL 12+

### Adımlar

1. PostgreSQL veritabanını oluşturun:
```bash
psql -U postgres
CREATE DATABASE quiz_db;
```

2. Veritabanı tablosunu oluşturun:
```bash
psql -U postgres -d quiz_db -f database_setup.sql
```

3. `application.properties` dosyasında veritabanı bilgilerinizi güncelleyin

4. Backend'i çalıştırın:
```bash
mvn clean install
mvn spring-boot:run
```

5. Frontend'i açın:
   - `index.html` dosyasını bir web tarayıcısında açın
   - Veya bir HTTP sunucusu kullanın (örn: `python -m http.server 8000`)

## 🌐 İnternet Üzerinde Yayınlama

Detaylı deployment rehberi için `DEPLOYMENT_GUIDE.md` dosyasına bakın.

### Hızlı Başlangıç (Railway.app)

1. GitHub'a yükleyin
2. Railway.app'e kaydolun
3. PostgreSQL veritabanı oluşturun
4. Backend'i deploy edin
5. Frontend'i GitHub Pages'e yükleyin

## 📁 Proje Yapısı

```
├── src/main/java/com/bss/quiz/
│   ├── controller/     # REST API endpoints
│   ├── model/          # Veritabanı modelleri
│   ├── repository/     # Veritabanı erişim katmanı
│   ├── service/        # İş mantığı
│   └── config/         # Konfigürasyon (CORS vb.)
├── src/main/resources/
│   └── application.properties
├── index.html          # Ana sayfa
├── script.js          # Frontend JavaScript
├── style.css          # Stil dosyası
└── database_setup.sql # Veritabanı kurulum scripti
```

## 🔧 API Endpoints

- `POST /api/quiz/results` - Quiz sonucunu kaydet
- `GET /api/quiz/results` - Tüm sonuçları getir
- `GET /api/quiz/stats` - İstatistikleri getir

## 📝 Lisans

Bu proje eğitim amaçlıdır.

