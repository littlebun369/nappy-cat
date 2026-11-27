
/* NAPPY SPACE
   64 Little Messages
   Original reflections inspired by the 64 I Ching hexagrams.
   Not fortune-telling.
*/

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
    name: "Cream",
    theme: "Journeys & Possibilities",
    description: "There is always another little corner of the world to explore.",
    character: "Cream's little world",
    background: "#dce3e3"
  }
};

// Room switching
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
    
const character = document.getElementById("character");
const scene = document.getElementById("room-scene");

if (tab.dataset.room === "mochi") {
  character.innerHTML = `
    <div class="mochi-cat">
      <div class="mochi-tail"></div>
      <div class="mochi-body"></div>
      <div class="mochi-ear mochi-ear-left"></div>
      <div class="mochi-ear mochi-ear-right"></div>
      <div class="mochi-head">
        <span class="mochi-eye mochi-eye-left"></span>
        <span class="mochi-eye mochi-eye-right"></span>
      </div>
    </div>
  `;
  scene.classList.add("room-mochi");

} else if (tab.dataset.room === "misty") {
  character.innerHTML = `
    <div class="misty-cat">
      <div class="misty-tail"></div>
      <div class="misty-body"></div>
      <div class="misty-ear misty-ear-left"></div>
      <div class="misty-ear misty-ear-right"></div>
      <div class="misty-head"></div>
    </div>
  `;
  scene.classList.remove("room-mochi");

} else {
  character.textContent = room.character;
  scene.classList.remove("room-mochi");
}

    document.getElementById("room-scene").style.background = room.background;
  });
});

// Each entry:
// [number, Chinese name, English hexagram name, English message, Chinese message]


const marbleColours = [
  "#B98789", "#C68F83", "#B87965", "#C6A080",
  "#B9A78E", "#9D8D7D", "#B7A16D", "#91A08B",
  "#858E78", "#829B98", "#729493", "#879DAF",
  "#778A9C", "#A29AAF", "#AA8E9F", "#96999A"
];

function getMarbleColour(number) {
  const index = Math.floor((Number(number) - 1) / 4);
  return marbleColours[index] || "#B9A78E";
}


