

# 🎯 Quiz App

A modern, interactive **web-based quiz application** built with **HTML, CSS, and JavaScript**.
Test your knowledge with timed questions and get instant, animated feedback!

---

## 🌟 Features

### ✨ Core Functionality
* 🧠 **Interactive Quiz Interface** with smooth transitions
* 📝 **10 Multiple-Choice Questions** (HTML/CSS-based)
* ⏱️ **30-Second Timer** with auto-advance
* ✅ **Instant Feedback** (green for correct, red for wrong)
* 📊 **Score & Progress Tracking**
* 🔁 **One-click Retry**

### 🎨 User Experience
* 📱 **Responsive Design** (mobile & desktop)
* 🎬 **Smooth Animations & Progress Bar**
* 💬 **Motivational Messages** after results
* 💡 **Visual Feedback** on every answer

### 🔧 Technical Highlights
* ⚙️ **State Management** for quiz flow
* 💾 **localStorage** for saving scores
* 🔍 **Clean Event Handling** & DOM updates
* 🚫 **Prevents multiple answers** per question

---

## 📁 Project Structure

```text
Quiz App/
├── index.html            # Landing page
├── questions.html        # Quiz interface
├── results.html          # Results display
├── questionsrc.js        # Quiz logic
├── resultsrc.js          # Results handling
├── style.css             # Landing page styles
├── questionstyle.css     # Quiz page styles
├── resultsstyle.css      # Results page styles
├── images/               # Assets (logo, icons)
└── README.md             # Documentation

```

---

## 🚀 Getting Started

### 🔧 Requirements

* Any modern web browser (Chrome, Firefox, Edge, Safari)

### ⚙️ Setup

1. **Clone the repository**
```bash
git clone [https://github.com/bibek018/quiz-app.git](https://github.com/bibek018/quiz-app.git)
cd quiz-app

```


2. **Open the app**
* Open `index.html` directly in your browser.
* **OR** start a local server:
```bash
python -m http.server 8000
# or
npx serve .

```




3. **Play the Quiz**
* Click **Start Quiz**.
* Answer each question within 30 seconds.
* View your results and **retry anytime!**



---

## 🎮 How to Play

1. 🎬 Click **Start Quiz**
2. 🖱️ Select your answer (only one per question)
3. ⏳ Timer auto-advances after 30s
4. 🏁 View your score & message
5. 🔁 Click **Retry** to play again

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| **HTML5** | Structure & layout |
| **CSS3** | Styling & animations |
| **JavaScript (ES6+)** | Logic & interactivity |
| **localStorage** | Score persistence |

---

## 🧩 Key Components

### `questionsrc.js`

* Manages questions, timer, validation, and scoring.
* Handles navigation and quiz state.

### `resultsrc.js`

* Calculates score and percentage.
* Animates progress bar.
* Displays motivational messages.

---

## 🎨 Design Highlights

* 🎨 **Color Theme:** Green `#01AB08` and soft gradients.
* 🔠 **Font:** Poppins (Google Fonts).
* 📱 **Layout:** Responsive with Flexbox.
* ✨ **UI:** Clean, minimal, and accessible.

---

## 🔧 Customization

### ➕ Add New Questions

In your questions file, use this structure:

```js
const questionsToPut = {
  question11: {
    question: 'Your new question?',
    choice1: 'A', 
    choice2: 'B', 
    choice3: 'C', 
    choice4: 'D',
    answer: 'A'
  }
};

```

### ⏱️ Change Timer

```js
let timeLeft = 30; // Adjust time duration here (in seconds)

```

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repository
2. **Create** a branch → `git checkout -b feature/your-feature`
3. **Commit & Push** your changes
4. **Open** a Pull Request

---



## 📈 Future Enhancements

* [ ] Question categories
* [ ] Difficulty levels
* [ ] User accounts & leaderboards
* [ ] Sound effects & animations
* [ ] Question explanations
* [ ] PWA / Mobile app version

---

**⭐ If you found this project helpful, please give it a star! ⭐** Made with ❤️ by **Bibek Ojha**



