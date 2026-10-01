
const $ = (id) => document.getElementById(id);

const screens = {
  home: $("homeScreen"),
  studyMenu: $("studyMenu"),
  study: $("studyScreen"),
  exam: $("examScreen"),
  result: $("resultScreen")
};

let studyOrder = [];
let studyIndex = 0;
let studySubmitted = false;
let examQuestions = [];
let examAnswers = {};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  $("homeBtn").classList.toggle("hidden", name === "home");
  window.scrollTo({top: 0, behavior: "smooth"});
}

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function correctOption(question) {
  return question.options.find(o => o.correct);
}

function startStudy(randomize) {
  studyOrder = randomize ? shuffle(QUESTION_BANK) : [...QUESTION_BANK];
  studyIndex = 0;
  studySubmitted = false;
  showScreen("study");
  renderStudyQuestion();
}

function renderStudyQuestion() {
  const q = studyOrder[studyIndex];
  studySubmitted = false;
  $("studyCounter").textContent = `Câu ${studyIndex + 1} / ${studyOrder.length}`;
  $("studyQuestionNumber").textContent = `Câu ${q.id}`;
  $("studyQuestionText").textContent = q.question;

  const options = $("studyOptions");
  options.innerHTML = "";
  q.options.forEach(o => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = `
      <input type="radio" name="studyAnswer" value="${o.label}">
      <span class="letter">${o.label}.</span>
      <span>${escapeHtml(o.text)}</span>
    `;
    options.appendChild(label);
  });

  $("studyResult").className = "result-box hidden";
  $("studyResult").textContent = "";
  $("studySubmitBtn").classList.remove("hidden");
  $("studyNextBtn").classList.add("hidden");

  const pct = Math.round((studyIndex / studyOrder.length) * 100);
  $("studyProgressText").textContent = `${pct}%`;
  $("studyProgressBar").style.width = `${pct}%`;
}

function submitStudy() {
  if (studySubmitted) return;
  const q = studyOrder[studyIndex];
  const selected = document.querySelector('input[name="studyAnswer"]:checked');
  if (!selected) {
    alert("Bạn chưa chọn đáp án.");
    return;
  }

  studySubmitted = true;
  const selectedLabel = selected.value;
  const right = correctOption(q).label;
  const optionEls = [...document.querySelectorAll("#studyOptions .option")];

  optionEls.forEach((el, i) => {
    const opt = q.options[i];
    el.classList.add("disabled");
    el.querySelector("input").disabled = true;
    if (opt.correct) el.classList.add("correct");
    if (opt.label === selectedLabel && !opt.correct) el.classList.add("wrong");
  });

  const result = $("studyResult");
  if (selectedLabel === right) {
    result.className = "result-box ok";
    result.textContent = "✓ Chính xác! Đáp án của bạn đúng.";
  } else {
    result.className = "result-box bad";
    result.textContent = `✗ Chưa đúng. Đáp án đúng là ${right}.`;
  }

  $("studySubmitBtn").classList.add("hidden");
  $("studyNextBtn").classList.remove("hidden");
  $("studyNextBtn").textContent =
    studyIndex === studyOrder.length - 1 ? "Hoàn thành ✓" : "Câu tiếp theo →";
}

function nextStudy() {
  if (studyIndex >= studyOrder.length - 1) {
    alert("Bạn đã hoàn thành 180 câu trong phần học.");
    showScreen("studyMenu");
    return;
  }
  studyIndex++;
  renderStudyQuestion();
}

function startExam() {
  examQuestions = shuffle(QUESTION_BANK).slice(0, 30);
  examAnswers = {};
  showScreen("exam");
  renderExam();
}

function renderExam() {
  const wrap = $("examQuestions");
  wrap.innerHTML = "";

  examQuestions.forEach((q, index) => {
    const item = document.createElement("div");
    item.className = "exam-item";

    const title = document.createElement("div");
    title.className = "exam-item-title";
    title.textContent = `Câu ${index + 1}. ${q.question}`;
    item.appendChild(title);

    q.options.forEach(o => {
      const label = document.createElement("label");
      label.className = "option";
      label.innerHTML = `
        <input type="radio" name="exam-${index}" value="${o.label}">
        <span class="letter">${o.label}.</span>
        <span>${escapeHtml(o.text)}</span>
      `;
      label.querySelector("input").addEventListener("change", () => {
        examAnswers[index] = o.label;
        updateAnsweredCount();
      });
      item.appendChild(label);
    });

    wrap.appendChild(item);
  });
  updateAnsweredCount();
}

function updateAnsweredCount() {
  const count = Object.keys(examAnswers).length;
  $("answeredCount").textContent = count;
}

function submitExam() {
  const count = Object.keys(examAnswers).length;
  if (count < 30) {
    $("examWarning").textContent =
      `Bạn mới chọn ${count}/30 câu. Hãy chọn đủ 30 câu trước khi nộp bài.`;
    $("examWarning").classList.remove("hidden");
    return;
  }
  $("examWarning").classList.add("hidden");

  let correct = 0, wrong = 0, blank = 0;
  examQuestions.forEach((q, i) => {
    const selected = examAnswers[i];
    const right = correctOption(q).label;
    if (!selected) blank++;
    else if (selected === right) correct++;
    else wrong++;
  });

  renderExamResult(correct, wrong, blank);
}

function renderExamResult(correct, wrong, blank) {
  const total = examQuestions.length;
  const percent = Math.round(correct / total * 100);

  $("resultTitle").textContent = "Kết quả bài thi";
  $("resultScore").textContent = `${correct}/${total}`;
  $("resultPercent").textContent = `${percent}%`;
  $("resultCorrect").textContent = correct;
  $("resultWrong").textContent = wrong;
  $("resultBlank").textContent = blank;

  const wrap = $("resultQuestions");
  wrap.innerHTML = "";

  examQuestions.forEach((q, index) => {
    const selected = examAnswers[index] || null;
    const right = correctOption(q).label;

    const item = document.createElement("div");
    item.className = "review-item";

    const title = document.createElement("div");
    title.className = "review-question";
    title.textContent = `Câu ${index + 1}. ${q.question}`;
    item.appendChild(title);

    q.options.forEach(o => {
      const div = document.createElement("div");
      div.className = "review-answer";
      div.textContent = `${o.label}. ${o.text}`;

      if (o.label === right) {
        div.classList.add("correct");
      } else if (selected === o.label && selected !== right) {
        div.classList.add("wrong");
      }
      item.appendChild(div);
    });

    const note = document.createElement("div");
    note.style.marginTop = "8px";
    note.style.fontSize = "13px";
    note.style.color = "#64748b";
    note.textContent = selected
      ? `Bạn chọn: ${selected} • Đáp án đúng: ${right}`
      : `Bạn chưa chọn • Đáp án đúng: ${right}`;
    item.appendChild(note);

    wrap.appendChild(item);
  });

  showScreen("result");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

$("studyBtn").addEventListener("click", () => showScreen("studyMenu"));
$("examBtn").addEventListener("click", startExam);
$("studyOrderedBtn").addEventListener("click", () => startStudy(false));
$("studyRandomBtn").addEventListener("click", () => startStudy(true));
$("studySubmitBtn").addEventListener("click", submitStudy);
$("studyNextBtn").addEventListener("click", nextStudy);
$("examSubmitBtn").addEventListener("click", submitExam);
$("retryExamBtn").addEventListener("click", startExam);
$("backHomeResultBtn").addEventListener("click", () => showScreen("home"));
$("homeBtn").addEventListener("click", () => showScreen("home"));

showScreen("home");
