public class QuizQuestion {
    private String question;
    private String[] choices;
    private int correctIndex;

    public QuizQuestion(String question, String[] choices, int correctIndex) {
        this.question = question;
        this.choices = choices;
        this.correctIndex = correctIndex;
    }

    public String getQuestion() {
        return question;
    }

    public String[] getChoices() {
        return choices;
    }

    public int getCorrectIndex() {
        return correctIndex;
    }
}
