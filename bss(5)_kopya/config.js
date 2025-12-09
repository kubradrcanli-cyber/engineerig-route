// Frontend API Konfigürasyon Dosyası
// Bu dosyayı düzenleyerek backend URL'inizi değiştirebilirsiniz

// Local development için
const LOCAL_API_URL = 'http://localhost:8080';

// Production backend URL'inizi buraya yazın (Railway/Render URL'i)
// Örnek: 'https://quiz-system-production.up.railway.app'
const PRODUCTION_API_URL = 'https://quiz-system-production.up.railway.app';

// Otomatik olarak local mi production mu olduğunu algılar
const API_BASE_URL = (window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname === '')
    ? LOCAL_API_URL
    : PRODUCTION_API_URL;

// script.js'de kullanmak için export edin (eğer modül sistemi kullanıyorsanız)
// Şu an için script.js içinde tanımlı, bu dosya referans için

