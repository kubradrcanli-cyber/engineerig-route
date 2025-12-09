# ⚡ Hızlı Başlangıç - 5 Adımda İnternete Yükleme

## 🎯 Kısa Özet

GitHub'a yüklemek **tek başına yeterli değil**. Sisteminizin 3 bileşeni var:
- ✅ **Frontend** → GitHub Pages (ücretsiz)
- ✅ **Backend** → Railway.app (ücretsiz)
- ✅ **Veritabanı** → Railway.app PostgreSQL (ücretsiz)

## 📝 Adım Adım

### 1️⃣ GitHub'a Yükle (2 dakika)

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/quiz-system.git
git push -u origin main
```

### 2️⃣ Railway.app'e Kayıt Ol (1 dakika)

- https://railway.app → GitHub ile giriş yap

### 3️⃣ Veritabanı Oluştur (1 dakika)

- Railway'de: New → Database → PostgreSQL
- Variables'ı not et (otomatik oluşur)

### 4️⃣ Backend Deploy Et (5 dakika)

- Railway'de: New → GitHub Repo → Repository'nizi seçin
- PostgreSQL variables'ları ekle (Add Reference)
- Settings → Generate Domain → URL'i kopyala
- `script.js` dosyasında 409. satırdaki URL'i güncelle

### 5️⃣ Frontend'i Yayınla (2 dakika)

- GitHub → Settings → Pages → main branch seç → Save
- URL: `https://KULLANICI_ADINIZ.github.io/quiz-system/`

## ✅ Bitti!

Artık sisteminiz internet üzerinde çalışıyor! 🎉

Detaylı rehber için: `DEPLOYMENT_GUIDE_TR.md`

