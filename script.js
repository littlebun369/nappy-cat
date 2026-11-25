
const rooms = {
  misty: {
    number: "ROOM 01",
    name: "Misty",
    theme: "Quietness & Acceptance",
    description: "A quiet corner to pause, breathe and simply be.",
    character: "Misty's little world",
    background: "#e8dfd0"
  },
  mochi: {
    number: "ROOM 02",
    name: "Mochi",
    theme: "Love & Connection",
    description: "A little reminder that connection can be found in simple moments.",
    character: "Mochi's little world",
    background: "#e9dedc"
  },
  susu: {
    number: "ROOM 03",
    name: "Susu",
    theme: "Hope & New Beginnings",
    description: "Every new day carries the possibility of something gentle.",
    character: "Susu's little world",
    background: "#e7e4d3"
  },
  pudding: {
    number: "ROOM 04",
    name: "Pudding",
    theme: "Letting Go & Rest",
    description: "You are allowed to slow down. Rest is part of the journey.",
    character: "Pudding's little world",
    background: "#e4ded3"
  },
  coke: {
    number: "ROOM 05",
    name: "Coke",
    theme: "Journeys & Possibilities",
    description: "There is always another little corner of the world to explore.",
    character: "Coke's little world",
    background: "#dce3e3"
  }
};

const roomTabs = document.querySelectorAll(".room-tab");

roomTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const room = rooms[tab.dataset.room];

    if (!room) return;

    roomTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    document.querySelector(".room-label").textContent = room.number;
    document.getElementById("room-name").textContent = room.name;
    document.getElementById("room-theme").textContent = room.theme;
    document.getElementById("room-description").textContent = room.description;
    document.getElementById("character").textContent = room.character;
    document.getElementById("room-scene").style.background = room.background;
  });
});

// A temporary collection of reflections.
// We will expand this to all 64 I Ching hexagrams.

const reflections = [
  {
    number: "01",
    name: "乾為天",
    english: "A little courage can open a new sky.",
    chinese: "心中有方向，就勇敢踏出第一步。你不必等待一切準備妥當，才開始前行。"
  },
  {
    number: "02",
    name: "坤為地",
    english: "There is quiet strength in allowing things to grow.",
    chinese: "不必事事爭先。有時懂得包容、承載和等待，本身就是一種力量。"
  },
  {
    number: "03",
    name: "水雷屯",
    english: "Every new beginning deserves patience.",
    chinese: "開始的路未必平坦，混亂也不代表走錯了。先站穩腳步，再慢慢前行。"
  },
  {
    number: "05",
    name: "水天需",
    english: "Waiting is not the same as giving up.",
    chinese: "有些事情需要時間醞釀。保持信心，照顧好自己，等待合適的時機。"
  },
  {
    number: "11",
    name: "地天泰",
    english: "May you find room to breathe and grow.",
    chinese: "當內外逐漸和諧，就珍惜眼前的安穩，也讓自己自在地成長。"
  },
  {
    number: "23",
    name: "山地剝",
    english: "When things fall away, hold on to what truly matters.",
    chinese: "當一些東西逐漸離開，不必勉強挽留。先守住自己最重要的部分。"
  },
  {
    number: "30",
    name: "離為火",
    english: "Let your inner light guide you through.",
    chinese: "即使前路有些迷茫，也別忘記心中珍惜的光。清晰地看見自己，便能找到方向。"
  },
  {
    number: "64",
    name: "火水未濟",
    english: "Your story is still unfolding. Keep going gently.",
    chinese: "未完成不代表失敗。前面的路仍在延伸，給自己一點耐心，繼續走下去。"
  }
];

const drawButton = document.getElementById("draw-button");
const result = document.getElementById("result");

drawButton.addEventListener("click", () => {
  const reflection = reflections[
    Math.floor(Math.random() * reflections.length)
  ];

  result.innerHTML = `
    <p><strong>MARBLE ${reflection.number}</strong></p>
    <h3>${reflection.name}</h3>
    <p><strong>${reflection.english}</strong></p>
    <p>${reflection.chinese}</p>
  `;
});

// Simple local weather mood toggle will be added later.

