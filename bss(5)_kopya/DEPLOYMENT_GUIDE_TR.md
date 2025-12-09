# 🚀 Quiz Sistemini İnternet Üzerinde Yayınlama Rehberi (Türkçe)

## ⚠️ ÖNEMLİ: GitHub'a Yüklemek Yeterli Değil!

GitHub sadece kod depolama servisidir. Sisteminizin internet üzerinde çalışması için **hosting servisi** gereklidir.

## 📋 Sisteminizde Neler Var?

1. **Backend**: Spring Boot (Java) - Port 8080'de çalışıyor
2. **Veritabanı**: PostgreSQL - Local'de çalışıyor
3. **Frontend**: HTML/CSS/JS - Statik dosyalar

## 🎯 En Kolay Çözüm: Railway.app (Ücretsiz)

Railway.app hem backend hem veritabanınızı ücretsiz olarak host edebilir.

### Adım 1: GitHub'a Yükleme

1. GitHub.com'a gidin ve yeni bir repository oluşturun
   - Repository adı: `quiz-system` (veya istediğiniz bir isim)
   - Public veya Private seçin

2. Projenizi GitHub'a yükleyin:

**Windows PowerShell'de:**
```powershell
# Proje klasörünüze gidin
cd C:\bss(5)_kopya

# Git'i başlatın
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit'i yapın
git commit -m "Initial commit"

# Branch'i main yapın
git branch -M main

# GitHub repository'nizi ekleyin (KULLANICI_ADINIZ ve REPO_ADI'nı değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADI.git

# GitHub'a yükleyin
git push -u origin main
```

**Not**: İlk kez GitHub'a push yapıyorsanız, GitHub kullanıcı adı ve şifreniz istenebilir.

### Adım 2: Railway.app'e Kayıt

1. https://railway.app adresine gidin
2. "Start a New Project" veya "Login" butonuna tıklayın
3. "Login with GitHub" seçeneğini seçin
4. GitHub hesabınızla giriş yapın ve Railway'e izin verin

### Adım 3: PostgreSQL Veritabanı Oluşturma

1. Railway dashboard'da "New" butonuna tıklayın
2. "Database" → "Add PostgreSQL" seçin
3. Birkaç saniye içinde PostgreSQL veritabanınız hazır olacak
4. Veritabanına tıklayın ve "Variables" sekmesine gidin
5. Şu bilgileri not edin (bunlar otomatik oluşturulur):
   - `PGHOST` (host adresi)
   - `PGPORT` (port numarası, genellikle 5432)
   - `PGDATABASE` (veritabanı adı)
   - `PGUSER` (kullanıcı adı)
   - `PGPASSWORD` (şifre)

### Adım 4: Backend'i Deploy Etme

1. Railway dashboard'da tekrar "New" → "GitHub Repo" seçin
2. GitHub repository'nizi seçin (`quiz-system`)
3. Railway otomatik olarak Spring Boot uygulamanızı algılayacak
4. Deploy başladıktan sonra "Variables" sekmesine gidin
5. PostgreSQL veritabanı değişkenlerini ekleyin:
   - "New Variable" butonuna tıklayın
   - PostgreSQL servisinize tıklayın
   - "Add Reference" butonuna tıklayın
   - Tüm PostgreSQL değişkenlerini seçin (PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD)
6. Deploy tamamlanmasını bekleyin (2-5 dakika sürebilir)
7. Deploy tamamlandıktan sonra:
   - "Settings" sekmesine gidin
   - "Generate Domain" butonuna tıklayın
   - Size bir URL verilecek, örnek: `https://quiz-system-production.up.railway.app`
   - Bu URL'i kopyalayın ve not edin

### Adım 5: Frontend'i Güncelleme

1. `script.js` dosyasını açın
2. 409. satırda şu satırı bulun:
```javascript
const PRODUCTION_API_URL = 'https://quiz-system-production.up.railway.app';
```
3. Railway'den aldığınız URL'i buraya yazın (örnekteki URL'i kendi URL'inizle değiştirin)

4. Değişiklikleri GitHub'a yükleyin:
```powershell
git add script.js
git commit -m "Update API URL for production"
git push
```

### Adım 6: Frontend'i GitHub Pages'e Yükleme

1. GitHub repository'nize gidin
2. "Settings" sekmesine tıklayın
3. Sol menüden "Pages" seçin
4. "Source" altında "Deploy from a branch" seçin
5. Branch olarak "main" seçin
6. Folder olarak "/ (root)" seçin
7. "Save" butonuna tıklayın
8. Birkaç dakika sonra siteniz şu adreste olacak:
   `https://KULLANICI_ADINIZ.github.io/quiz-system/`

**Not**: Eğer repository adınız `quiz-system` değilse, URL'deki `quiz-system` kısmını kendi repository adınızla değiştirin.

### Adım 7: CORS Ayarlarını Güncelleme (Önemli!)

Backend'inizin frontend'inize izin vermesi için:

1. Railway dashboard'da backend servisinize gidin
2. "Variables" sekmesine gidin
3. Yeni bir variable ekleyin:
   - Name: `SPRING_PROFILES_ACTIVE`
   - Value: `prod`
4. Deploy'u yeniden başlatın

Veya `src/main/resources/application-prod.properties` dosyasında CORS ayarlarını frontend URL'inize göre güncelleyin.

## ✅ Kontrol Listesi

- [ ] GitHub'a yüklendi
- [ ] Railway.app'e kayıt olundu
- [ ] PostgreSQL veritabanı oluşturuldu
- [ ] Backend deploy edildi
- [ ] Backend URL'i alındı
- [ ] `script.js`'deki API URL güncellendi
- [ ] GitHub Pages aktif edildi
- [ ] Frontend URL'i alındı
- [ ] CORS ayarları güncellendi
- [ ] Test edildi

## 🐛 Sorun Giderme

### Backend çalışmıyor
- Railway dashboard'da "Deployments" sekmesine gidin
- Logs'ları kontrol edin
- Veritabanı bağlantı değişkenlerinin doğru olduğundan emin olun

### Veritabanı bağlantı hatası
- Railway'de PostgreSQL servisinin çalıştığından emin olun
- Variables'da PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD'ın olduğundan emin olun

### CORS hatası
- Frontend URL'inizi backend CORS ayarlarına ekleyin
- `application-prod.properties` dosyasını kontrol edin

### Frontend API'ye bağlanamıyor
- `script.js`'deki `PRODUCTION_API_URL` değerini kontrol edin
- Backend URL'inin doğru olduğundan emin olun
- Tarayıcı konsolunda (F12) hata mesajlarını kontrol edin

## 💡 İpuçları

1. **Ücretsiz Limitler**: Railway ücretsiz planında aylık $5 kredi verir. Küçük projeler için yeterlidir.

2. **Domain**: Railway size ücretsiz bir domain verir (`*.up.railway.app`). İsterseniz kendi domain'inizi de bağlayabilirsiniz.

3. **GitHub Pages**: Statik dosyalar için ücretsiz ve sınırsız hosting sağlar.

4. **Veritabanı Yedekleme**: Railway otomatik yedekleme yapar, ancak önemli veriler için manuel yedek almayı unutmayın.

## 📞 Yardım

Sorun yaşarsanız:
1. Railway dokümantasyonu: https://docs.railway.app
2. GitHub Pages dokümantasyonu: https://docs.github.com/en/pages
3. Spring Boot dokümantasyonu: https://spring.io/projects/spring-boot

