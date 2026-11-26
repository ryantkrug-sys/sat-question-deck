"use strict";
/* SAT Question Deck — app logic.
   Pure helpers (answer checking, deck storage) are exported for Node tests;
   DOM wiring runs only in a browser. The deck lives ONLY in localStorage. */

var DECK_KEY = "satQuestionDeck.v1";
var SECTION_DOMAINS = {
  "Math": ["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry"],
  "Reading & Writing": ["Information and Ideas", "Craft and Structure", "Expression of Ideas", "Standard English Conventions"]
};
var LETTERS = ["A", "B", "C", "D"];

/* ---------------- answer checking ---------------- */
function parseNumeric(str) {
  if (str === null || str === undefined) return NaN;
  var s = String(str).trim().replace(/[$,%\s]/g, "").replace(/,/g, "");
  if (!s) return NaN;
  var frac = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
  if (frac) {
    var den = parseFloat(frac[2]);
    if (den === 0) return NaN;
    return parseFloat(frac[1]) / den;
  }
  if (!/^-?\d+(?:\.\d+)?$/.test(s)) return NaN;
  return parseFloat(s);
}
function checkMC(q, idx) { return idx === q.answerIndex; }
function checkGrid(q, input) {
  var got = parseNumeric(input), want = parseNumeric(q.answerValue);
  if (isNaN(got) || isNaN(want)) return false;
  return Math.abs(got - want) < 0.001;
}
function answerText(q) {
  if (q.type === "mc") return LETTERS[q.answerIndex] + ") " + q.choices[q.answerIndex];
  return q.answerValue;
}

/* ---------------- deck storage ---------------- */
function loadDeck(store) {
  try {
    var raw = store.getItem(DECK_KEY);
    var deck = raw ? JSON.parse(raw) : [];
    return Array.isArray(deck) ? deck : [];
  } catch (e) { return []; }
}
function saveDeck(store, deck) { store.setItem(DECK_KEY, JSON.stringify(deck)); }
function addToDeck(store, entry) {
  var deck = loadDeck(store);
  for (var i = 0; i < deck.length; i++) {
    if (deck[i].kind === entry.kind && deck[i].id === entry.id) return false; // already there
  }
  deck.push(entry);
  saveDeck(store, deck);
  return true;
}
function removeFromDeck(store, id) {
  var deck = loadDeck(store).filter(function (e) { return e.id !== id; });
  saveDeck(store, deck);
  return deck;
}
function clearDeck(store) { saveDeck(store, []); }
function bankById(id) {
  for (var i = 0; i < QUESTION_BANK.length; i++) if (QUESTION_BANK[i].id === id) return QUESTION_BANK[i];
  return null;
}
function resolveCard(entry) {
  if (entry.kind === "bank") {
    var q = bankById(entry.id);
    if (!q) return null;
    return {
      key: entry.id, custom: false, section: q.section, domain: q.domain, topic: q.topic,
      level: q.level, stimulus: q.stimulus, question: q.question,
      choices: q.choices, answer: answerText(q), solution: q.solution
    };
  }
  return {
    key: entry.id, custom: true, section: "", domain: entry.topic || "My own questions",
    topic: "", level: null, stimulus: "", question: entry.question,
    choices: null, answer: entry.answer, solution: entry.solution || ""
  };
}
function resolveDeck(store) {
  return loadDeck(store).map(resolveCard).filter(function (c) { return c !== null; });
}

