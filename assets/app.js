const profiles = [
  { id: "lin", name: "林岚", role: "品牌摄影师", cat: "design", avatar: "林", teach: "人像构图、自然光拍摄", learn: "Python 自动整理图片订单", score: 97, time: "周末下午", trust: "信用 98 · 21 次交换", ai: "Mochi 评价：目标互补，作品可验收，是今天最肥的一只猎物。" },
  { id: "zhou", name: "周亦", role: "短视频剪辑博主", cat: "design", avatar: "周", teach: "脚本结构、剪辑节奏", learn: "数据看板搭建", score: 92, time: "工作日晚上", trust: "信用 94 · 13 次交换", ai: "Mochi 评价：适合用剪辑模板交换数据看板，配对概率高。" },
  { id: "xu", name: "许诺", role: "效率系统教练", cat: "tech", avatar: "许", teach: "Notion 学习系统", learn: "手机摄影修图", score: 88, time: "碎片 30 分钟", trust: "信用 93 · 16 次交换", ai: "Mochi 评价：轻量高频交换，适合怕坚持不下来的人。" },
  { id: "chen", name: "陈默", role: "后端工程师", cat: "tech", avatar: "默", teach: "Python 项目拆解", learn: "民谣吉他弹唱", score: 84, time: "周三晚上", trust: "信用 91 · 9 次交换", ai: "Mochi 评价：技能强但目标不完全互补，建议先短聊。" },
  { id: "gao", name: "高晴", role: "英语面试教练", cat: "life", avatar: "高", teach: "英语口语、面试表达", learn: "PPT 信息设计", score: 86, time: "工作日早晨", trust: "信用 95 · 18 次交换", ai: "Mochi 评价：如果你想练表达，这是值得抓回篮子的猎物。" },
  { id: "yuan", name: "袁野", role: "咖啡拉花玩家", cat: "life", avatar: "袁", teach: "咖啡拉花、手冲入门", learn: "短视频拍摄", score: 78, time: "周末上午", trust: "信用 89 · 7 次交换", ai: "Mochi 评价：兴趣型交换，适合低压力体验。" },
  { id: "han", name: "韩知", role: "产品设计师", cat: "design", avatar: "韩", teach: "Figma 原型、交互评审", learn: "Python 自动化", score: 90, time: "周日晚上", trust: "信用 97 · 24 次交换", ai: "Mochi 评价：能帮你把作品做得更像完整产品。" },
  { id: "lu", name: "陆声", role: "吉他老师", cat: "life", avatar: "陆", teach: "民谣吉他、弹唱节奏", learn: "个人网站搭建", score: 82, time: "周五晚上", trust: "信用 92 · 15 次交换", ai: "Mochi 评价：生活技能交换，反馈口碑稳定。" },
];

const basketKey = "skillloop-prey-basket";
const intentKey = "skillloop-match-intents";

