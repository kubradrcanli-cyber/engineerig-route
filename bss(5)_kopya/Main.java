import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Soru havuzu
        List<QuizQuestion> questions = new ArrayList<>();

        questions.add(new QuizQuestion(
                "1) Hangisi radyo dalgalarının keşfi ve kablosuz iletişimin temelini atan bilim insanıdır? (Who is the scientist that discovered radio waves and laid the foundation for wireless communication?)",
                new String[]{"A) Heinrich Hertz", "B) Thomas Edison", "C) James Watt", "D) Nikola Tesla"},
                0
        ));

        questions.add(new QuizQuestion(
                "2) Dünyada 'Mühendisliğin Babası' olarak anılan, aynı zamanda 'Vitruvius Adamı' çizimiyle ünlü Rönesans dönemi dahisi kimdir? (Who is the Renaissance genius known as the 'Father of Engineering' and famous for the 'Vitruvian Man' drawing?)",
                new String[]{"A) Isaac Newton", "B) Leonardo da Vinci", "C) Galileo Galilei", "D) Nikola Tesla"},
                1
        ));

        questions.add(new QuizQuestion(
                "3) Dünyanın ilk otomobilini (1885-1886) yapan Alman mühendis kimdir? (Who is the German engineer who built the world's first automobile in 1885-1886?)",
                new String[]{"A) Henry Ford", "B) Rudolf Diesel", "C) Gottlieb Daimler", "D) Karl Benz"},
                3
        ));

        questions.add(new QuizQuestion(
                "4) Modern motor teknolojisinin temeli olan krank milini ilk tanımlayan; su saatleri, otomatik makineler ve programlanabilir robotlar tasarlayan; 'Sibernetiğin ve robotik mühendisliğin babası' olarak anılan İslam Altın Çağı'nın harika mühendisi kimdir? (Who is the brilliant engineer of the Islamic Golden Age who first described the crankshaft and is known as the 'father of cybernetics and robotic engineering'?)",
                new String[]{"A) El-Birûnî", "B) İbn Rüşd", "C) El-Cezeri", "D) Farabî"},
                2
        ));

        questions.add(new QuizQuestion(
                "5) Günümüzde yaptığı çalışmalarla bilime katkıda bulunan Türk kadın mühendisimiz Canan Dağdeviren, hangi çalışmaları ile uluslararası alanda büyük ses getirmiştir? (Which of her works has brought Turkish female engineer Canan Dağdeviren, who contributes to science with her current studies, great international recognition?)",
                new String[]{
                    "A) Sıvı hidrojenin uçaklarda yakıt olarak kullanılmasına yönelik çalışmalar",
                    "B) İnsan organlarına uyum sağlayabilen elektronik malzemeler",
                    "C) Bilgisayar sistemleri ve uygulamaları için kod yazma ve entegrasyon",
                    "D) Koronavirüs gibi salgın hastalıkların tedavisinde uygulanan aşılar"
                },
                1
        ));

        questions.add(new QuizQuestion(
                "6) Türkiye'de 1930'lu yıllarda havacılık mühendisliği alanında yapısal analiz, aerodinamik tasarım ve malzeme mühendisliği prensiplerini uygulayarak tamamen yerli uçak tasarım ve üretim çalışmalarını başlatan; ayrıca İstanbul'da kurduğu tesislerde pervane, kanat ve gövde imalat süreçlerini sistematik mühendislik yaklaşımıyla standartlaştıran kişi aşağıdakilerden hangisidir? (Who initiated fully domestic aircraft design and production in Turkey in the 1930s by applying structural analysis, aerodynamic design, and materials engineering principles?)",
                new String[]{
                    "A) Selahattin Reşit Alan",
                    "B) Vecihi Hürkuş",
                    "C) Nuri Demirağ",
                    "D) Şakir Zümre"
                },
                2
        ));

        questions.add(new QuizQuestion(
                "7) Günümüzde bilgisayar bilimlerinin temeli olan 'Algoritma' terimi, ismini hangi ünlü matematikçi ve bilginden almıştır? (From which famous mathematician and scholar does the term 'Algorithm' take its name, which is the foundation of computer science today?)",
                new String[]{"A) Harezmi", "B) Farabi", "C) Ömer Hayyam", "D) Biruni"},
                0
        ));

        questions.add(new QuizQuestion(
                "8) Türk havacılık tarihinde 'ilk Türk uçağını tasarlayan ve yerli uçakla ilk uçuşu gerçekleştiren kişi' olarak bilinen, aynı zamanda sivil havacılığın gelişmesi için birçok girişimde bulunan öncü kimdir? (Who is the pioneer in Turkish aviation history known as 'the person who designed the first Turkish aircraft and made the first flight with a domestic aircraft', and who also made many initiatives for the development of civil aviation?)",
                new String[]{"A) Nuri Demirağ", "B) Sabiha Gökçen", "C) Vecihi Hürkuş", "D) Cevat Yurdakul"},
                2
        ));

        questions.add(new QuizQuestion(
                "9) Türkiye'nin uzay ve havacılık mühendisliği alanındaki en büyük ve prestijli projesi olan, Türkiye Cumhuriyeti'nin 100. yılında yörüngeye fırlatılan ilk yerli ve milli haberleşme uydusu aşağıdakilerden hangisidir? (Which of the following is Turkey's first domestic and national communication satellite, which is the country's largest and most prestigious project in the field of space and aerospace engineering, launched into orbit in the 100th anniversary of the Republic of Turkey?)",
                new String[]{"A) BİLSAT", "B) TÜRKSAT 6A", "C) GÖKTÜRK-2", "D) RASAT"},
                1
        ));

        questions.add(new QuizQuestion(
                "10) 1947 yılında Bell Laboratuvarlarında icat edilen, vakum tüplerinin yerini alarak elektronik cihazların minyatürleşmesini sağlayan ve modern işlemcilerin temel yapı taşı olan devre elemanı nedir? (What is the circuit component invented at Bell Labs in 1947 that replaced vacuum tubes, enabled the miniaturization of electronic devices, and became the basic building block of modern processors?)",
                new String[]{"A) Röle", "B) Diyot", "C) Kondansatör", "D) Transistör"},
                3
        ));

        int score = 0;

        // Soruları sırayla gösterme
        for (QuizQuestion q : questions) {
            System.out.println("\n" + q.getQuestion());

            String[] choices = q.getChoices();
            for (int i = 0; i < choices.length; i++) {
                System.out.println(choices[i]);
            }

            System.out.print("Cevabınız (A/B/C/D): ");
            char answer = scanner.next().toUpperCase().charAt(0);

            int answerIndex = answer - 'A';

            if (answerIndex == q.getCorrectIndex()) {
                System.out.println("Doğru!");
                score++;
            } else {
                System.out.println("Yanlış! Doğru cevap: "
                        + (char) (q.getCorrectIndex() + 'A'));
            }
        }

        System.out.println("\nQuiz bitti! Doğru sayınız: " + score + "/" + questions.size());
    }
}