const reflections = [
  ["01", "乾為天", "The Creative",
    "A little courage can open a new sky.",
    "心裏有方向，就先踏出第一步。你不必等一切準備妥當，才開始前行。"],

  ["02", "坤為地", "The Receptive",
    "There is quiet strength in allowing things to grow.",
    "不必事事爭先。懂得包容與等待，本身就是一種力量。"],

  ["03", "水雷屯", "Difficulty at the Beginning",
    "Every beginning deserves your patience.",
    "起步時的混亂，不代表走錯了路。先站穩腳步，再一步一步向前。"],

  ["04", "山水蒙", "Youthful Folly",
    "It is okay not to know everything yet.",
    "不懂，並不可恥。保持好奇、願意學習，就是明白的開始。"],

  ["05", "水天需", "Waiting",
    "Waiting is not the same as giving up.",
    "有些事需要時間醞釀。照顧好自己，等待屬於你的時機。"],

  ["06", "天水訟", "Conflict",
    "Not every disagreement needs to be won.",
    "放下爭辯，不一定是認輸，而是明白甚麼更值得守護。"],

  ["07", "地水師", "The Army",
    "True strength knows when to stand together.",
    "面對困難，不必獨自硬撐。清晰的方向和適當的支持，都能帶來力量。"],

  ["08", "水地比", "Holding Together",
    "We are not meant to walk every road alone.",
    "信任需要真誠與時間。珍惜願意同行的人，也慢慢選擇值得託付的關係。"],

  ["09", "風天小畜", "Small Taming",
    "Small steps gather quiet strength.",
    "暫時未能大步前進，也可以先把眼前的小事做好。一點一滴，力量會慢慢累積。"],

  ["10", "天澤履", "Treading",
    "Move gently, but know where you stand.",
    "處境複雜時，謹慎一點無妨。對人保持尊重，也記得守住自己的界線。"],

  ["11", "地天泰", "Peace",
    "May you find room to breathe and grow.",
    "當一切漸漸和順，就好好享受這份安穩，也讓自己自在地成長。"],

  ["12", "天地否", "Standstill",
    "A closed door is not your whole journey.",
    "事情暫時停滯，不必勉強自己衝破所有阻礙。守住初心，等待局面轉變。"],

  ["13", "天火同人", "Fellowship",
    "Different paths can still share a little light.",
    "即使各有不同，也可以互相理解。真誠的連結，不需要大家都一樣。"],

  ["14", "火天大有", "Great Possession",
    "Remember what you already hold within you.",
    "你擁有的不只是成果，還有經歷、能力和身邊的人。懂得善用，也懂得感恩。"],

  ["15", "地山謙", "Modesty",
    "Quiet confidence does not need to be loud.",
    "謙遜不是看輕自己，而是清楚自己的能力，同時尊重別人。"],

  ["16", "雷地豫", "Enthusiasm",
    "Let yourself welcome a little joy.",
    "當期待重新燃起，容許自己感受喜悅，同時保持清醒與準備。"],

  ["17", "澤雷隨", "Following",
    "Be open to change, but stay true to yourself.",
    "順應環境，不等於失去自己。多聽別人的想法，也記得自己真正重視甚麼。"],

  ["18", "山風蠱", "Work on What Has Been Spoiled",
    "Understanding begins when we are willing to look closer.",
    "有些問題要被看見，才能慢慢處理。願意調整，不代表過去的你不夠好。"],

  ["19", "地澤臨", "Approach",
    "Make room for what is coming closer.",
    "當新的機會或關係靠近，保持開放，並以耐心和責任去迎接。"],

  ["20", "風地觀", "Contemplation",
    "A little distance can bring a clearer view.",
    "不急於下判斷。退後一步觀察，也許會看見之前忽略的事。"],

  ["21", "火雷噬嗑", "Biting Through",
    "Some things need to be faced, not avoided.",
    "面對阻礙，需要清晰和果斷。找出問題所在，才能真正處理它。"],

  ["22", "山火賁", "Grace",
    "Beauty can be found in the simplest things.",
    "不必刻意追求完美。簡單、真誠、恰到好處，已經很美。"],

  ["23", "山地剝", "Splitting Apart",
    "When things fall away, hold on to what truly matters.",
    "有些東西正在離開，不必勉強挽留。先守住你最重要的部分，其餘的，慢慢來。"],

  ["24", "地雷復", "Return",
    "Every return can be a quiet new beginning.",
    "即使曾經迷失，也能重新找回方向。不必責怪自己，願意重新開始，已經很不容易。"],

  ["25", "天雷無妄", "Innocence",
    "Let sincerity guide your next step.",
    "保持真誠，不必事事算計。做好自己能做的，也接受無法掌控的部分。"],

  ["26", "山天大畜", "Great Taming",
    "Strength grows when we learn to hold it wisely.",
    "真正的力量來自累積與節制。把時間用來學習和沉澱，讓自己準備得更好。"],

  ["27", "山雷頤", "Nourishment",
    "Be mindful of what you feed your heart and mind.",
    "留意自己每天吸收的事物、說出的話，以及如何照顧身心。你也值得被好好滋養。"],

  ["28", "澤風大過", "Great Exceeding",
    "When the weight feels heavy, seek a better balance.",
    "當責任超出所能承受，不必只是硬撐。適時尋求支持，重新調整步伐。"],

  ["29", "坎為水", "The Abysmal",
    "Even through uncertainty, take one careful step.",
    "困難可能接連而來，但你不必一次解決所有事。保持警覺，一步一步走過眼前的路。"],

  ["30", "離為火", "The Clinging",
    "Let your inner light guide you through.",
    "即使前路有些迷茫，也別忘了心中珍惜的光。看清自己，就能找到方向。"],

  ["31", "澤山咸", "Influence",
    "A genuine connection begins with an open heart.",
    "真正的感應來自真誠與互相尊重。用心感受，也讓彼此保有自己的空間。"],

  ["32", "雷風恆", "Duration",
    "What matters deserves steady care.",
    "長久的關係和目標，需要持續的心意。不必急着看見成果，穩穩地走下去。"],

  ["33", "天山遯", "Retreat",
    "Stepping back can be an act of wisdom.",
    "暫時退後，是為了保留力量、看清局勢。離開不適合的位置，也是一種選擇。"],

  ["34", "雷天大壯", "Great Power",
    "Use your strength with care and purpose.",
    "有力量，不代表要處處強硬。懂得節制和尊重，力量才真正發揮。"],

  ["35", "火地晉", "Progress",
    "Let yourself see how far you have come.",
    "進步未必天天看得見。回頭看看走過的路，你可能已比想像中走得更遠。"],

  ["36", "地火明夷", "Darkening of the Light",
    "Protect your light when the world feels difficult.",
    "當環境不容你盡情發光，先好好保護自己。光芒暫時收起，並沒有消失。"],

  ["37", "風火家人", "The Family",
    "Care begins with the little things we do.",
    "關係需要日常的關心、責任與尊重。溫暖往往藏在平凡的小事裏。"],

  ["38", "火澤睽", "Opposition",
    "Difference does not always mean disconnection.",
    "意見不同，不一定代表無法理解。即使不能完全一致，也可以尊重彼此的立場。"],

  ["39", "水山蹇", "Obstruction",
    "When the road is blocked, look for another way.",
    "前路受阻時，不必一味硬闖。停下來看看四周，尋找合適的幫助或方向。"],

  ["40", "雷水解", "Deliverance",
    "Give yourself permission to put something down.",
    "當困難開始鬆動，讓自己慢慢放下壓力。已經可以放下的重擔，不必再背着。"],

  ["41", "山澤損", "Decrease",
    "Letting go of a little can make room for more.",
    "減少不必要的負擔，才看得清真正重要的事。放下，不等於失去一切。"],

  ["42", "風雷益", "Increase",
    "A little kindness can widen the circle of good.",
    "當你有餘力，不妨把善意分享出去。小小的付出，也可能帶來長遠的影響。"],

  ["43", "澤天夬", "Breakthrough",
    "Find the courage to face what needs to change.",
    "有些事不能一直迴避。清楚說出自己的立場，勇敢面對需要改變的地方。"],

  ["44", "天風姤", "Coming to Meet",
    "Stay aware of what enters your life.",
    "新的人事物可能突然出現。保持開放，也要懂得分辨甚麼適合自己。"],

  ["45", "澤地萃", "Gathering Together",
    "There is strength in finding your people.",
    "找到可以互相支持的人，是一份珍貴的力量。真誠的同行，讓人不再孤單。"],

  ["46", "地風升", "Pushing Upward",
    "Growth often happens one small step at a time.",
    "成長未必轟轟烈烈。方向清晰、願意持續，小小的進步也值得被看見。"],

  ["47", "澤水困", "Oppression",
    "Even in hard times, your worth remains.",
    "當生活令人感到受困，也不要因此否定自己的價值。先照顧好自己，再慢慢尋找出路。"],

  ["48", "水風井", "The Well",
    "Return to the sources that truly nourish you.",
    "真正有價值的事物，需要持續照料。重新找回那些滋養你的根源。"],

  ["49", "澤火革", "Revolution",
    "Change begins when the old no longer serves.",
    "當舊方法不再合適，改變值得認真考慮。看清時機，再勇敢調整。"],

  ["50", "火風鼎", "The Cauldron",
    "Let your experiences become something meaningful.",
    "過去的經歷可以轉化成智慧。好好整理所學，讓自己慢慢成為更成熟的人。"],

  ["51", "震為雷", "The Arousing",
    "A sudden change can help us find our ground.",
    "面對突如其來的事，先讓自己安定下來。即使受到驚動，也能重新站穩。"],

  ["52", "艮為山", "Keeping Still",
    "Stillness can be its own kind of progress.",
    "不必每一刻都向前衝。安靜下來，知道何時停止，也是一種智慧。"],

  ["53", "風山漸", "Development",
    "Meaningful growth takes the time it takes.",
    "穩固的成長需要時間。不必和別人比較，按自己的步伐前進。"],

  ["54", "雷澤歸妹", "The Marrying Maiden",
    "Make choices that leave room for your own needs.",
    "面對關係和選擇，不要只為迎合別人而忽略自己。看清自己的位置與需要。"],

  ["55", "雷火豐", "Abundance",
    "Be present with the richness of this moment.",
    "豐盛的時刻值得珍惜，也要明白一切都會變化。用心感受當下，讓美好留在心裏。"],

  ["56", "火山旅", "The Wanderer",
    "Even far from home, you can carry yourself with you.",
    "人生有時像一段旅程，未必時刻有歸屬感。記得自己的初心，珍惜沿途遇見的人和事。"],

  ["57", "巽為風", "The Gentle",
    "Gentle persistence can reach where force cannot.",
    "不一定要用強硬的方式改變事情。溫和而持續的力量，有時更能走得深遠。"],

  ["58", "兌為澤", "The Joyous",
    "Let honest joy find its way back to you.",
    "真正的喜悅來自真誠交流和內心自在。容許自己分享快樂，也接受別人的善意。"],

  ["59", "風水渙", "Dispersion",
    "What is scattered needs understanding, not blame.",
    "當事情變得分散或混亂，先不要急着責怪自己。重新整理心緒，找回仍然連得上的部分。"],

  ["60", "水澤節", "Limitation",
    "Healthy boundaries make room for a better balance.",
    "適當的界線不是限制自由，而是保護你的時間、心力和重要的事物。"],

  ["61", "風澤中孚", "Inner Truth",
    "Let trust begin with honesty.",
    "真誠是信任的起點。對別人坦誠，也誠實面對自己的感受。"],

  ["62", "雷山小過", "Small Exceeding",
    "Small matters deserve care; big steps can wait.",
    "環境不適合冒進時，先做好眼前的小事。謹慎不是膽怯，而是懂得衡量時機。"],

  ["63", "水火既濟", "After Completion",
    "Completion is a moment to care for what comes next.",
    "完成一件事值得欣慰，也要留心之後的維持與變化。珍惜成果，繼續用心照料。"],

  ["64", "火水未濟", "Before Completion",
    "Your story is still unfolding. Keep going gently.",
    "未完成，不代表失敗。前面的路仍在延伸，給自己多一點耐心，繼續走下去。"]
];



