const exchanges = [
  { user: "林岚", avatar: "林", role: "品牌摄影师", teach: "摄影、剪辑", want: "动漫制作", mode: ["browse", "recommend", "hot"], type: "online", time: "weekend", distance: "3.2km", heat: 96, desc: "可教人像构图、自然光和短视频剪辑节奏，希望换到角色分镜和 5 秒循环动画。", cards: [
    { id: "photo-frame", name: "手机摄影构图", level: "专家", style: "理论 + 应用", unit: "1 次作品点评", scenes: "人像构图 / 自然光 / 修图方向" },
    { id: "video-edit", name: "短视频剪辑", level: "可教学", style: "应用", unit: "30 分钟课程", scenes: "节奏拆解 / 转场 / 成片优化" },
  ] },
  { user: "周亦", avatar: "周", role: "剪辑博主", teach: "短视频剪辑、脚本结构", want: "Python 数据分析", mode: ["browse", "recommend", "hot"], type: "online", time: "weekday", distance: "12km", heat: 92, desc: "每次 30 分钟，可按作品拆解剪辑问题，想换一个数据看板入门。", cards: [
    { id: "script-cut", name: "短视频剪辑", level: "专家", style: "应用", unit: "30 分钟课程", scenes: "开头钩子 / 镜头节奏 / 发布版成片" },
    { id: "script-structure", name: "脚本结构", level: "熟练", style: "理论", unit: "1 次脚本诊断", scenes: "选题 / 三段结构 / 标题" },
  ] },
  { user: "许诺", avatar: "许", role: "效率教练", teach: "Notion 学习系统", want: "手机摄影修图", mode: ["browse", "nearby"], type: "online", time: "weekday", distance: "1.8km", heat: 74, desc: "擅长搭建学习复盘系统，希望有人带我做一组可发布的照片。", cards: [
    { id: "notion-study", name: "Notion 学习系统", level: "可教学", style: "应用", unit: "1 个模板搭建", scenes: "目标拆解 / 复盘面板 / 周计划" },
  ] },
  { user: "陈默", avatar: "默", role: "后端工程师", teach: "Python 项目拆解", want: "吉他弹唱", mode: ["browse", "nearby"], type: "offline", time: "weekend", distance: "800m", heat: 81, desc: "可以讲接口设计和自动化脚本，想换吉他节奏和一首完整弹唱。", cards: [
    { id: "python-project", name: "Python 项目拆解", level: "专家", style: "理论 + 应用", unit: "1 个项目陪跑节点", scenes: "接口设计 / 自动化脚本 / 代码结构" },
  ] },
  { user: "高晴", avatar: "高", role: "英语教练", teach: "英语面试、口语表达", want: "PPT 视觉设计", mode: ["browse", "recommend"], type: "online", time: "weekday", distance: "8km", heat: 88, desc: "帮你练面试回答和表达流畅度，希望换到一套路演 PPT 设计建议。", cards: [
    { id: "english-interview", name: "英语面试", level: "专家", style: "应用", unit: "30 分钟陪练", scenes: "自我介绍 / 项目表达 / 追问应答" },
    { id: "english-speaking", name: "口语表达", level: "可教学", style: "理论 + 应用", unit: "1 次发音纠正", scenes: "流畅度 / 逻辑连接 / 发音" },
  ] },
  { user: "韩知", avatar: "韩", role: "产品设计师", teach: "Figma 原型、交互评审", want: "Python 自动化", mode: ["browse", "hot"], type: "online", time: "weekend", distance: "5.6km", heat: 90, desc: "能帮你把想法做成可演示原型，想换脚本自动化处理资料。", cards: [
    { id: "figma-prototype", name: "Figma 原型设计", level: "专家", style: "应用", unit: "1 个可演示原型", scenes: "流程图 / 页面状态 / 交互动效" },
    { id: "interaction-review", name: "交互评审", level: "专家", style: "理论", unit: "1 次方案评审", scenes: "任务路径 / 信息架构 / 可用性问题" },
  ] },
  { user: "陆声", avatar: "陆", role: "吉他老师", teach: "民谣吉他、弹唱节奏", want: "个人网站搭建", mode: ["browse", "nearby"], type: "offline", time: "weekend", distance: "2.4km", heat: 77, desc: "一对一纠正节奏和和弦，希望换一个个人主页。", cards: [
    { id: "guitar-rhythm", name: "民谣吉他", level: "可教学", style: "应用", unit: "30 分钟陪练", scenes: "和弦转换 / 扫弦节奏 / 完整弹唱" },
  ] },
  { user: "袁野", avatar: "袁", role: "咖啡玩家", teach: "咖啡拉花、手冲入门", want: "短视频拍摄", mode: ["browse"], type: "offline", time: "weekend", distance: "4.1km", heat: 69, desc: "适合兴趣入门，想把咖啡制作过程拍成短视频。", cards: [
    { id: "coffee-pour", name: "手冲咖啡", level: "熟练", style: "应用", unit: "1 次线下实操", scenes: "研磨 / 注水 / 风味记录" },
    { id: "latte-art", name: "咖啡拉花", level: "入门陪练", style: "应用", unit: "1 次线下实操", scenes: "打奶泡 / 心形 / 出杯" },
  ] },
];

