const scenarios = [
  { world: "ทางแยกในป่า", icon: "✧", prompt: "คุณเดินหลงทางก่อนฟ้ามืด และได้ยินเสียงเคาะเบา ๆ จากกระท่อมข้างทาง", context: "ในกระเป๋ามีแผนที่ที่ยังอ่านไม่ออก กับเสบียงพอสำหรับคืนนี้", choices: ["เคาะประตูถามเจ้าของกระท่อมว่าพอช่วยได้ไหม", "กางแผนที่ ค่อย ๆ หาทางที่ดูปลอดภัยที่สุด", "หาที่พักใกล้ ๆ ก่อน พรุ่งนี้ค่อยตัดสินใจ"], scores: [{warmth:2}, {clarity:2}, {calm:2}] },
  { world: "โต๊ะอาหาร", icon: "❋", prompt: "เพื่อนสนิทขอให้คุณช่วยเลือกทางเดินชีวิต แต่คุณเองก็ยังไม่มีคำตอบชัดเจน", context: "เขาไม่ได้ต้องการคำแนะนำที่สมบูรณ์แบบ แค่อยากรู้ว่าคุณคิดอย่างไร", choices: ["ถามก่อนว่าเรื่องนี้ทำให้เขารู้สึกอย่างไร", "ช่วยกันแยกข้อดีข้อเสียทีละทาง", "บอกตรง ๆ ว่ายังไม่รู้ แต่พร้อมอยู่ข้าง ๆ"], scores: [{warmth:2}, {clarity:2}, {steadiness:2}] },
  { world: "สถานีเที่ยวสุดท้าย", icon: "◒", prompt: "รถไฟเที่ยวสุดท้ายกำลังจะออก คุณเพิ่งรู้ว่าตั๋วของคนที่ยืนข้าง ๆ หายไป", context: "เจ้าหน้าที่กำลังจะปิดประตู และมีคนต่อแถวรออยู่ด้านหลัง", choices: ["ช่วยเขาหาตั๋ว ถึงแม้อาจทำให้ตัวเองพลาดรถ", "เรียกเจ้าหน้าที่มาช่วยจัดการให้เร็วที่สุด", "ถามว่าเขาต้องการความช่วยเหลืออะไร แล้วทำตามนั้น"], scores: [{warmth:2}, {clarity:1, steadiness:1}, {warmth:1, steadiness:1}] },
  { world: "ห้องทำงาน", icon: "▧", prompt: "ก่อนเริ่มงานชิ้นสำคัญหนึ่งวัน แผนที่เตรียมไว้ถูกเปลี่ยนกะทันหัน", context: "ทุกคนรอให้คุณช่วยเลือกว่าจะรับมือแบบไหน", choices: ["ชวนทุกคนหยุดตั้งหลัก แล้วเริ่มวางแผนใหม่", "มองหาช่องทางที่น่าสนใจในสถานการณ์ใหม่นี้", "บอกทีมว่ากังวลตรงไหน เพื่อช่วยกันหาคำตอบ"], scores: [{steadiness:2}, {wonder:2}, {warmth:1, clarity:1}] },
  { world: "กล่องจดหมาย", icon: "✉", prompt: "คุณพบจดหมายเก่าที่ยังไม่เคยส่งถึงคนสำคัญคนหนึ่ง", context: "เวลาผ่านมานานแล้ว และคุณไม่แน่ใจว่าตอนนี้ควรทำอย่างไร", choices: ["เขียนต่อจากประโยคเดิม แล้วส่งไปอย่างจริงใจ", "คิดให้รอบคอบก่อนว่าอยากให้จดหมายนี้สื่ออะไร", "เก็บจดหมายไว้ แล้วขอบคุณตัวเองที่เขียนมัน"], scores: [{warmth:1, wonder:1}, {clarity:2}, {calm:1, steadiness:1}] },
  { world: "ตลาดเช้าวันหยุด", icon: "☀", prompt: "คุณมีเวลาว่างเพียงครึ่งวัน และบังเอิญเจอเพื่อนเก่าที่ไม่ได้คุยกันนาน", context: "อีกไม่นานคุณมีนัดของตัวเองอยู่แล้ว", choices: ["ชวนเขานั่งคุยกัน แม้จะได้เวลาไม่นาน", "ลองชวนเขาไปทำอะไรใหม่ ๆ แถวนี้ด้วยกัน", "บอกเวลาที่มีตรง ๆ แล้วนัดวันที่สะดวกกว่านี้"], scores: [{warmth:2}, {wonder:2}, {clarity:1, steadiness:1}] },
  { world: "สวนหลังฝน", icon: "❀", prompt: "ต้นไม้ที่คุณดูแลมานานเริ่มเหี่ยว ทั้งที่คุณทำตามวิธีเดิมทุกอย่าง", context: "มีคนแนะนำวิธีใหม่หลายแบบ แต่บางวิธีก็ดูขัดกับสิ่งที่คุณเคยเชื่อ", choices: ["ลองสังเกตต้นไม้ใกล้ ๆ ว่ามันกำลังต้องการอะไร", "ค้นคว้าวิธีดูแลใหม่แล้วทดลองทีละอย่าง", "ขอความเห็นจากคนที่เคยปลูกต้นไม้ชนิดนี้"], scores: [{calm:2}, {clarity:1, wonder:1}, {warmth:1, clarity:1}] },
  { world: "เสียงในวงสนทนา", icon: "♫", prompt: "ในวงสนทนา มีคนพูดจาแรงจนอีกคนเงียบไปทั้งโต๊ะ", context: "บรรยากาศเริ่มอึดอัด และทุกคนเหมือนรอให้ใครสักคนพูดอะไร", choices: ["ชวนคนที่เงียบให้เล่าความรู้สึกของเขา", "บอกอย่างสุภาพว่าคำพูดเมื่อกี้อาจทำร้ายกัน", "เปลี่ยนเรื่องก่อน แล้วค่อยเข้าไปถามทีหลัง"], scores: [{warmth:2}, {steadiness:2}, {calm:1, warmth:1}] },
  { world: "ห้องที่ยังไม่คุ้น", icon: "⌂", prompt: "คุณเริ่มต้นบทบาทใหม่ ที่ทุกอย่างยังไม่เข้าที่และไม่มีคู่มือให้", context: "สิ่งที่ทำได้ดีในช่วงแรกอาจเป็นแค่การค่อย ๆ ทำความรู้จัก", choices: ["ทำความรู้จักผู้คนและถามว่าพวกเขาทำงานกันอย่างไร", "ลองทำหลายอย่างเพื่อเรียนรู้จากของจริง", "เลือกเรื่องเล็ก ๆ หนึ่งเรื่องแล้วทำให้มั่นคงก่อน"], scores: [{warmth:1, clarity:1}, {wonder:2}, {steadiness:2}] },
  { world: "คำชวนที่ไม่ทันตั้งตัว", icon: "☾", prompt: "มีคนชวนคุณไปร่วมกิจกรรมที่ไม่เคยลอง แต่วันนั้นคุณก็เหนื่อยพอสมควร", context: "ไม่มีใครคาดหวังให้คุณตอบตกลงทันที", choices: ["ถามเพิ่มว่าบรรยากาศเป็นอย่างไร แล้วค่อยตัดสินใจ", "ตอบตกลง เพราะอยากรู้ว่าตัวเองจะชอบไหม", "ขอพักวันนี้ แล้วเสนอวันอื่นที่พร้อมกว่า"], scores: [{clarity:1, warmth:1}, {wonder:2}, {calm:1, steadiness:1}] },
  { world: "แผนที่คนละฉบับ", icon: "⌖", prompt: "คุณกับคนใกล้ตัวเข้าใจคำพูดเดียวกันไม่เหมือนกัน และบทสนทนาเริ่มวนซ้ำ", context: "ทั้งคู่ยังอยากทำความเข้าใจกัน แต่ต่างก็เริ่มเหนื่อย", choices: ["พักหายใจ แล้วลองเล่าความรู้สึกแทนการเถียงเหตุผล", "ถามให้ชัดว่าคำไหนที่แต่ละคนเข้าใจต่างกัน", "ขอพักก่อน แล้วนัดคุยตอนที่ใจเย็นกว่านี้"], scores: [{warmth:1, calm:1}, {clarity:2}, {steadiness:2}] },
  { world: "แสงแรก", icon: "☼", prompt: "คุณมีความคิดใหม่ที่อยากทำมานาน แต่ยังไม่แน่ใจว่าจะเริ่มตรงไหนดี", context: "ไม่จำเป็นต้องทำทุกอย่างให้เสร็จในวันเดียว", choices: ["เล่าให้คนที่ไว้ใจฟัง แล้วขอเริ่มไปด้วยกัน", "ลองทำฉบับเล็ก ๆ วันนี้เลย เพื่อดูว่ารู้สึกอย่างไร", "เขียนก้าวแรกที่ทำได้จริง แล้วกันเวลาไว้ให้มัน"], scores: [{warmth:1, steadiness:1}, {wonder:2}, {clarity:1, calm:1}] },
  { world: "วันว่างที่หายไป", icon: "⌁", prompt: "วันหยุดที่ตั้งใจจะใช้พักผ่อน กลับเต็มไปด้วยเรื่องเล็ก ๆ ที่ต้องจัดการ", context: "พอเงยหน้าขึ้นมา เวลาส่วนตัวก็เหลือไม่มากแล้ว", choices: ["โทรหาคนที่อยากคุยด้วย แล้วแบ่งเวลาที่เหลือให้ตัวเอง", "เลือกทำเรื่องหนึ่งให้เสร็จและปล่อยเรื่องอื่นไว้", "วางงานลงสักครู่ แล้วออกไปเปลี่ยนบรรยากาศ"], scores: [{warmth:1, calm:1}, {steadiness:1, clarity:1}, {wonder:1, calm:1}] },
  { world: "สะพานข้ามลำธาร", icon: "⌁", prompt: "คุณเดินทางมาถึงสะพานที่ยังไม่เคยข้าม ข้างหน้ามองเห็นทางสวย แต่ไม่คุ้น", context: "ทางที่รู้จักยังอยู่ด้านหลัง และไม่มีใครเร่งให้คุณเลือก", choices: ["ชวนใครสักคนเดินข้ามไปด้วยกัน", "ลองเดินไปดูช่วงสั้น ๆ แล้วค่อยตัดสินใจ", "นั่งดูทางทั้งสองฝั่งจนรู้สึกพร้อม"], scores: [{warmth:1, wonder:1}, {wonder:2}, {calm:1, clarity:1}] },
  { world: "คำชมที่รับไม่ถนัด", icon: "☆", prompt: "มีคนชื่นชมสิ่งที่คุณทำ แต่คุณรู้สึกว่ายังมีอีกหลายอย่างที่ทำได้ดีกว่านี้", context: "เขาพูดด้วยความตั้งใจดี และกำลังรอฟังคำตอบของคุณ", choices: ["ขอบคุณ แล้วถามว่าเขาชอบส่วนไหนเป็นพิเศษ", "รับคำชมไว้ก่อน แล้วค่อยกลับไปพัฒนาต่อ", "บอกว่าดีใจที่เขามองเห็นความตั้งใจของคุณ"], scores: [{clarity:1, wonder:1}, {calm:1, steadiness:1}, {warmth:2}] },
  { world: "หน้าต่างบานใหม่", icon: "▱", prompt: "คุณได้รับโอกาสครั้งสำคัญที่อาจเปลี่ยนกิจวัตรเดิมไปมาก", context: "โอกาสนี้น่าตื่นเต้น แต่ก็มีเรื่องที่ยังตอบไม่ได้อยู่บ้าง", choices: ["คุยกับคนสำคัญว่าการเปลี่ยนแปลงนี้กระทบใครบ้าง", "ลองจินตนาการถึงชีวิตหลังรับโอกาส แล้วเช็กใจตัวเอง", "ขอเวลาตรวจสอบรายละเอียดและสิ่งที่ต้องเตรียม"], scores: [{warmth:1, steadiness:1}, {wonder:1, calm:1}, {clarity:2}] }
];