/* ---------------- browser app ---------------- */
var SQD = { state: null };
function esc(s) {
  return String(s === null || s === undefined ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function init() {
  var store = window.localStorage;
  var views = { home: el("view-home"), practice: el("view-practice"), browse: el("view-browse"), deck: el("view-deck"), add: el("view-add") };
  var chips = { practice: el("chip-practice"), browse: el("chip-browse"), deck: el("chip-deck"), add: el("chip-add") };

  function el(id) { return document.getElementById(id); }
  function updateDeckCount() { el("deck-count").textContent = String(loadDeck(store).length); }
  function deckHas(id) {
    return loadDeck(store).some(function (e) { return e.kind === "bank" && e.id === id; });
  }
  function show(view) {
    views.home.classList.toggle("hidden", view !== "home" && view !== "practice");
    views.practice.classList.toggle("hidden", view !== "practice");
    views.browse.classList.toggle("hidden", view !== "browse");
    views.deck.classList.toggle("hidden", view !== "deck");
    views.add.classList.toggle("hidden", view !== "add");
    chips.practice.setAttribute("aria-pressed", String(view === "home" || view === "practice"));
    chips.browse.setAttribute("aria-pressed", String(view === "browse"));
    chips.deck.setAttribute("aria-pressed", String(view === "deck"));
    chips.add.setAttribute("aria-pressed", String(view === "add"));
    if (view === "browse") renderBrowse();
    if (view === "deck") renderDeck();
    window.scrollTo(0, 0);
  }

  /* ----- home: domains ----- */
  function domainCount(domain) {
    return QUESTION_BANK.filter(function (q) { return q.domain === domain; }).length;
  }
  function renderHome() {
    var html = "";
    Object.keys(SECTION_DOMAINS).forEach(function (section) {
      var cls = section === "Math" ? "math-title" : "rw-title";
      var total = QUESTION_BANK.filter(function (q) { return q.section === section; }).length;
      html += '<h2 class="level-title ' + cls + '">' + esc(section) + "</h2>" +
        '<p class="level-sub">' + total + " questions across the " +
        (section === "Math" ? "four" : "four") + " official " + esc(section) + " domains.</p>";
      SECTION_DOMAINS[section].forEach(function (domain) {
        html += '<div class="domain"><button class="domain-head" type="button" data-domain="' + esc(domain) + '">' +
          '<span><span class="t">' + esc(domain) + "</span>" +
          '<span class="m">' + domainCount(domain) + " questions</span></span>" +
          '<span class="go">Practice →</span></button></div>';
      });
    });
    el("domain-list").innerHTML = html;
    Array.prototype.forEach.call(document.querySelectorAll("[data-domain]"), function (btn) {
      btn.addEventListener("click", function () { startPractice({ domain: btn.getAttribute("data-domain") }); });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-start]"), function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-start");
        if (mode === "math") startPractice({ section: "Math" });
        else if (mode === "rw") startPractice({ section: "Reading & Writing" });
        else startPractice({});
      });
    });
  }

  /* ----- browse the bank ----- */
  function syncAddBtn(btn, id) {
    var inDeck = deckHas(id);
    btn.disabled = inDeck;
    btn.textContent = inDeck ? "In my deck ✓" : "Add to my deck";
  }
  function renderBrowse() {
    var html = "";
    Object.keys(SECTION_DOMAINS).forEach(function (section) {
      var cls = section === "Math" ? "math-title" : "rw-title";
      html += '<h2 class="level-title ' + cls + '">' + esc(section) + "</h2>";
      SECTION_DOMAINS[section].forEach(function (domain) {
        var qs = QUESTION_BANK.filter(function (q) { return q.domain === domain; });
        html += '<h3 class="browse-domain">' + esc(domain) +
          ' <span style="font-weight:400;font-size:13px;color:var(--muted)">' + qs.length + " questions</span></h3>";
        qs.forEach(function (q) {
          html += '<div class="browse-item"><div class="meta">' + esc(q.topic) +
            ' · <span class="lvl">Level ' + q.level + "</span></div>";
          if (q.stimulus) html += '<div class="browse-stimulus">' + esc(q.stimulus) + "</div>";
          html += '<p class="browse-q">' + esc(q.question) + "</p>";
          if (q.type === "mc") {
            html += '<ol class="browse-choices">';
            q.choices.forEach(function (choice, i) {
              html += "<li>" + LETTERS[i] + ") " + esc(choice) + "</li>";
            });
            html += "</ol>";
          } else {
            html += '<p class="browse-choices">Grid-in: type your numeric answer.</p>';
          }
          html += '<button class="add-bank-btn" type="button" data-add="' + esc(q.id) + '">Add to my deck</button></div>';
        });
      });
    });
    el("browse-list").innerHTML = html;
    Array.prototype.forEach.call(el("browse-list").querySelectorAll("[data-add]"), function (btn) {
      syncAddBtn(btn, btn.getAttribute("data-add"));
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-add");
        addToDeck(store, { kind: "bank", id: id }); // same entry + dedupe as a missed question
        updateDeckCount();
        syncAddBtn(btn, id);
      });
    });
  }
  SQD.renderBrowse = renderBrowse;

  /* ----- practice ----- */
  function startPractice(filter) {
    var pool = QUESTION_BANK.filter(function (q) {
      if (filter.domain) return q.domain === filter.domain;
      if (filter.section) return q.section === filter.section;
      return true;
    });
    SQD.state = {
      filter: filter, queue: shuffle(pool), pos: 0, answered: 0,
      correct: 0, missed: 0, currentAnswered: false
    };
    show("practice");
    renderQuestion();
  }
  SQD.startPractice = startPractice;

  function currentQ() { return SQD.state.queue[SQD.state.pos]; }

  function renderQuestion() {
    var st = SQD.state, card = el("practice-card");
    if (st.pos >= st.queue.length) { renderSummary(); return; }
    var q = currentQ();
    st.currentAnswered = false;
    var html = '<div class="meta">' + esc(q.domain) + " · " + esc(q.topic) +
      ' · <span class="lvl">Level ' + q.level + "</span></div>";
    if (q.stimulus) html += '<div class="stimulus">' + esc(q.stimulus) + "</div>";
    html += '<p class="qtext">' + esc(q.question) + "</p>";
    if (q.type === "mc") {
      html += '<ul class="choices">';
      q.choices.forEach(function (choice, i) {
        html += '<li><button class="choice-btn" type="button" data-choice="' + i + '">' +
          '<span class="letter">' + LETTERS[i] + ")</span>" + esc(choice) + "</button></li>";
      });
      html += "</ul>";
    } else {
      html += '<div class="grid-row"><input class="grid-input" id="grid-input" inputmode="decimal" ' +
        'placeholder="Type your answer (number)"><button class="check-btn" id="grid-check" type="button">Check</button></div>';
    }
    html += '<div class="feedback" id="feedback"></div><div class="solution" id="solution"></div>' +
      '<div class="deck-note" id="deck-note"></div>' +
      '<div class="practice-foot"><span class="progress">Question ' + (st.pos + 1) + " of " +
      st.queue.length + " · Score: " + st.correct + "/" + st.answered + "</span>" +
      '<span><button class="add-current-btn" id="add-current-btn" type="button">Add to my deck</button> ' +
      '<button class="link-btn" id="quit-btn" type="button">End session</button> ' +
      '<button class="next-btn hidden" id="next-btn" type="button">Next →</button></span></div>';
    card.innerHTML = html;

    if (q.type === "mc") {
      Array.prototype.forEach.call(card.querySelectorAll("[data-choice]"), function (btn) {
        btn.addEventListener("click", function () { answerMC(parseInt(btn.getAttribute("data-choice"), 10), btn); });
      });
    } else {
      el("grid-check").addEventListener("click", answerGrid);
      el("grid-input").addEventListener("keydown", function (e) { if (e.key === "Enter") answerGrid(); });
    }
    syncAddBtn(el("add-current-btn"), q.id);
    el("add-current-btn").addEventListener("click", function () {
      addToDeck(store, { kind: "bank", id: q.id }); // same entry + dedupe as a missed question
      updateDeckCount();
      syncAddBtn(el("add-current-btn"), q.id);
    });
    el("next-btn").addEventListener("click", function () { st.pos++; renderQuestion(); });
    el("quit-btn").addEventListener("click", function () { show("home"); });
  }

  function finishAnswer(wasCorrect) {
    var st = SQD.state, q = currentQ();
    st.currentAnswered = true;
    st.answered++;
    var fb = el("feedback"), sol = el("solution");
    fb.className = "feedback show " + (wasCorrect ? "good" : "bad");
    if (wasCorrect) {
      st.correct++;
      fb.textContent = "✓ Correct!";
    } else {
      st.missed++;
      fb.textContent = "✗ Not quite — the correct answer is " + answerText(q) + ".";
      var added = addToDeck(store, { kind: "bank", id: q.id });
      el("deck-note").textContent = added
        ? "Saved to your deck — it'll be waiting under My Deck."
        : "Already in your deck.";
      updateDeckCount();
    }
    var addBtn = el("add-current-btn");
    if (addBtn) syncAddBtn(addBtn, q.id); // a miss just added it; reflect that on the button
    sol.innerHTML = '<span class="ans-line">Correct answer: ' + esc(answerText(q)) + "</span>" + esc(q.solution);
    sol.classList.add("show");
    el("next-btn").classList.remove("hidden");
    el("next-btn").textContent = st.pos + 1 >= st.queue.length ? "See results →" : "Next →";
  }
  function answerMC(idx, btn) {
    var st = SQD.state;
    if (st.currentAnswered) return;
    var q = currentQ(), ok = checkMC(q, idx);
    Array.prototype.forEach.call(el("practice-card").querySelectorAll("[data-choice]"), function (b) {
      b.disabled = true;
      var i = parseInt(b.getAttribute("data-choice"), 10);
      if (i === q.answerIndex) b.classList.add("correct");
      else if (i === idx) b.classList.add("wrong");
    });
    finishAnswer(ok);
  }
  function answerGrid() {
    var st = SQD.state;
    if (st.currentAnswered) return;
    var input = el("grid-input");
    if (!input.value.trim()) return;
    var ok = checkGrid(currentQ(), input.value);
    input.disabled = true;
    el("grid-check").disabled = true;
    finishAnswer(ok);
  }
  function renderSummary() {
    var st = SQD.state;
    el("practice-card").innerHTML =
      '<div class="meta">Session complete</div>' +
      '<p class="qtext">You answered <b>' + st.correct + " of " + st.answered + "</b> correctly.</p>" +
      (st.missed > 0
        ? '<p class="qtext">' + st.missed + " missed question" + (st.missed === 1 ? " is" : "s are") +
          " now in your deck — review 'em while they're fresh.</p>"
        : '<p class="qtext">No misses — nothing new added to your deck. 🎉</p>') +
      '<div class="practice-foot"><button class="next-btn" id="again-btn" type="button">Practice again</button>' +
      '<button class="deck-btn" id="to-deck-btn" type="button">Review my deck</button></div>';
    el("again-btn").addEventListener("click", function () { startPractice(st.filter); });
    el("to-deck-btn").addEventListener("click", function () { show("deck"); });
  }

  /* ----- deck review ----- */
  var deckPos = 0;
  function renderDeck() {
    var cards = resolveDeck(store);
    var empty = cards.length === 0;
    el("deck-empty").classList.toggle("hidden", !empty);
    el("deck-main").classList.toggle("hidden", empty);
    if (empty) return;
    if (deckPos >= cards.length) deckPos = cards.length - 1;
    if (deckPos < 0) deckPos = 0;
    var c = cards[deckPos];
    var front = "";
    if (c.stimulus) front += '<div class="ex" style="margin-bottom:8px">' + esc(c.stimulus) + "</div>";
    front += '<div class="ex">' + esc(c.question) + "</div>";
    if (c.choices) {
      front += '<ol style="margin:10px 0 0;padding-left:22px">';
      c.choices.forEach(function (choice, i) {
        front += '<li style="font-size:14.5px;padding:2px 0">' + LETTERS[i] + ") " + esc(choice) + "</li>";
      });
      front += "</ol>";
    }
    var meta = c.custom
      ? esc(c.domain) + " · added by you"
      : esc(c.domain) + " · " + esc(c.topic) + " · Level " + c.level;
    el("deck-card").className = "card";
    el("deck-card").innerHTML =
      '<div class="w" style="font-size:14px;color:var(--muted)">' + meta + "</div>" + front +
      '<button class="reveal-btn" type="button" id="deck-reveal">Tap to reveal answer</button>' +
      '<div class="def"><b>Correct answer: ' + esc(c.answer) + "</b>" +
      (c.solution ? "<br>" + esc(c.solution) : "") + "</div>";
    el("deck-pos").textContent = "Card " + (deckPos + 1) + " of " + cards.length;
    el("deck-reveal").addEventListener("click", function () {
      el("deck-card").classList.add("revealed");
    });
  }
  el("deck-prev").addEventListener("click", function () {
    var n = resolveDeck(store).length; if (!n) return;
    deckPos = (deckPos - 1 + n) % n; renderDeck();
  });
  el("deck-next").addEventListener("click", function () {
    var n = resolveDeck(store).length; if (!n) return;
    deckPos = (deckPos + 1) % n; renderDeck();
  });
  el("deck-shuffle").addEventListener("click", function () {
    var deck = shuffle(loadDeck(store));
    saveDeck(store, deck); deckPos = 0; renderDeck();
  });
  el("deck-remove").addEventListener("click", function () {
    var cards = resolveDeck(store);
    if (!cards.length) return;
    removeFromDeck(store, cards[deckPos].key);
    updateDeckCount(); renderDeck();
  });
  el("deck-clear").addEventListener("click", function () {
    if (!loadDeck(store).length) return;
    if (window.confirm("Remove every card from your deck? This can't be undone.")) {
      clearDeck(store); deckPos = 0; updateDeckCount(); renderDeck();
    }
  });
  el("deck-print").addEventListener("click", function () {
    buildPrintArea();
    window.print();
  });
  function buildPrintArea() {
    var cards = resolveDeck(store);
    var html = "<h1>My SAT Missed-Question Deck</h1><p>" + cards.length +
      " card" + (cards.length === 1 ? "" : "s") + " · SAT Question Deck · Math with Ryan</p>";
    cards.forEach(function (c, i) {
      html += '<div class="print-card"><div class="pm">' + (i + 1) + ". " +
        esc(c.custom ? c.domain : c.domain + " · " + c.topic) + "</div>";
      if (c.stimulus) html += '<div class="pq">' + esc(c.stimulus) + "</div>";
      html += '<div class="pq"><b>' + esc(c.question) + "</b></div>";
      if (c.choices) {
        html += '<div class="pq">' + c.choices.map(function (choice, j) {
          return LETTERS[j] + ") " + esc(choice);
        }).join("<br>") + "</div>";
      }
      html += '<div class="pa"><b>Answer:</b> ' + esc(c.answer) + "</div>";
      if (c.solution) html += '<div class="ps"><b>Solution:</b> ' + esc(c.solution) + "</div>";
      html += "</div>";
    });
    el("print-area").innerHTML = html;
    return cards.length;
  }
  SQD.buildPrintArea = buildPrintArea;
  SQD.renderDeck = renderDeck;

  /* ----- add your own ----- */
  var topicSel = el("f-topic");
  Object.keys(SECTION_DOMAINS).forEach(function (section) {
    SECTION_DOMAINS[section].forEach(function (domain) {
      var opt = document.createElement("option");
      opt.value = domain; opt.textContent = section + " — " + domain;
      topicSel.appendChild(opt);
    });
  });
  el("add-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var entry = {
      kind: "custom",
      id: "c" + Date.now().toString(36),
      question: el("f-question").value.trim(),
      answer: el("f-answer").value.trim(),
      solution: el("f-solution").value.trim(),
      topic: el("f-topic").value || "My own questions"
    };
    if (!entry.question || !entry.answer) return;
    addToDeck(store, entry);
    updateDeckCount();
    el("add-form").reset();
    el("add-ok").classList.add("show");
    setTimeout(function () { el("add-ok").classList.remove("show"); }, 4000);
  });

  /* ----- nav ----- */
  chips.practice.addEventListener("click", function () { show("home"); });
  chips.browse.addEventListener("click", function () { show("browse"); });
  chips.deck.addEventListener("click", function () { show("deck"); });
  chips.add.addEventListener("click", function () { show("add"); });

  renderHome();
  updateDeckCount();
  SQD.show = show;
  SQD.store = store;

  if (/[?&]selftest=1/.test(window.location.search)) runSelfTest();
}