const myTeachCards = [
  { id: "my-python", name: "Python 数据分析", level: "可教学", style: "应用", unit: "30 分钟课程", scenes: "清洗订单数据 / 做一页分析报告 / 讲清楚图表结论" },
  { id: "my-ppt", name: "PPT 结构化表达", level: "专家", style: "理论 + 应用", unit: "1 次作品点评", scenes: "路演框架 / 信息层级 / 一页改稿" },
  { id: "my-excel", name: "Excel 函数自动化", level: "熟练", style: "应用", unit: "1 个具体函数", scenes: "匹配查找 / 批量整理 / 自动汇总" },
];

const modeNames = {
  browse: "随便逛逛",
  recommend: "推荐",
  hot: "热门",
  nearby: "周围",
};

function toast(message) {
  const el = document.querySelector("[data-toast]");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2400);
}

function card(item) {
  return `
    <article class="exchange-card">
      <div class="exchange-card-head">
        <div class="user-line">
          <div class="avatar">${item.avatar}</div>
          <div><b>${item.user}</b><span>${item.role}</span></div>
        </div>
        <span class="tag">热度 ${item.heat}</span>
      </div>
      <div class="swap-boxes">
        <div class="swap-box"><small>我会</small><strong>${item.teach}</strong></div>
        <div class="swap-box want"><small>我想换</small><strong>${item.want}</strong></div>
      </div>
      <div class="exchange-meta">
        <span>${item.type === "online" ? "线上" : "线下"}</span>
        <span>${item.time === "weekend" ? "周末可约" : "工作日可约"}</span>
        <span>${item.distance}</span>
      </div>
      <p>${item.desc}</p>
      <div class="exchange-actions">
        <button class="primary-action" data-apply="${item.user}">申请交换</button>
        <button class="ghost-action" data-save="${item.user}">收藏</button>
      </div>
    </article>
  `;
}

function skillOption(card, group, checked = false) {
  return `
    <label class="select-skill-card">
      <input type="checkbox" name="${group}" value="${card.id}" ${checked ? "checked" : ""} />
      <span>
        <b>${card.name}</b>
        <small>${card.level} · ${card.style} · ${card.unit}</small>
        <em>${card.scenes}</em>
      </span>
    </label>
  `;
}

