# 🚀 Quiz Sistemini İnternet Üzerinde Yayınlama Rehberi

## 📋 Genel Bakış

Bu sistem 3 bileşenden oluşuyor:
1. **Backend**: Spring Boot uygulaması (Java)
2. **Veritabanı**: PostgreSQL
3. **Frontend**: HTML/CSS/JavaScript (statik dosyalar)

## 🎯 Önerilen Çözüm: Railway.app (En Kolay)

Railway.app hem backend hem de veritabanınızı ücretsiz olarak host edebilir.

### Adım 1: GitHub'a Yükleme

1. GitHub'da yeni bir repository oluşturun
2. Projenizi GitHub'a yükleyin:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/quiz-system.git
git push -u origin main
```

### Adım 2: Railway.app'e Kayıt

1. https://railway.app adresine gidin
2. "Start a New Project" tıklayın
3. GitHub hesabınızla giriş yapın

### Adım 3: PostgreSQL Veritabanı Oluşturma

1. Railway dashboard'da "New" → "Database" → "Add PostgreSQL" seçin
2. Veritabanı otomatik oluşturulacak
3. "Variables" sekmesine gidin ve şu bilgileri not edin:
   - `DATABASE_URL` (veya `PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER`, `PGPASSWORD`)

### Adım 4: Backend'i Deploy Etme

1. Railway dashboard'da "New" → "GitHub Repo" seçin
2. Repository'nizi seçin
3. Railway otomatik olarak Spring Boot uygulamanızı algılayacak
4. "Variables" sekmesine gidin ve şu environment variable'ları ekleyin:

```
DATABASE_URL=postgresql://user:password@host:port/database
# veya ayrı ayrı:
SPRING_DATASOURCE_URL=jdbc:postgresql://host:port/database
SPRING_DATASOURCE_USERNAME=user
SPRING_DATASOURCE_PASSWORD=password
```

5. Railway otomatik olarak build edip deploy edecek
6. Deploy tamamlandıktan sonra, "Settings" → "Generate Domain" ile bir URL alın
   Örnek: `https://quiz-system-production.up.railway.app`

### Adım 5: Frontend'i Güncelleme

`script.js` dosyasındaki API URL'ini güncelleyin:

```javascript
// Eski:
const response = await fetch('http://localhost:8080/api/quiz/results', {

// Yeni (Railway URL'iniz):
const response = await fetch('https://quiz-system-production.up.railway.app/api/quiz/results', {
```

### Adım 6: Frontend'i GitHub Pages'e Yükleme

1. GitHub repository'nizde "Settings" → "Pages" gidin
2. Source olarak "main" branch'ini seçin
3. Root klasörünü seçin
4. "Save" tıklayın
5. Birkaç dakika sonra siteniz şu adreste olacak:
   `https://KULLANICI_ADINIZ.github.io/quiz-system/`

## 🔄 Alternatif Çözümler

### Render.com (Ücretsiz)

1. https://render.com adresine gidin
2. "New" → "PostgreSQL" ile veritabanı oluşturun
3. "New" → "Web Service" ile backend'i deploy edin
4. GitHub repository'nizi bağlayın
5. Environment variables'ı ekleyin

### Heroku (Ücretli, ama güvenilir)

1. https://heroku.com adresine gidin
2. Heroku CLI'yı yükleyin
3. `heroku create` komutu ile uygulama oluşturun
4. PostgreSQL addon ekleyin: `heroku addons:create heroku-postgresql`
5. `git push heroku main` ile deploy edin

## 📝 Önemli Notlar

1. **CORS Ayarları**: Production'da sadece frontend domain'inize izin verin
2. **Güvenlik**: Şifreleri environment variables'da saklayın, kod içine yazmayın
3. **Veritabanı**: Railway/Render otomatik olarak veritabanı bağlantısını sağlar
4. **Port**: Railway/Render otomatik olarak PORT environment variable'ını ayarlar

## 🐛 Sorun Giderme

- Backend çalışmıyorsa: Railway logs'ları kontrol edin
- Veritabanı bağlantı hatası: Environment variables'ı kontrol edin
- CORS hatası: Frontend URL'ini backend CORS ayarlarına ekleyin