/* ---------------- self-test (only with ?selftest=1) ---------------- */
function runSelfTest() {
  var out = [];
  function check(name, cond) { out.push((cond ? "PASS" : "FAIL") + " " + name); }
  function $(id) { return document.getElementById(id); }
  try {
    check("bank has 458 questions", QUESTION_BANK.length === 458);
    var domains = {};
    QUESTION_BANK.forEach(function (q) { domains[q.domain] = true; });
    check("bank spans 8 domains", Object.keys(domains).length === 8);
    var algebra = QUESTION_BANK.filter(function (q) { return q.domain === "Algebra"; });
    var algLevels = { 1: 0, 2: 0, 3: 0 };
    algebra.forEach(function (q) { algLevels[q.level]++; });
    check("Algebra has 102 questions, 34 per level",
      algebra.length === 102 && algLevels[1] === 34 && algLevels[2] === 34 && algLevels[3] === 34);
    var advmath = QUESTION_BANK.filter(function (q) { return q.domain === "Advanced Math"; });
    var amLevels = { 1: 0, 2: 0, 3: 0 };
    advmath.forEach(function (q) { amLevels[q.level]++; });
    check("Advanced Math has 102 questions, 34 per level",
      advmath.length === 102 && amLevels[1] === 34 && amLevels[2] === 34 && amLevels[3] === 34);
    var psda = QUESTION_BANK.filter(function (q) { return q.domain === "Problem-Solving and Data Analysis"; });
    var psdaLevels = { 1: 0, 2: 0, 3: 0 };
    psda.forEach(function (q) { psdaLevels[q.level]++; });
    check("PSDA has 102 questions, 34 per level",
      psda.length === 102 && psdaLevels[1] === 34 && psdaLevels[2] === 34 && psdaLevels[3] === 34);
    var geometry = QUESTION_BANK.filter(function (q) { return q.domain === "Geometry and Trigonometry"; });
    var geoLevels = { 1: 0, 2: 0, 3: 0 };
    geometry.forEach(function (q) { geoLevels[q.level]++; });
    check("Geometry and Trigonometry has 102 questions, 34 per level",
      geometry.length === 102 && geoLevels[1] === 34 && geoLevels[2] === 34 && geoLevels[3] === 34);
    var seenIds = {}, dupId = false;
    QUESTION_BANK.forEach(function (q) { if (seenIds[q.id]) dupId = true; seenIds[q.id] = true; });
    check("no duplicate question ids", !dupId);
    check("deck starts empty", loadDeck(SQD.store).length === 0);

    // practice: deliberately miss question 1
    SQD.startPractice({ domain: "Algebra" });
    var q1 = SQD.state.queue[SQD.state.pos];
    if (q1.type === "mc") {
      var wrongBtn = document.querySelector('[data-choice="' + ((q1.answerIndex + 1) % 4) + '"]');
      wrongBtn.click();
    } else {
      $("grid-input").value = "999999";
      $("grid-check").click();
    }
    check("feedback shown after answering", $("feedback").classList.contains("show"));
    check("solution shown after answering", $("solution").classList.contains("show"));
    check("miss landed in deck", loadDeck(SQD.store).length === 1);

    // next question: answer correctly
    $("next-btn").click();
    var q2 = SQD.state.queue[SQD.state.pos];
    if (q2.type === "mc") {
      document.querySelector('[data-choice="' + q2.answerIndex + '"]').click();
    } else {
      $("grid-input").value = q2.answerValue;
      $("grid-check").click();
    }
    check("correct answer did not add to deck", loadDeck(SQD.store).length === 1);
    check("score is 1 of 2", SQD.state.correct === 1 && SQD.state.answered === 2);

    // deck review: reveal the card
    SQD.show("deck");
    check("deck card rendered", !!$("deck-reveal"));
    $("deck-reveal").click();
    check("card reveals answer", $("deck-card").classList.contains("revealed"));

    // add a custom card through the real form
    SQD.show("add");
    $("f-question").value = "What is 2 + 2?";
    $("f-answer").value = "4";
    $("f-solution").value = "Counting: 2, 3, 4.";
    $("add-form").dispatchEvent(new window.Event("submit", { cancelable: true }));
    check("custom card added", loadDeck(SQD.store).length === 2);

    // print view contains both cards
    var n = SQD.buildPrintArea();
    check("print area built with 2 cards", n === 2 && $("print-area").querySelectorAll(".print-card").length === 2);

    // remove the custom card from deck view (it is last in deck order)
    SQD.show("deck");
    $("deck-next").click(); // move to card 2 (the custom card)
    $("deck-remove").click();
    check("remove card works", loadDeck(SQD.store).length === 1);

    // browse: add a bank question straight from the bank list
    SQD.show("browse");
    var addBtns = document.querySelectorAll("[data-add]");
    check("browse lists all 458 bank questions", addBtns.length === 458);
    var beforeBrowse = loadDeck(SQD.store).length;
    var targetBtn = null, targetId = null;
    Array.prototype.forEach.call(addBtns, function (b) {
      if (!targetBtn && !b.disabled) { targetBtn = b; targetId = b.getAttribute("data-add"); }
    });
    check("browse found an addable question", !!targetBtn);
    targetBtn.click();
    check("add-from-browse added the card", loadDeck(SQD.store).length === beforeBrowse + 1);
    check("browse button now shows in-deck state", targetBtn.disabled === true);
    targetBtn.click(); // already in deck: must not duplicate
    var idsNow = loadDeck(SQD.store).map(function (e) { return e.id; });
    check("no duplicate after re-adding", loadDeck(SQD.store).length === beforeBrowse + 1 &&
      new Set(idsNow).size === idsNow.length);
    var resolvedBrowse = resolveDeck(SQD.store).filter(function (c) { return c.key === targetId; });
    check("browse-added card resolves with answer + solution",
      resolvedBrowse.length === 1 && resolvedBrowse[0].answer.length > 0 && resolvedBrowse[0].solution.length > 0);
    var nPrint = SQD.buildPrintArea();
    check("print includes the browse-added card", nPrint === beforeBrowse + 1 &&
      $("print-area").querySelectorAll(".print-card").length === beforeBrowse + 1);

    // practice screen: add the current question from its own button
    SQD.startPractice({ domain: "Geometry and Trigonometry" });
    var pq = SQD.state.queue[SQD.state.pos];
    var beforePractice = loadDeck(SQD.store).length;
    $("add-current-btn").click();
    check("add-from-practice added the card", loadDeck(SQD.store).length === beforePractice + 1 &&
      loadDeck(SQD.store).some(function (e) { return e.kind === "bank" && e.id === pq.id; }));
    check("practice button now shows in-deck state", $("add-current-btn").disabled === true);
  } catch (err) {
    out.push("FAIL exception: " + (err && err.message));
  }
  var fails = out.filter(function (l) { return l.indexOf("FAIL") === 0; }).length;
  var pre = document.createElement("pre");
  pre.id = "selftest-results";
  pre.textContent = "SELFTEST " + (fails === 0 ? "PASS" : "FAIL") + " (" + out.length + " checks)\n" + out.join("\n");
  document.body.appendChild(pre);
  document.title = "SELFTEST " + (fails === 0 ? "PASS" : "FAIL");
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    DECK_KEY: DECK_KEY, SECTION_DOMAINS: SECTION_DOMAINS,
    parseNumeric: parseNumeric, checkMC: checkMC, checkGrid: checkGrid,
    answerText: answerText, loadDeck: loadDeck, saveDeck: saveDeck,
    addToDeck: addToDeck, removeFromDeck: removeFromDeck, clearDeck: clearDeck,
    resolveCard: resolveCard, resolveDeck: resolveDeck
  };
}
