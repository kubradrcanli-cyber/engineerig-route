// Quiz soruları ve bir sonraki QR kod konumları (Quiz questions and next QR code locations)
const questions = [
    {
        qrId: "question-1",
        question: "1) Hangisi radyo dalgalarının keşfi ve kablosuz iletişimin temelini atan bilim insanıdır? (Who is the scientist that discovered radio waves and laid the foundation for wireless communication?)",
        choices: ["A) Heinrich Hertz", "B) Thomas Edison", "C) James Watt", "D) Nikola Tesla"],
        correctIndex: 0,
        nextQrLocation: "İkinci QR kod, giriş kapısının yanındaki duvarda asılıdır. (The second QR code is hung on the wall next to the entrance door.)"
    },
    {
        qrId: "question-2",
        question: "2) Dünyada 'Mühendisliğin Babası' olarak anılan, aynı zamanda 'Vitruvius Adamı' çizimiyle ünlü Rönesans dönemi dahisi kimdir? (Who is the Renaissance genius known as the 'Father of Engineering' and famous for the 'Vitruvian Man' drawing?)",
        choices: ["A) Isaac Newton", "B) Leonardo da Vinci", "C) Galileo Galilei", "D) Nikola Tesla"],
        correctIndex: 1,
        nextQrLocation: "Üçüncü QR kod, kütüphane masasının üzerinde bulunmaktadır. (The third QR code is located on the library table.)"
    },
    {
        qrId: "question-3",
        question: "3) Dünyanın ilk otomobilini (1885-1886) yapan Alman mühendis kimdir? (Who is the German engineer who built the world's first automobile in 1885-1886?)",
        choices: ["A) Henry Ford", "B) Rudolf Diesel", "C) Gottlieb Daimler", "D) Karl Benz"],
        correctIndex: 3,
        nextQrLocation: "Dördüncü QR kod, laboratuvar kapısının üzerinde yer almaktadır. (The fourth QR code is located above the laboratory door.)"
    },
    {
        qrId: "question-4",
        question: "4) Modern motor teknolojisinin temeli olan krank milini ilk tanımlayan; su saatleri, otomatik makineler ve programlanabilir robotlar tasarlayan; 'Sibernetiğin ve robotik mühendisliğin babası' olarak anılan İslam Altın Çağı'nın harika mühendisi kimdir? (Who is the brilliant engineer of the Islamic Golden Age who first described the crankshaft and is known as the 'father of cybernetics and robotic engineering'?)",
        choices: ["A) El-Birûnî", "B) İbn Rüşd", "C) El-Cezeri", "D) Farabî"],
        correctIndex: 2,
        nextQrLocation: "Beşinci QR kod, koridorun sonundaki pencerenin yanında bulunmaktadır. (The fifth QR code is located next to the window at the end of the corridor.)"
    },
    {
        qrId: "question-5",
        question: "5) Günümüzde yaptığı çalışmalarla bilime katkıda bulunan Türk kadın mühendisimiz Canan Dağdeviren, hangi çalışmaları ile uluslararası alanda büyük ses getirmiştir? (Which of her works has brought Turkish female engineer Canan Dağdeviren, who contributes to science with her current studies, great international recognition?)",
        choices: [
            "A) Sıvı hidrojenin uçaklarda yakıt olarak kullanılmasına yönelik çalışmalar",
            "B) İnsan organlarına uyum sağlayabilen elektronik malzemeler",
            "C) Bilgisayar sistemleri ve uygulamaları için kod yazma ve entegrasyon",
            "D) Koronavirüs gibi salgın hastalıkların tedavisinde uygulanan aşılar"
        ],
        correctIndex: 1,
        nextQrLocation: "Altıncı QR kod, merdivenlerin başında, duvarda asılıdır. (The sixth QR code is hung on the wall at the beginning of the stairs.)"
    },
    {
        qrId: "question-6",
        question: "6) Türkiye'de 1930'lu yıllarda havacılık mühendisliği alanında yapısal analiz, aerodinamik tasarım ve malzeme mühendisliği prensiplerini uygulayarak tamamen yerli uçak tasarım ve üretim çalışmalarını başlatan; ayrıca İstanbul'da kurduğu tesislerde pervane, kanat ve gövde imalat süreçlerini sistematik mühendislik yaklaşımıyla standartlaştıran kişi aşağıdakilerden hangisidir? (Who initiated fully domestic aircraft design and production in Turkey in the 1930s by applying structural analysis, aerodynamic design, and materials engineering principles?)",
        choices: [
            "A) Selahattin Reşit Alan",
            "B) Vecihi Hürkuş",
            "C) Nuri Demirağ",
            "D) Şakir Zümre"
        ],
        correctIndex: 2,
        nextQrLocation: "Yedinci QR kod, ikinci katın giriş kapısının yanında yer almaktadır. (The seventh QR code is located next to the entrance door of the second floor.)"
    },
    {
        qrId: "question-7",
        question: "7) Günümüzde bilgisayar bilimlerinin temeli olan 'Algoritma' terimi, ismini hangi ünlü matematikçi ve bilginden almıştır? (From which famous mathematician and scholar does the term 'Algorithm' take its name, which is the foundation of computer science today?)",
        choices: ["A) Harezmi", "B) Farabi", "C) Ömer Hayyam", "D) Biruni"],
        correctIndex: 0,
        nextQrLocation: "Sekizinci QR kod, kafeterya masasının altında gizlenmiştir. (The eighth QR code is hidden under the cafeteria table.)"
    },
    {
        qrId: "question-8",
        question: "8) Türk havacılık tarihinde 'ilk Türk uçağını tasarlayan ve yerli uçakla ilk uçuşu gerçekleştiren kişi' olarak bilinen, aynı zamanda sivil havacılığın gelişmesi için birçok girişimde bulunan öncü kimdir? (Who is the pioneer in Turkish aviation history known as 'the person who designed the first Turkish aircraft and made the first flight with a domestic aircraft', and who also made many initiatives for the development of civil aviation?)",
        choices: ["A) Nuri Demirağ", "B) Sabiha Gökçen", "C) Vecihi Hürkuş", "D) Cevat Yurdakul"],
        correctIndex: 2,
        nextQrLocation: "Dokuzuncu QR kod, bahçedeki ağacın gövdesine yapıştırılmıştır. (The ninth QR code is stuck on the trunk of the tree in the garden.)"
    },
    {
        qrId: "question-9",
        question: "9) Türkiye'nin uzay ve havacılık mühendisliği alanındaki en büyük ve prestijli projesi olan, Türkiye Cumhuriyeti'nin 100. yılında yörüngeye fırlatılan ilk yerli ve milli haberleşme uydusu aşağıdakilerden hangisidir? (Which of the following is Turkey's first domestic and national communication satellite, which is the country's largest and most prestigious project in the field of space and aerospace engineering, launched into orbit in the 100th anniversary of the Republic of Turkey?)",
        choices: ["A) BİLSAT", "B) TÜRKSAT 6A", "C) GÖKTÜRK-2", "D) RASAT"],
        correctIndex: 1,
        nextQrLocation: "Onuncu ve son QR kod, çıkış kapısının üzerinde bulunmaktadır. (The tenth and final QR code is located above the exit door.)"
    },
    {
        qrId: "question-10",
        question: "10) 1947 yılında Bell Laboratuvarlarında icat edilen, vakum tüplerinin yerini alarak elektronik cihazların minyatürleşmesini sağlayan ve modern işlemcilerin temel yapı taşı olan devre elemanı nedir? (What is the circuit component invented at Bell Labs in 1947 that replaced vacuum tubes, enabled the miniaturization of electronic devices, and became the basic building block of modern processors?)",
        choices: ["A) Röle", "B) Diyot", "C) Kondansatör", "D) Transistör"],
        correctIndex: 3,
        nextQrLocation: "Tebrikler! Tüm 10 soruyu başarıyla tamamladınız! 🎉 (Congratulations! You have successfully completed all 10 questions! 🎉)"
    }
];