function ensureExchangeModal() {
  let modal = document.querySelector("[data-exchange-modal]");
  if (modal) return modal;
  modal = document.createElement("section");
  modal.className = "modal-backdrop";
  modal.dataset.exchangeModal = "";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="exchange-modal" role="dialog" aria-modal="true" aria-labelledby="exchange-modal-title">
      <div class="modal-head">
        <div>
          <p class="eyebrow">卡牌交换申请</p>
          <h2 id="exchange-modal-title">选择本次连线的卡牌</h2>
        </div>
        <button class="icon-button" type="button" data-close-modal aria-label="关闭">×</button>
      </div>
      <div class="modal-grid">
        <section>
          <h3>你愿意递出的卡牌</h3>
          <div class="choice-list" data-my-card-options></div>
        </section>
        <section>
          <h3 data-target-card-title>对方递出的卡牌</h3>
          <div class="choice-list" data-target-card-options></div>
        </section>
      </div>
      <div class="draft-units">
        <label>我的交换单位<select><option>30 分钟课程</option><option>1 次作品点评</option><option>1 个具体函数</option><option>1 个项目陪跑节点</option></select></label>
        <label>希望对方交付<select><option>30 分钟课程</option><option>1 次作品点评</option><option>1 个作品项目</option><option>1 个具体函数</option></select></label>
      </div>
      <label class="modal-note">补充说明<textarea placeholder="写清楚你想用这次交换完成什么，比如：我想做一个 5 秒循环动画，希望对方先讲分镜再看作业。"></textarea></label>
      <div class="modal-actions">
        <button class="ghost-action" type="button" data-close-modal>取消</button>
        <button class="primary-action" type="button" data-send-application>发送选牌申请</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => {
    modal.hidden = true;
  }));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.hidden = true;
  });
  modal.querySelector("[data-send-application]").addEventListener("click", () => {
    const target = modal.dataset.targetUser || "对方";
    modal.hidden = true;
    toast(`已向 ${target} 发送选牌申请。对方同意后进入沟通页确认交换草案。`);
  });
  return modal;
}

function openExchangeModal(item) {
  const modal = ensureExchangeModal();
  modal.dataset.targetUser = item.user;
  modal.querySelector("#exchange-modal-title").textContent = `向 ${item.user} 发起卡牌交换`;
  modal.querySelector("[data-my-card-options]").innerHTML = myTeachCards.map((card, index) => skillOption(card, "my-card", index === 0)).join("");
  modal.querySelector("[data-target-card-title]").textContent = `${item.user} 递出的卡牌`;
  modal.querySelector("[data-target-card-options]").innerHTML = item.cards.map((card, index) => skillOption(card, "target-card", index === 0)).join("");
  modal.hidden = false;
}