function readIds(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeIds(key, ids) {
  localStorage.setItem(key, JSON.stringify([...new Set(ids)]));
}

function toast(message) {
  const el = document.querySelector("[data-toast]");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}

function syncCount() {
  const count = readIds(basketKey).length;
  document.querySelectorAll("[data-basket-count]").forEach((node) => {
    node.textContent = String(count);
  });
}

function addToBasket(id) {
  const ids = readIds(basketKey);
  if (!ids.includes(id)) ids.push(id);
  writeIds(basketKey, ids);
  syncCount();
  const profile = profiles.find((item) => item.id === id);
  toast(`${profile.name} 已被 Mochi 放进猎物篮。`);
}

function profileCard(profile, options = {}) {
  const inBasket = readIds(basketKey).includes(profile.id);
  return `
    <article class="profile-card locked" data-card="${profile.id}">
      <div class="profile-head">
        <div class="avatar">${profile.avatar}</div>
        <div>
          <h3>${profile.name} · ${profile.role}</h3>
          <span>${profile.trust} · ${profile.time}</span>
        </div>
      </div>
      <p><b>能教：</b>${profile.teach}</p>
      <p><b>想学：</b>${profile.learn}</p>
      <p>${profile.ai}</p>
      <div class="mini-tags">
        <span>匹配 ${profile.score}%</span>
        <span>配对后解锁</span>
        <span>${profile.cat === "tech" ? "技术效率" : profile.cat === "design" ? "创作表达" : "生活兴趣"}</span>
      </div>
      <p class="contact-line">微信 / 电话 / 详细日程：配对成功后可见</p>
      <div class="profile-actions">
        <button class="button primary" data-add-basket="${profile.id}">${inBasket ? "已在猎物篮" : "加入猎物篮"}</button>
        <button class="button ghost" data-peek="${profile.id}">让 Mochi 解释</button>
      </div>
    </article>
  `;
}

function bindProfileActions() {
  document.querySelectorAll("[data-add-basket]").forEach((button) => {
    button.addEventListener("click", () => {
      addToBasket(button.dataset.addBasket);
      button.textContent = "已在猎物篮";
    });
  });
  document.querySelectorAll("[data-peek]").forEach((button) => {
    button.addEventListener("click", () => {
      const profile = profiles.find((item) => item.id === button.dataset.peek);
      toast(profile.ai);
    });
  });
}

function renderHome() {
  const target = document.querySelector("[data-featured-profiles]");
  if (!target) return;
  target.innerHTML = profiles.slice(0, 6).map((item) => profileCard(item)).join("");
  bindProfileActions();
}

function renderMarket() {
  const target = document.querySelector("[data-market-profiles]");
  if (!target) return;
  const search = document.querySelector("[data-market-search]");
  const filter = document.querySelector("[data-market-filter]");
  const render = () => {
    const keyword = (search.value || "").trim().toLowerCase();
    const cat = filter.value;
    const visible = profiles.filter((profile) => {
      const text = `${profile.name} ${profile.role} ${profile.teach} ${profile.learn}`.toLowerCase();
      return (!keyword || text.includes(keyword)) && (cat === "all" || profile.cat === cat);
    });
    target.innerHTML = visible.map((item) => profileCard(item)).join("");
    bindProfileActions();
  };
  search.addEventListener("input", render);
  filter.addEventListener("change", render);
  render();
}

function renderPet() {
  const target = document.querySelector("[data-pet-picks]");
  if (!target) return;
  target.innerHTML = profiles.slice(0, 3).map((item) => profileCard(item)).join("");
  bindProfileActions();
  document.querySelector("[data-hunt]")?.addEventListener("click", () => {
    target.innerHTML = profiles.slice(0, 5).map((item) => profileCard(item)).join("");
    bindProfileActions();
    toast("Mochi 又叼回 2 个新猎物，已按配对概率重新排序。");
  });
}

function renderBasket() {
  const target = document.querySelector("[data-basket-list]");
  if (!target) return;
  const ids = readIds(basketKey);
  const items = profiles.filter((profile) => ids.includes(profile.id));
  if (!items.length) {
    target.innerHTML = `<div class="basket-empty">猎物篮还是空的。先去技能市场或让 Mochi 外出海淘。</div>`;
  } else {
    target.innerHTML = items.map((profile) => `
      <label class="basket-item">
        <input type="checkbox" value="${profile.id}" checked />
        <span><b>${profile.name}</b><br /><small>${profile.teach} ⇄ ${profile.learn}</small></span>
        <span class="lock-pill">${profile.score}%</span>
      </label>
    `).join("");
  }
  document.querySelector("[data-request-selected]")?.addEventListener("click", () => {
    const selected = [...document.querySelectorAll(".basket-item input:checked")].map((input) => input.value);
    writeIds(intentKey, selected);
    if (selected.length) {
      toast(`已向 ${selected.length} 位候选发起配对意向。对方回选后才会解锁交换。`);
    } else {
      toast("先勾选至少一个猎物，再发起配对。");
    }
  });
}

function bindStaticActions() {
  document.querySelector("[data-passport-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("技能护照已保存，Mochi 会用它重新外出寻猎。");
  });
  document.querySelector("[data-fake-upload]")?.addEventListener("click", () => toast("作品样例已加入护照，资料完整度 +8%。"));
  document.querySelectorAll("[data-room-action]").forEach((button) => {
    button.addEventListener("click", () => toast("这是已配对后才开放的交换动作：约课、签协议、提交作品。"));
  });
}

syncCount();
renderHome();
renderMarket();
renderPet();
renderBasket();
bindStaticActions();