// Global değişkenler (Global variables)
let currentQuestionIndex = -1;
let score = 0;
let selectedAnswer = null;
let username = "";
let startTime = null;
let timerInterval = null;
let qrScanner = null;
let currentQrId = null;

// DOM elementleri (DOM elements)
const usernameSection = document.getElementById('usernameSection');
const usernameInputContainer = document.getElementById('usernameInputContainer');
const usernameInput = document.getElementById('usernameInput');
const startButton = document.getElementById('startButton');
const qrScannerContainer = document.getElementById('qrScannerContainer');
const quizQrScannerContainer = document.getElementById('quizQrScannerContainer');
const quizContent = document.getElementById('quizContent');
const questionText = document.getElementById('questionText');
const choicesContainer = document.getElementById('choicesContainer');
const feedback = document.getElementById('feedback');
const questionSection = document.getElementById('questionSection');
const resultsSection = document.getElementById('resultsSection');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressBar = document.getElementById('progressBar');
const scoreNumber = document.getElementById('scoreNumber');
const totalScore = document.getElementById('totalScore');
const scorePercentage = document.getElementById('scorePercentage');
const timerDisplay = document.getElementById('timerDisplay');
const userNameDisplay = document.getElementById('userNameDisplay');
const nextQrHint = document.getElementById('nextQrHint');
const nextQrLocation = document.getElementById('nextQrLocation');
const scanNextQrButton = document.getElementById('scanNextQrButton');
const finalTime = document.getElementById('finalTime');