const personalities = {
  warmth: { name: "นักเก็บแสง", tagline: "มองเห็นใจคน ก่อนมองหาทางออก", creature: "✿", description: "คุณมักสังเกตความรู้สึกของคนรอบตัว และทำให้คนอื่นรู้สึกว่าพวกเขาไม่ได้อยู่ลำพัง ความใส่ใจเล็ก ๆ ของคุณอาจเป็นแสงให้ใครบางคนในวันที่หนักหนา", strength: "รับฟังและเชื่อมโยงผู้คนได้อย่างเป็นธรรมชาติ", reflection: "พื้นที่ให้ความรู้สึกของคุณเองได้พักอยู่ตรงไหน?" },
  clarity: { name: "นักอ่านแผนที่", tagline: "ค่อย ๆ มองทางให้เห็นภาพ", creature: "⌖", description: "เมื่อเรื่องตรงหน้าดูยุ่งเหยิง คุณมักหาจุดตั้งต้นและแยกสิ่งต่าง ๆ ให้เข้าใจได้ การคิดเป็นขั้นตอนช่วยให้ทั้งคุณและคนรอบข้างเดินต่อได้อย่างมั่นใจ", strength: "มองเห็นรายละเอียดและตั้งคำถามที่ช่วยคลี่คลายเรื่อง", reflection: "บางครั้งคุณอนุญาตให้ตัวเองลองก่อนรู้คำตอบครบไหม?" },
  calm: { name: "ผู้เฝ้าดูดาว", tagline: "ให้เวลาใจได้ฟังเสียงตัวเอง", creature: "☾", description: "คุณให้คุณค่ากับการหยุดสังเกต และไม่รีบตอบสนองต่อทุกเสียงรอบตัว ความสงบนี้ช่วยให้คุณมองเห็นความต้องการที่ซ่อนอยู่ใต้ความวุ่นวาย", strength: "รู้จักเว้นจังหวะและกลับมาอยู่กับปัจจุบัน", reflection: "เมื่อพักพอแล้ว มีเรื่องไหนที่อยากก้าวเข้าไปหา?" },
  wonder: { name: "นักเปิดหน้าต่าง", tagline: "พร้อมมองโลกจากมุมที่ยังไม่รู้จัก", creature: "✦", description: "คุณมีความอยากรู้อยากเห็นและเปิดใจต่อความเป็นไปได้ใหม่ ๆ การได้ทดลอง ทำความรู้จัก หรือเปลี่ยนมุมมอง ช่วยให้โลกของคุณขยายกว้างขึ้นเสมอ", strength: "มองเห็นโอกาสและเรียนรู้จากประสบการณ์ตรง", reflection: "อะไรคือสิ่งที่คุณอยากกลับมาทำต่ออย่างสม่ำเสมอ?" },
  steadiness: { name: "คนวางหลักไมล์", tagline: "ก้าวเล็ก ๆ ก็พาไปถึงได้", creature: "▰", description: "คุณเชื่อในจังหวะที่ทำได้จริง และค่อย ๆ สร้างความมั่นคงจากก้าวเล็ก ๆ วิธีนี้ทำให้คุณเป็นคนที่พึ่งพาได้ ทั้งกับตัวเองและคนอื่น", strength: "อดทน รักษาคำมั่น และเดินหน้าต่ออย่างสม่ำเสมอ", reflection: "มีอะไรที่คุณอยากวางลงบ้าง เพื่อไม่ต้องแบกทุกอย่างไว้เอง?" }
};