function renderMarket(mode = "browse") {
  const feed = document.querySelector("[data-exchange-feed]");
  if (!feed) return;
  const search = (document.querySelector("[data-search]")?.value || "").trim().toLowerCase();
  const type = document.querySelector("[data-filter-type]")?.value || "all";
  const time = document.querySelector("[data-filter-time]")?.value || "all";
  const list = exchanges.filter((item) => {
    const text = `${item.user} ${item.role} ${item.teach} ${item.want} ${item.desc}`.toLowerCase();
    return item.mode.includes(mode) && (!search || text.includes(search)) && (type === "all" || item.type === type) && (time === "all" || item.time === time);
  });
  document.querySelector("[data-feed-title]").textContent = modeNames[mode];
  document.querySelector("[data-result-count]").textContent = `${list.length} 条交换需求`;
  feed.innerHTML = list.map(card).join("");
  document.querySelectorAll("[data-apply]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = exchanges.find((exchange) => exchange.user === button.dataset.apply);
      if (item) openExchangeModal(item);
    });
  });
  document.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.save} 的交换需求已收藏。`));
  });
}

function initMarket() {
  const tabs = document.querySelectorAll("[data-mode]");
  if (!tabs.length) return;
  let current = "browse";
  document.querySelectorAll("[data-market-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const isFun = button.dataset.marketView === "fun";
      document.querySelectorAll("[data-market-view]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelector("[data-classic-market]").hidden = isFun;
      document.querySelector("[data-fun-market]").hidden = !isFun;
      if (isFun) renderFunCards();
    });
  });
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      current = tab.dataset.mode;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      renderMarket(current);
    });
  });
  document.querySelector("[data-search]")?.addEventListener("input", () => renderMarket(current));
  document.querySelector("[data-filter-type]")?.addEventListener("change", () => renderMarket(current));
  document.querySelector("[data-filter-time]")?.addEventListener("change", () => renderMarket(current));
  renderMarket(current);
  initSummonCanvas();
}

function initMyTabs() {
  const buttons = document.querySelectorAll("[data-my-tab]");
  if (!buttons.length) return;
  const panels = document.querySelectorAll("[data-tab-panel]");
  function activate(name) {
    buttons.forEach((button) => button.classList.toggle("active", button.dataset.myTab === name));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.tabPanel === name));
  }
  buttons.forEach((button) => button.addEventListener("click", () => activate(button.dataset.myTab)));
  if (location.hash === "#publish") activate("deck");
  document.querySelector("[data-publish-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("新的“我会”技能卡已加入牌组，可用于发起交换。");
  });
  document.querySelector("[data-want-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("新的“我想学”技能卡已加入牌组，推荐会按这张卡更新。");
  });
  initMyModals();
}

function openSimpleModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) modal.hidden = false;
}

function closeSimpleModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) modal.hidden = true;
}

function initMyModals() {
  document.querySelector("[data-open-card-modal]")?.addEventListener("click", () => openSimpleModal("[data-card-modal]"));
  document.querySelector("[data-close-card-modal]")?.addEventListener("click", () => closeSimpleModal("[data-card-modal]"));
  document.querySelector("[data-card-modal]")?.addEventListener("click", (event) => {
    if (event.target.matches("[data-card-modal]")) closeSimpleModal("[data-card-modal]");
  });
  document.querySelector("[data-card-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    closeSimpleModal("[data-card-modal]");
    toast("新的技能牌已加入我的牌组。");
  });
  document.querySelector("[data-open-request-modal]")?.addEventListener("click", () => openSimpleModal("[data-request-modal]"));
  document.querySelector("[data-close-request-modal]")?.addEventListener("click", () => closeSimpleModal("[data-request-modal]"));
  document.querySelector("[data-request-modal]")?.addEventListener("click", (event) => {
    if (event.target.matches("[data-request-modal]")) closeSimpleModal("[data-request-modal]");
  });
  document.querySelector("[data-request-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    closeSimpleModal("[data-request-modal]");
    toast("新的交换需求已发布，正在等待对方选牌。");
  });
}

const funCardPool = [
  { art: "art-anime", title: "动漫制作", meta: "5 秒循环动画", score: 98, rarity: "rarity-legend" },
  { art: "art-photo", title: "手机摄影构图", meta: "人像与自然光", score: 93, rarity: "rarity-rare" },
  { art: "art-video", title: "短视频剪辑", meta: "开头节奏优化", score: 91, rarity: "rarity-epic" },
  { art: "art-python", title: "Python 数据分析", meta: "一页报告", score: 89, rarity: "rarity-legend" },
  { art: "art-ppt", title: "PPT 结构表达", meta: "路演叙事", score: 87, rarity: "rarity-rare" },
  { art: "art-excel", title: "Excel 自动化", meta: "具体函数", score: 84, rarity: "rarity-rare" },
  { art: "art-video", title: "脚本结构", meta: "选题拆解", score: 82, rarity: "rarity-epic" },
  { art: "art-photo", title: "作品点评", meta: "拍摄复盘", score: 80, rarity: "rarity-rare" },
  { art: "art-anime", title: "分镜设计", meta: "关键帧点评", score: 79, rarity: "rarity-legend" },
  { art: "art-python", title: "数据看板", meta: "入门搭建", score: 77, rarity: "rarity-epic" },
  { art: "art-ppt", title: "视觉排版", meta: "一页改稿", score: 74, rarity: "rarity-rare" },
  { art: "art-excel", title: "批量整理", meta: "表格效率", score: 72, rarity: "rarity-rare" },
];

function miniGameCard(card) {
  return `
    <article class="game-card mini ${card.art} ${card.rarity}">
      <div class="game-card-top"><b>${Math.max(3, Math.round(card.score / 14))}</b><span>${card.score}%</span></div>
      <div class="game-card-art"></div>
      <div class="game-card-body"><h3>${card.title}</h3><p>${card.meta}</p></div>
      <div class="game-card-foot"><span>推荐</span><strong>申请</strong></div>
    </article>
  `;
}

function renderFunCards(offset = 0) {
  const root = document.querySelector("[data-fun-results]");
  if (!root) return;
  const cards = Array.from({ length: 10 }, (_, index) => funCardPool[(index + offset) % funCardPool.length]);
  root.querySelector(".top-row").innerHTML = cards.slice(0, 5).map(miniGameCard).join("");
  root.querySelector(".bottom-row").innerHTML = cards.slice(5).map(miniGameCard).join("");
}

function initSummonCanvas() {
  const canvas = document.querySelector("[data-summon-canvas]");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let offset = 0;
  const rectPoint = (event) => {
    const rect = canvas.getBoundingClientRect();
    const pointer = event.touches?.[0] || event;
    return { x: (pointer.clientX - rect.left) * (canvas.width / rect.width), y: (pointer.clientY - rect.top) * (canvas.height / rect.height) };
  };
  function drawBase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(245, 197, 66, 0.65)";
    ctx.beginPath();
    ctx.arc(210, 210, 160, 0, Math.PI * 2);
    ctx.stroke();
  }
  drawBase();
  canvas.addEventListener("pointerdown", (event) => {
    drawing = true;
    const point = rectPoint(event);
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawing) return;
    const point = rectPoint(event);
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(53, 199, 166, 0.82)";
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  });
  window.addEventListener("pointerup", () => {
    drawing = false;
  });
  document.querySelector("[data-draw-cards]")?.addEventListener("click", () => renderFunCards(offset));
  document.querySelector("[data-shuffle-cards]")?.addEventListener("click", () => {
    offset = (offset + 3) % funCardPool.length;
    renderFunCards(offset);
    toast("已换一组推荐卡。");
  });
  document.querySelector("[data-reset-draw]")?.addEventListener("click", () => {
    offset = 0;
    drawBase();
    renderFunCards(offset);
    toast("圆台已重置，可以重新抽卡。");
  });
}

function initMessages() {
  const cats = document.querySelectorAll("[data-message-cat]");
  cats.forEach((cat) => {
    cat.addEventListener("click", () => {
      cats.forEach((item) => item.classList.toggle("active", item === cat));
      const title = cat.textContent.trim().replace(/\d+$/, "");
      document.querySelector("[data-chat-title]").textContent = title;
      toast(`已切换到${title}`);
    });
  });
  document.querySelectorAll("[data-chat]").forEach((chat) => {
    chat.addEventListener("click", () => {
      document.querySelectorAll("[data-chat]").forEach((item) => item.classList.toggle("active", item === chat));
      const name = chat.querySelector("b").textContent;
      document.querySelector("[data-thread-name]").textContent = name;
      document.querySelector("[data-thread-subtitle]").textContent = name === "林岚" ? "摄影、剪辑 ⇄ 动漫制作" : "交换申请沟通中";
      document.querySelector("[data-draft-form]").hidden = true;
      document.querySelector("[data-detail-default]").hidden = false;
    });
  });
  document.querySelector("[data-open-draft]")?.addEventListener("click", () => {
    document.querySelector("[data-detail-default]").hidden = true;
    document.querySelector("[data-draft-form]").hidden = false;
  });
  document.querySelector("[data-draft-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("交换草案已发送给对方确认。");
  });
}

initMarket();
initMyTabs();
initMessages();