// LocalStorage'dan durumu yükle (Load state from LocalStorage)
function loadState() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const state = JSON.parse(savedState);
        username = state.username || "";
        currentQuestionIndex = state.currentQuestionIndex || -1;
        score = state.score || 0;
        startTime = state.startTime ? new Date(state.startTime) : null;
        
        if (username && startTime && currentQuestionIndex >= 0) {
            // Devam eden bir oyun varsa (If there is an ongoing game)
            showQuizContent();
            if (currentQuestionIndex < questions.length) {
                loadQuestion(currentQuestionIndex);
                startTimer();
            } else {
                showResults();
            }
            return true;
        }
    }
    return false;
}

// Durumu kaydet (Save state)
function saveState() {
    const state = {
        username: username,
        currentQuestionIndex: currentQuestionIndex,
        score: score,
        startTime: startTime ? startTime.getTime() : null
    };
    localStorage.setItem('quizState', JSON.stringify(state));
}

// Durumu temizle (Clear state)
function clearState() {
    localStorage.removeItem('quizState');
}

// QR kod okuma başlat (Start QR code scanning)
async function startQrScanner(readerElementId = "qr-reader") {
    // Eğer zaten bir scanner varsa, önce durdur (If there is already a scanner, stop it first)
    if (qrScanner) {
        try {
            await qrScanner.stop();
            qrScanner = null;
        } catch (err) {
            console.error("Scanner durdurulurken hata:", err);
            qrScanner = null;
        }
    }

    const html5QrCode = new Html5Qrcode(readerElementId);
    
    html5QrCode.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: { width: 250, height: 250 }
        },
        (decodedText, decodedResult) => {
            handleQrCode(decodedText);
            html5QrCode.stop().then(() => {
                qrScanner = null;
            }).catch(() => {});
        },
        (errorMessage) => {
            // Hata mesajları sessizce göz ardı edilir (Error messages are silently ignored)
        }
    ).then(() => {
        qrScanner = html5QrCode;
    }).catch((err) => {
        console.error("QR kod okuma başlatılamadı:", err);
        alert("Kamera erişimi gerekli. Lütfen tarayıcı ayarlarından kamera izni verin. (Camera access is required. Please grant camera permission from browser settings.)");
        qrScanner = null;
    });
}

// QR kod işleme (QR code processing)
function handleQrCode(qrText) {
    // İlk QR kod okutma - kullanıcı adı girişi için (First QR code scan - for username entry)
    if (currentQuestionIndex === -1) {
        if (qrText === "start" || qrText.startsWith("question-")) {
            currentQrId = qrText;
            qrScannerContainer.style.display = 'none';
            usernameInputContainer.style.display = 'block';
            usernameInput.focus();
        } else {
            alert("Geçersiz QR kod! Lütfen başlangıç QR kodunu okutun. (Invalid QR code! Please scan the start QR code.)");
        }
        return;
    }

    // Soru QR kodları için kontrol (Check for question QR codes)
    const expectedQrId = questions[currentQuestionIndex + 1]?.qrId;
    if (qrText === expectedQrId) {
        currentQrId = qrText;
        if (qrScanner) {
            qrScanner.stop().then(() => {
                qrScanner = null;
                quizQrScannerContainer.style.display = 'none';
                nextQuestion();
            }).catch(() => {});
        }
    } else {
        alert("Bu QR kod bu soru için geçerli değil! Doğru QR kodu okutun. (This QR code is not valid for this question! Scan the correct QR code.)");
    }
}