const screens = { home: document.querySelector("#home"), quiz: document.querySelector("#quiz"), result: document.querySelector("#result") };
let round = [], step = 0, totals = {}, currentType = "warmth";
const byId = id => document.getElementById(id);
function showScreen(name) { Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; }); }
function startGame() {
  round = [...scenarios].sort(() => Math.random() - .5).slice(0, 5);
  step = 0; totals = { warmth: 0, clarity: 0, calm: 0, wonder: 0, steadiness: 0 };
  showScreen("quiz"); renderQuestion();
}
function renderQuestion() {
  const item = round[step];
  byId("question-count").textContent = `ช่วงที่ ${String(step + 1).padStart(2, "0")} / 05`;
  byId("progress-fill").style.width = `${step / round.length * 100}%`;
  byId("scene-icon").textContent = item.icon; byId("scene-label").textContent = item.world; byId("scene-kicker").textContent = item.world;
  byId("question-title").textContent = item.prompt; byId("question-context").textContent = item.context;
  const choices = byId("choices"); choices.replaceChildren();
  item.choices.forEach((choice, index) => {
    const button = document.createElement("button"); button.className = "choice-button"; button.type = "button";
    const key = document.createElement("span"); key.className = "choice-key"; key.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span"); label.textContent = choice;
    button.append(key, label); button.addEventListener("click", () => answer(index)); choices.append(button);
  });
}
function answer(index) {
  Object.entries(round[step].scores[index]).forEach(([trait, points]) => totals[trait] += points);
  step++;
  if (step < round.length) renderQuestion(); else revealResult();
}
function revealResult() {
  currentType = Object.keys(totals).sort((a, b) => totals[b] - totals[a])[0];
  const result = personalities[currentType];
  byId("result-name").textContent = result.name; byId("result-tagline").textContent = result.tagline;
  byId("card-creature").textContent = result.creature; byId("result-description").textContent = result.description;
  byId("result-strength").textContent = result.strength; byId("result-reflection").textContent = result.reflection;
  byId("flip-card").classList.remove("is-flipped"); byId("flip-card").setAttribute("aria-pressed", "false");
  byId("share-note").textContent = "บุคลิกของเราเปลี่ยนแปลงได้ตามช่วงเวลา การ์ดนี้เป็นเพียงกระจกบานหนึ่ง"; byId("share-note").classList.remove("success");
  byId("progress-fill").style.width = "100%"; showScreen("result");
}
byId("start-button").addEventListener("click", startGame);
byId("replay-button").addEventListener("click", startGame);
byId("quit-button").addEventListener("click", () => showScreen("home"));
byId("flip-card").addEventListener("click", event => { const card = event.currentTarget; const flipped = card.classList.toggle("is-flipped"); card.setAttribute("aria-pressed", String(flipped)); });
byId("share-button").addEventListener("click", async () => {
  const result = personalities[currentType]; const text = `ฉันได้การ์ด “${result.name}” — ${result.tagline}\nใจในด่าน: เกมสำรวจตัวเอง`;
  try { await navigator.clipboard.writeText(text); byId("share-note").textContent = "คัดลอกผลแล้ว ส่งต่อให้คนที่อยากชวนมองตัวเองได้เลย"; byId("share-note").classList.add("success"); }
  catch { byId("share-note").textContent = `${result.name} — ${result.tagline}`; }
});