/* Garapon reflection draw */

const drawButton = document.getElementById("draw-button");
const result = document.getElementById("result");

function showReflection(item) {
  if (!result) return;

  const [
    number,
    chineseName,
    englishName,
    englishMessage,
    chineseMessage
  ] = item;

  const marbleColour = getMarbleColour(number);

  result.innerHTML = `
    <div class="reflection-layout">
      <div class="marble-display">
        <div class="glass-marble" style="--marble-colour: ${marbleColour}">
          <span>${number}</span>
        </div>
        <small>MARBLE ${number}</small>
      </div>

      <div class="reflection-message">
        <h3>${chineseName}</h3>
        <p class="hexagram-english">${englishName}</p>
        <p class="message-english"><strong>${englishMessage}</strong></p>
        <p class="message-chinese">${chineseMessage}</p>
      </div>
    </div>
  `;
}

function drawReflection() {
  const item = reflections[
    Math.floor(Math.random() * reflections.length)
  ];

  showReflection(item);
}

/* Keep the original draw button working */

if (drawButton) {
  drawButton.addEventListener("click", drawReflection);
}

/* Garapon handle and matching marble drop */

const garaponHandle = document.getElementById("garapon-handle");
const garaponMachine = document.querySelector(".garapon-machine");

if (garaponHandle) {
  garaponHandle.addEventListener("click", () => {

    if (garaponHandle.classList.contains("is-turning")) {
      return;
    }

    // Select one reflection
    const item = reflections[
      Math.floor(Math.random() * reflections.length)
    ];

    const marbleColour = getMarbleColour(item[0]);

    // Start the machine
    garaponHandle.classList.add("is-turning");
    garaponMachine?.classList.add("is-mixing");

    // Wait for the handle rotation
    setTimeout(() => {

      garaponHandle.classList.remove("is-turning");
      garaponMachine?.classList.remove("is-mixing");

      if (!garaponMachine) {
        showReflection(item);
        return;
      }

      // Create the matching glass marble
      const fallingMarble = document.createElement("span");
      fallingMarble.className = "dropped-marble";

      fallingMarble.style.setProperty(
        "--marble-colour",
        marbleColour
      );

      garaponMachine.appendChild(fallingMarble);

      // Show the selected reflection
      setTimeout(() => {
        fallingMarble.remove();
        showReflection(item);
      }, 1000);

    }, 850);

  });
}