// Kullanıcı adı ile başlat (Start with username)
function startWithUsername() {
    username = usernameInput.value.trim();
    if (!username) {
        alert("Lütfen kullanıcı adınızı girin! (Please enter your username!)");
        return;
    }

    if (username.length > 20) {
        alert("Kullanıcı adı en fazla 20 karakter olabilir! (Username can be at most 20 characters!)");
        return;
    }

    // Süre başlat (Start timer)
    startTime = new Date();
    currentQuestionIndex = 0;
    score = 0;
    
    saveState();
    showQuizContent();
    loadQuestion(0);
    startTimer();
}

// Quiz içeriğini göster (Show quiz content)
function showQuizContent() {
    usernameSection.style.display = 'none';
    quizContent.style.display = 'block';
    userNameDisplay.textContent = `Oyuncu (Player): ${username}`;
    totalQuestionsSpan.textContent = questions.length;
}

// Soruyu yükle (Load question)
function loadQuestion(index) {
    if (index < 0 || index >= questions.length) {
        return;
    }

    currentQuestionIndex = index;
    const question = questions[index];
    questionText.textContent = question.question;
    choicesContainer.innerHTML = '';
    feedback.classList.remove('show', 'correct', 'incorrect');
    nextQrHint.style.display = 'none';
    scanNextQrButton.style.display = 'none';
    selectedAnswer = null;

    // Progress bar'ı güncelle (Update progress bar)
    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
    currentQuestionSpan.textContent = index + 1;

    // Seçenekleri oluştur (Create choices)
    question.choices.forEach((choice, i) => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.textContent = choice;
        choiceElement.addEventListener('click', () => selectAnswer(i));
        choicesContainer.appendChild(choiceElement);
    });

    saveState();
}

// Cevap seçimi (Answer selection)
function selectAnswer(index) {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const question = questions[currentQuestionIndex];
    const choices = choicesContainer.querySelectorAll('.choice');

    // Tüm seçenekleri devre dışı bırak (Disable all choices)
    choices.forEach(choice => {
        choice.classList.add('disabled');
        choice.style.pointerEvents = 'none';
    });

    // Seçilen cevabı işaretle (Mark selected answer)
    choices[index].classList.add('selected');

    // Cevabı kontrol et (Check answer)
    if (index === question.correctIndex) {
        choices[index].classList.add('correct');
        feedback.textContent = 'Doğru! ✅ (Correct! ✅)';
        feedback.classList.add('show', 'correct');
        score++;
    } else {
        choices[index].classList.add('incorrect');
        feedback.textContent = `Yanlış! Doğru cevap: ${question.choices[question.correctIndex]} (Wrong! Correct answer: ${question.choices[question.correctIndex]})`;
        feedback.classList.add('show', 'incorrect');
        choices[question.correctIndex].classList.add('correct');
    }
    
    // Doğru veya yanlış fark etmeksizin bir sonraki QR kod konumunu göster (Show next QR code location regardless of correct or wrong)
    if (currentQuestionIndex < questions.length - 1) {
        nextQrLocation.textContent = question.nextQrLocation;
        nextQrHint.style.display = 'block';
        scanNextQrButton.style.display = 'block';
        scanNextQrButton.textContent = "Sonraki QR Kodu Okut (Scan Next QR Code)";
        scanNextQrButton.disabled = false;
        scanNextQrButton.classList.remove('disabled');
    } else {
        // Son soru (Last question)
        setTimeout(() => {
            stopTimer();
            showResults();
        }, 2000);
    }

    saveState();
}

// Sonraki QR kodu okut (Scan next QR code)
async function scanNextQr() {
    if (selectedAnswer === null) return;
    
    // Doğru veya yanlış fark etmeksizin bir sonraki QR kodu okutulabilir (Next QR code can be scanned regardless of correct or wrong)
    if (currentQuestionIndex < questions.length - 1) {
        // Önce mevcut scanner'ı durdur (eğer varsa) (First stop the current scanner (if exists))
        if (qrScanner) {
            try {
                await qrScanner.stop();
                qrScanner = null;
            } catch (err) {
                console.error("Scanner durdurulurken hata:", err);
                qrScanner = null;
            }
        }
        
        // Quiz içindeki QR scanner container'ını göster (Show QR scanner container in quiz)
        quizQrScannerContainer.style.display = 'block';
        nextQrHint.style.display = 'none';
        scanNextQrButton.style.display = 'none';
        await startQrScanner("quiz-qr-reader");
    }
}

// Sonraki soruya geç (Go to next question)
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        stopTimer();
        showResults();
    }
}

// Sonuçları göster (Show results)
function showResults() {
    questionSection.style.display = 'none';
    resultsSection.style.display = 'block';
    scoreNumber.textContent = score;
    totalScore.textContent = questions.length;
    
    const percentage = Math.round((score / questions.length) * 100);
    scorePercentage.textContent = `%${percentage}`;

    // Süreyi göster ve kaydet (Show and save time)
    let elapsedSeconds = 0;
    if (startTime) {
        elapsedSeconds = Math.floor((new Date() - startTime) / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        finalTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Progress bar'ı tamamla (Complete progress bar)
    progressBar.style.width = '100%';
    
    // Kullanıcı sonuçlarını kaydet (Save user results)
    saveUserResult(username, score, elapsedSeconds);
    
    clearState();
}

// API Base URL (Production'da otomatik olarak backend URL'i kullanılacak)
// Railway/Render URL'inizi aşağıdaki satıra yazın
const PRODUCTION_API_URL = 'https://quiz-system-production.up.railway.app'; // BURAYA RAILWAY URL'İNİZİ YAZIN
const API_BASE_URL = (window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname === '')
    ? 'http://localhost:8080'
    : PRODUCTION_API_URL;

// Kullanıcı sonuçlarını kaydet (PostgreSQL'e gönder) (Save user results (send to PostgreSQL))
async function saveUserResult(username, score, timeInSeconds) {
    const result = {
        username: username,
        score: score,
        totalQuestions: questions.length,
        timeInSeconds: timeInSeconds
    };
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/quiz/results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result)
        });
        
        if (response.ok) {
            console.log('Sonuç başarıyla veritabanına kaydedildi (Result successfully saved to database)');
        } else {
            console.error('Sonuç kaydedilemedi:', response.statusText);
            // Hata durumunda localStorage'a da kaydet (yedek) (Also save to localStorage in case of error (backup))
            saveToLocalStorage(result);
        }
    } catch (error) {
        console.error('API hatası:', error);
        // Hata durumunda localStorage'a kaydet (yedek) (Save to localStorage in case of error (backup))
        saveToLocalStorage(result);
    }
}

// LocalStorage'a yedek kayıt (API çalışmazsa) (Backup save to LocalStorage (if API doesn't work))
function saveToLocalStorage(result) {
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]');
    result.timestamp = new Date().toISOString();
    results.push(result);
    localStorage.setItem('quizResults', JSON.stringify(results));
}

// Süre başlat (Start timer)
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        if (startTime) {
            const elapsed = Math.floor((new Date() - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

// Süre durdur (Stop timer)
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Event listeners (Event listeners)
startButton.addEventListener('click', startWithUsername);
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        startWithUsername();
    }
});
scanNextQrButton.addEventListener('click', scanNextQr);

// Sayfa yüklendiğinde (On page load)
document.addEventListener('DOMContentLoaded', () => {
    // Önce kayıtlı durumu kontrol et (First check saved state)
    if (!loadState()) {
        // Yeni oyun başlat (Start new game)
        startQrScanner();
    }
});

// Sayfa kapatılırken süreyi durdur (Stop timer when page is closed)
window.addEventListener('beforeunload', () => {
    stopTimer();
});
