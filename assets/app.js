const exchanges = [
  { user: "林岚", avatar: "林", role: "品牌摄影师", teach: "摄影、剪辑", want: "动漫制作", wantScenes: "角色分镜 / 关键帧 / 5 秒循环动画", mode: ["browse", "recommend", "hot"], type: "online", time: "weekend", distance: "3.2km", heat: 96, desc: "可教人像构图、自然光和短视频剪辑节奏，希望换到角色分镜和 5 秒循环动画。", cards: [
    { id: "photo-frame", name: "手机摄影构图", level: "专家", style: "理论 + 应用", unit: "1 次作品点评", scenes: "人像构图 / 自然光 / 修图方向" },
    { id: "video-edit", name: "短视频剪辑", level: "可教学", style: "应用", unit: "30 分钟课程", scenes: "节奏拆解 / 转场 / 成片优化" },
  ] },
  { user: "周亦", avatar: "周", role: "剪辑博主", teach: "短视频剪辑、脚本结构", want: "Python 数据分析", wantScenes: "订单清洗 / 数据看板 / 入门报告", mode: ["browse", "recommend", "hot"], type: "online", time: "weekday", distance: "12km", heat: 92, desc: "每次 30 分钟，可按作品拆解剪辑问题，想换一个数据看板入门。", cards: [
    { id: "script-cut", name: "短视频剪辑", level: "专家", style: "应用", unit: "30 分钟课程", scenes: "开头钩子 / 镜头节奏 / 发布版成片" },
    { id: "script-structure", name: "脚本结构", level: "熟练", style: "理论", unit: "1 次脚本诊断", scenes: "选题 / 三段结构 / 标题" },
  ] },
  { user: "许诺", avatar: "许", role: "效率教练", teach: "Notion 学习系统", want: "手机摄影修图", wantScenes: "人像调色 / 构图复盘 / 发布前精修", mode: ["browse", "nearby"], type: "online", time: "weekday", distance: "1.8km", heat: 74, desc: "擅长搭建学习复盘系统，希望有人带我做一组可发布的照片。", cards: [
    { id: "notion-study", name: "Notion 学习系统", level: "可教学", style: "应用", unit: "1 个模板搭建", scenes: "目标拆解 / 复盘面板 / 周计划" },
  ] },
  { user: "陈默", avatar: "默", role: "后端工程师", teach: "Python 项目拆解", want: "吉他弹唱", wantScenes: "和弦转换 / 扫弦节奏 / 完整弹唱", mode: ["browse", "nearby"], type: "offline", time: "weekend", distance: "800m", heat: 81, desc: "可以讲接口设计和自动化脚本，想换吉他节奏和一首完整弹唱。", cards: [
    { id: "python-project", name: "Python 项目拆解", level: "专家", style: "理论 + 应用", unit: "1 个项目陪跑节点", scenes: "接口设计 / 自动化脚本 / 代码结构" },
  ] },
  { user: "高晴", avatar: "高", role: "英语教练", teach: "英语面试、口语表达", want: "PPT 视觉设计", wantScenes: "路演封面 / 信息层级 / 一页改稿", mode: ["browse", "recommend"], type: "online", time: "weekday", distance: "8km", heat: 88, desc: "帮你练面试回答和表达流畅度，希望换到一套路演 PPT 设计建议。", cards: [
    { id: "english-interview", name: "英语面试", level: "专家", style: "应用", unit: "30 分钟陪练", scenes: "自我介绍 / 项目表达 / 追问应答" },
    { id: "english-speaking", name: "口语表达", level: "可教学", style: "理论 + 应用", unit: "1 次发音纠正", scenes: "流畅度 / 逻辑连接 / 发音" },
  ] },
  { user: "韩知", avatar: "韩", role: "产品设计师", teach: "Figma 原型、交互评审", want: "Python 自动化", wantScenes: "文件整理 / 批量处理 / 自动化脚本", mode: ["browse", "hot"], type: "online", time: "weekend", distance: "5.6km", heat: 90, desc: "能帮你把想法做成可演示原型，想换脚本自动化处理资料。", cards: [
    { id: "figma-prototype", name: "Figma 原型设计", level: "专家", style: "应用", unit: "1 个可演示原型", scenes: "流程图 / 页面状态 / 交互动效" },
    { id: "interaction-review", name: "交互评审", level: "专家", style: "理论", unit: "1 次方案评审", scenes: "任务路径 / 信息架构 / 可用性问题" },
  ] },
  { user: "陆声", avatar: "陆", role: "吉他老师", teach: "民谣吉他、弹唱节奏", want: "个人网站搭建", wantScenes: "个人主页 / 作品展示 / 响应式上线", mode: ["browse", "nearby"], type: "offline", time: "weekend", distance: "2.4km", heat: 77, desc: "一对一纠正节奏和和弦，希望换一个个人主页。", cards: [
    { id: "guitar-rhythm", name: "民谣吉他", level: "可教学", style: "应用", unit: "30 分钟陪练", scenes: "和弦转换 / 扫弦节奏 / 完整弹唱" },
  ] },
  { user: "袁野", avatar: "袁", role: "咖啡玩家", teach: "咖啡拉花、手冲入门", want: "短视频拍摄", wantScenes: "制作过程 / 镜头设计 / 成片节奏", mode: ["browse"], type: "offline", time: "weekend", distance: "4.1km", heat: 69, desc: "适合兴趣入门，想把咖啡制作过程拍成短视频。", cards: [
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

const myOpenRequests = {
  "req-anime": { label: "Python 数据分析 → 动漫制作", offer: ["Python", "数据分析"], want: ["动漫", "分镜", "动画"] },
  "req-video": { label: "PPT 结构化表达 → 短视频剪辑", offer: ["PPT", "结构化表达"], want: ["短视频", "剪辑", "脚本"] },
  "req-coffee": { label: "待确认递出卡牌 → 咖啡拉花", offer: [], want: ["咖啡", "手冲", "拉花"] },
};

function userStats(item, label = "热度") {
  const heat = item.heat ?? item.score ?? 90;
  const done = Math.max(7, Math.round(heat / 4));
  const rating = (4.4 + Math.min(heat, 100) / 200).toFixed(1);
  const published = item.cards?.length || Math.max(3, Math.round(heat / 18));
  return `
    <div class="user-stat-pack" aria-label="${item.user || "用户"}信用概览">
      <span class="tag">${label} ${heat}</span>
      <span><b>${heat}</b>信用分</span>
      <span><b>${done}</b>完成交换</span>
      <span><b>${rating}</b>平均评分</span>
      <span><b>${published}</b>${label === "匹配" ? "作品证明" : "发布中"}</span>
    </div>
  `;
}

function toast(message) {
  const el = document.querySelector("[data-toast]");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2400);
}

const skillArtMap = {
  "Python": "art-python",
  "数据": "art-python",
  "看板": "art-python",
  "PPT": "art-ppt",
  "表达": "art-ppt",
  "排版": "art-ppt",
  "Excel": "art-excel",
  "函数": "art-excel",
  "自动化": "art-excel",
  "摄影": "art-photo",
  "修图": "art-photo",
  "拍摄": "art-photo",
  "短视频": "art-video",
  "剪辑": "art-video",
  "脚本": "art-video",
  "动漫": "art-anime",
  "分镜": "art-anime",
  "吉他": "art-guitar",
  "弹唱": "art-guitar",
  "民谣": "art-guitar",
  "咖啡": "art-coffee",
  "手冲": "art-coffee",
  "拉花": "art-coffee",
  "网站": "art-web",
  "主页": "art-web",
  "Figma": "art-design",
  "原型": "art-design",
  "交互": "art-design",
  "英语": "art-speech",
  "口语": "art-speech",
  "面试": "art-speech",
  "Notion": "art-notion",
  "学习系统": "art-notion",
};

function artForSkill(name = "") {
  const hit = Object.entries(skillArtMap).find(([key]) => name.includes(key));
  return hit ? hit[1] : "art-python";
}

function rankForSkill(name = "", kind = "offer") {
  if (kind === "want") return "学徒";
  if (name.includes("Python") || name.includes("摄影") || name.includes("剪辑") || name.includes("Figma")) return "大师";
  return "精英";
}

function typeForSkill(name = "") {
  if (name.includes("PPT") || name.includes("脚本") || name.includes("英语")) return "理论+应用";
  return "应用";
}

function metaForSkill(name = "", fallback = "技能交换卡") {
  const metas = [
    ["Python", "清洗数据 / 可视化图表 / 一页分析报告"],
    ["数据", "清洗数据 / 可视化图表 / 一页分析报告"],
    ["PPT", "信息层级 / 路演结构 / 一页改稿"],
    ["Excel", "函数匹配 / 批量整理 / 自动汇总"],
    ["摄影", "人像构图 / 自然光 / 修图方向"],
    ["修图", "色调统一 / 人像精修 / 作品复盘"],
    ["短视频", "选题脚本 / 镜头节奏 / 成片发布"],
    ["剪辑", "开头钩子 / 转场节奏 / 成片优化"],
    ["动漫", "角色分镜 / 关键帧 / 5 秒循环动画"],
    ["分镜", "镜头设计 / 关键帧 / 节奏点评"],
    ["吉他", "和弦转换 / 扫弦节奏 / 完整弹唱"],
    ["民谣", "和弦转换 / 扫弦节奏 / 完整弹唱"],
    ["咖啡", "研磨参数 / 注水节奏 / 风味记录"],
    ["手冲", "研磨参数 / 注水节奏 / 风味记录"],
    ["拉花", "奶泡打发 / 心形拉花 / 出杯稳定"],
    ["网站", "主页结构 / 响应式布局 / 上线检查"],
    ["主页", "主页结构 / 响应式布局 / 上线检查"],
    ["Figma", "流程图 / 页面状态 / 交互动效"],
    ["原型", "流程图 / 页面状态 / 交互动效"],
    ["英语", "自我介绍 / 项目表达 / 追问应答"],
    ["口语", "发音纠正 / 流畅表达 / 逻辑连接"],
    ["面试", "自我介绍 / 项目表达 / 追问应答"],
    ["Notion", "目标拆解 / 复盘面板 / 周计划"],
    ["学习系统", "目标拆解 / 复盘面板 / 周计划"],
  ];
  const hit = metas.find(([key]) => name.includes(key));
  return hit ? hit[1] : fallback;
}

function marketSkillCard(label, title, meta, kind = "offer") {
  const rarity = kind === "want" ? "rarity-apprentice want-kind" : "rarity-elite";
  return `
    <article class="game-card market-skill-card ${artForSkill(title)} ${rarity}">
      <div class="game-card-top"><b>${rankForSkill(title, kind)}</b><span>${typeForSkill(title)}</span></div>
      <div class="game-card-art"></div>
      <div class="game-card-body"><h3>${title}</h3><p>${meta}</p></div>
    </article>
  `;
}

function card(item) {
  const offer = item.cards?.[0];
  return `
    <article class="exchange-card compact-exchange-card">
      <div class="exchange-card-head">
        <div class="user-line">
          <div class="avatar">${item.avatar}</div>
          <div><b>${item.user}</b><span>${item.role}</span></div>
        </div>
        ${userStats(item, "热度")}
      </div>
      <div class="market-card-pair">
        <section><strong>我会</strong>${marketSkillCard("", offer?.name || item.teach, offer?.scenes || item.teach, "offer")}</section>
        <section><strong>我想学</strong>${marketSkillCard("", item.want, item.wantScenes || metaForSkill(item.want, item.desc), "want")}</section>
      </div>
      <div class="exchange-meta">
        <span>${item.type === "online" ? "线上" : "线下"}</span>
        <span>${item.time === "weekend" ? "周末可约" : "工作日可约"}</span>
        <span>${item.distance}</span>
      </div>
      <div class="exchange-actions">
        <button class="primary-action" data-apply="${item.user}">申请交换</button>
        <button class="ghost-action" data-save="${item.user}">收藏</button>
      </div>
    </article>
  `;
}

function visualSkillOption(card, group, checked = false) {
  const title = card.name || card.title || "技能卡";
  return `
    <label class="visual-skill-option">
      <input type="checkbox" name="${group}" value="${card.id || title}" ${checked ? "checked" : ""} />
      <article class="game-card modal-skill-card ${artForSkill(title)} rarity-elite">
        <div class="game-card-top"><b>${rankForSkill(title)}</b><span>${card.style || typeForSkill(title)}</span></div>
        <div class="game-card-art"></div>
        <div class="game-card-body"><h3>${title}</h3><p>${card.scenes || card.meta || "技能交换卡"}</p></div>
      </article>
    </label>
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
      <div class="draft-units split-units">
        <label>我的交付数量<input value="30min" /></label>
        <label>我的交付方式<select><option>课时</option><option>作业点评</option><option>其他交付</option></select></label>
        <label>希望对方数量<input value="1次" /></label>
        <label>希望对方方式<select><option>课时</option><option>作业点评</option><option>其他交付</option></select></label>
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
  modal.querySelector("[data-my-card-options]").innerHTML = myTeachCards.map((card, index) => visualSkillOption(card, "my-card", index === 0)).join("");
  modal.querySelector("[data-target-card-title]").textContent = `${item.user} 递出的卡牌`;
  modal.querySelector("[data-target-card-options]").innerHTML = item.cards.map((card, index) => visualSkillOption(card, "target-card", index === 0)).join("");
  modal.hidden = false;
}

function renderMarket(mode = "browse") {
  const feed = document.querySelector("[data-exchange-feed]");
  if (!feed) return;
  const search = (document.querySelector("[data-search]")?.value || "").trim().toLowerCase();
  const type = document.querySelector("[data-filter-type]")?.value || "all";
  const time = document.querySelector("[data-filter-time]")?.value || "all";
  const request = document.querySelector("[data-filter-request]")?.value || "all";
  const list = exchanges.filter((item) => {
    const text = `${item.user} ${item.role} ${item.teach} ${item.want} ${item.desc} ${item.cards?.map((card) => `${card.name} ${card.scenes}`).join(" ")}`.toLowerCase();
    const requestRule = myOpenRequests[request];
    const matchesRequest = !requestRule ||
      requestRule.want.some((word) => text.includes(word.toLowerCase())) ||
      requestRule.offer.some((word) => `${item.want} ${item.desc}`.toLowerCase().includes(word.toLowerCase()));
    return item.mode.includes(mode) && (!search || text.includes(search)) && (type === "all" || item.type === type) && (time === "all" || item.time === time) && matchesRequest;
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
      if (isFun) {
        initFunChat();
        setFunStage("chat");
      }
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
  document.querySelector("[data-filter-request]")?.addEventListener("change", () => renderMarket(current));
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
  initWorkRows();
  initDeckDeletion();
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
  document.querySelector("[data-evaluate-card]")?.addEventListener("click", evaluateCardForge);
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
  { art: "art-anime", title: "动漫制作", meta: "5 秒循环动画", score: 98, rarity: "rarity-legend", rank: "传说", type: "应用", user: "林岚" },
  { art: "art-photo", title: "手机摄影构图", meta: "人像与自然光", score: 93, rarity: "rarity-master", rank: "大师", type: "理论+应用", user: "许诺" },
  { art: "art-video", title: "短视频剪辑", meta: "开头节奏优化", score: 91, rarity: "rarity-master", rank: "大师", type: "应用", user: "周亦" },
  { art: "art-python", title: "Python 数据分析", meta: "一页报告", score: 89, rarity: "rarity-elite", rank: "精英", type: "应用", user: "陈默" },
  { art: "art-ppt", title: "PPT 结构化表达", meta: "路演叙事", score: 87, rarity: "rarity-elite", rank: "精英", type: "理论", user: "高晴" },
  { art: "art-excel", title: "Excel 自动化", meta: "具体函数", score: 84, rarity: "rarity-elite", rank: "精英", type: "应用", user: "韩知" },
  { art: "art-guitar", title: "民谣吉他", meta: "和弦转换", score: 82, rarity: "rarity-elite", rank: "精英", type: "应用", user: "陆声" },
  { art: "art-coffee", title: "咖啡拉花", meta: "心形出杯", score: 80, rarity: "rarity-apprentice", rank: "学徒", type: "应用", user: "袁野" },
  { art: "art-web", title: "个人网站搭建", meta: "主页上线", score: 79, rarity: "rarity-master", rank: "大师", type: "理论+应用", user: "韩知" },
  { art: "art-speech", title: "英语口语表达", meta: "面试陪练", score: 77, rarity: "rarity-elite", rank: "精英", type: "应用", user: "高晴" },
  { art: "art-design", title: "Figma 原型设计", meta: "交互动效", score: 74, rarity: "rarity-apprentice", rank: "学徒", type: "应用", user: "韩知" },
  { art: "art-notion", title: "Notion 学习系统", meta: "复盘模板", score: 72, rarity: "rarity-apprentice", rank: "学徒", type: "应用", user: "许诺" },
];

function miniGameCard(card) {
  return `
    <article class="game-card mini ${card.art} ${card.rarity}">
      <div class="game-card-top"><b>${card.rank}</b><span>${card.type}</span></div>
      <div class="game-card-art"></div>
      <div class="game-card-body"><h3>${card.title}</h3><p>${card.meta}</p></div>
    </article>
  `;
}

function funPairCard(card, index) {
  const wanted = myTeachCards[index % myTeachCards.length];
  const profile = exchanges.find((item) => item.user === card.user) || card;
  return `
    <article class="fun-pair-card" data-profile="${card.user}" data-card-title="${card.title}" data-card-meta="${card.meta}">
      <div class="fun-pair-head"><b>${card.user}</b>${userStats({ ...profile, heat: card.score, score: card.score }, "匹配")}</div>
      <div class="fun-pair-body">
        <section><strong>对方提供</strong>${miniGameCard(card)}</section>
        <section><strong>对方想学</strong>${marketSkillCard("", wanted.name, wanted.scenes, "want")}</section>
      </div>
      <div class="fun-pair-actions">
        <button class="cart-add-button" type="button" data-add-cart="${card.user}">加入收藏</button>
        <button class="ghost-action" type="button" data-view-detail="${card.user}" data-skill="${card.title}">查看详情</button>
      </div>
    </article>
  `;
}
function renderFunCards(offset = 0) {
  const root = document.querySelector("[data-fun-results]");
  if (!root) return;
  const cards = Array.from({ length: 9 }, (_, index) => funCardPool[(index + offset) % funCardPool.length]);
  root.querySelector(".top-row").innerHTML = cards.map(funPairCard).join("");
  root.querySelector(".bottom-row").innerHTML = "";
  root.hidden = false;
  funUnlockedStage = "result";
  setFunStage("result");
  document.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(button.closest("[data-profile]"));
    });
  });
  document.querySelectorAll("[data-view-detail]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openSkillDetail(button.dataset.viewDetail, button.dataset.skill);
    });
  });
  document.querySelectorAll("[data-profile]").forEach((card) => {
    card.addEventListener("mouseenter", () => showQuickApply(card.dataset.cardTitle));
    card.addEventListener("focus", () => showQuickApply(card.dataset.cardTitle));
  });
  showCartButton();
  showQuickApply(cards[0].title);
}

const funSteps = [
  { q: "你这次最想换到哪类技能？", options: ["动漫制作", "手机摄影构图", "短视频剪辑", "英语口语表达"] },
  { q: "你愿意递出哪张自己的卡？", options: ["Python 数据分析", "PPT 结构化表达", "Excel 函数自动化"] },
  { q: "你更偏好的交换方式是？", options: ["线上", "同城线下", "都可以"] },
  { q: "你这次适合什么时间？", options: ["周末下午", "工作日晚上", "灵活约"] },
  { q: "想要的难度大概是？", options: ["入门陪跑", "进阶突破", "作品级交付"] },
];

let funStepIndex = 0;
let funChatStarted = false;
let funUnlockedStage = "chat";

function addFunMessage(text, who = "assistant") {
  const chat = document.querySelector("[data-fun-chat]");
  if (!chat) return;
  const message = document.createElement("div");
  message.className = `chat-message ${who}`;
  message.textContent = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function renderFunQuestion() {
  const choices = document.querySelector("[data-fun-choices]");
  if (!choices) return;
  const step = funSteps[funStepIndex];
  if (!step) {
    addFunMessage("收到。现在请在圆台上画下你这次交换的心情，然后开始抽卡。");
    choices.innerHTML = "";
    funUnlockedStage = "draw";
    setFunStage("draw");
    document.querySelector("[data-fun-results]").hidden = true;
    return;
  }
  addFunMessage(step.q);
  choices.innerHTML = step.options.map((option) => `<button type="button" data-fun-answer="${option}">${option}</button>`).join("");
  choices.querySelectorAll("[data-fun-answer]").forEach((button) => {
    button.addEventListener("click", () => acceptFunAnswer(button.dataset.funAnswer));
  });
}

function acceptFunAnswer(answer) {
  if (!answer.trim()) return;
  addFunMessage(answer, "user");
  funStepIndex += 1;
  renderFunQuestion();
}

function initFunChat() {
  if (!funChatStarted) {
    funChatStarted = true;
    renderFunQuestion();
    document.querySelectorAll("[data-axis-step]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.axisStep;
        if (target === "draw" && funUnlockedStage === "chat") return toast("先回答完小精灵的问题。");
        if (target === "result" && funUnlockedStage !== "result") return toast("先完成抽卡，才能查看结果。");
        setFunStage(target);
      });
    });
  }
}

function setFunStage(stage) {
  const chat = document.querySelector("[data-chat-step]");
  const draw = document.querySelector("[data-draw-step]");
  const result = document.querySelector("[data-result-step]");
  if (!chat || !draw || !result) return;
  chat.hidden = stage !== "chat";
  draw.hidden = stage !== "draw";
  result.hidden = stage !== "result";
  const order = ["chat", "draw", "result"];
  document.querySelectorAll("[data-axis-step]").forEach((button) => {
    button.classList.toggle("active", button.dataset.axisStep === stage);
    button.classList.toggle("done", order.indexOf(button.dataset.axisStep) < order.indexOf(funUnlockedStage));
  });
}

function showQuickApply(title) {
  const quick = document.querySelector("[data-quick-apply]");
  if (!quick) return;
  quick.hidden = false;
  quick.querySelector("[data-quick-title]").textContent = title;
}

function evaluateCardForge() {
  const years = Number(document.querySelector("[data-years-input]")?.value || 0);
  const works = Number(document.querySelector("[data-work-input]")?.value || 0);
  const level = document.querySelector("[data-level-input]")?.value || "可教学";
  const type = document.querySelector("[data-card-type-input]")?.value || "应用";
  const skill = document.querySelector("[data-skill-input]")?.value || "新技能";
  const levelBonus = { "专家": 34, "可教学": 28, "熟练": 18, "入门": 8, "零基础": 2 }[level] || 10;
  const score = years * 26 + works * 18 + levelBonus;
  let rank = "学徒";
  let rarity = "rarity-apprentice";
  if (score >= 120) { rank = "传说"; rarity = "rarity-legend"; }
  else if (score >= 82) { rank = "大师"; rarity = "rarity-master"; }
  else if (score >= 42) { rank = "精英"; rarity = "rarity-elite"; }
  const card = document.querySelector("[data-forge-preview] .game-card");
  card.classList.remove("blank-card", "rarity-apprentice", "rarity-elite", "rarity-master", "rarity-legend");
  card.classList.add(rarity);
  document.querySelector("[data-forge-rank]").textContent = rank;
  document.querySelector("[data-forge-type]").textContent = type;
  document.querySelector("[data-forge-title]").textContent = skill;
  document.querySelector("[data-forge-copy]").textContent = `临时评分 ${Math.round(score)}：综合年限、熟练度和作品数后，卡牌完成锻造。`;
  document.querySelector("[data-forge-years]").textContent = `${years} 年`;
  document.querySelector("[data-forge-proof]").textContent = `${works} 作品`;
  document.querySelector("[data-forge-status]").textContent = "已锻造";
  document.querySelector("[data-forge-log]").innerHTML = `<b>AI 评估过程</b><span>读取年限 ${years} 年、熟练度 ${level}、作品 ${works} 个。</span><span>评估技能稳定度、可复现程度和学习门槛。</span><span>锻造结果：${rank} · ${type}。</span>`;
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
  document.querySelector("[data-fun-custom-send]")?.addEventListener("click", () => {
    const input = document.querySelector("[data-fun-custom]");
    acceptFunAnswer(input.value);
    input.value = "";
  });
  document.querySelector("[data-fun-custom]")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("[data-fun-custom-send]")?.click();
    }
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
    document.querySelector("[data-fun-results]").hidden = true;
    document.querySelector("[data-quick-apply]").hidden = true;
    funUnlockedStage = "draw";
    setFunStage("draw");
    toast("圆台已重置，画几笔后可以重新抽卡。");
  });
}


const exchangeCart = [];

function openSkillDetail(user = "", skill = "") {
  const params = new URLSearchParams();
  if (user) params.set("user", user);
  if (skill) params.set("skill", skill);
  location.href = `skill-detail.html?${params.toString()}`;
}

function ensureCartModal() {
  let modal = document.querySelector("[data-cart-modal]");
  if (modal) return modal;
  modal = document.createElement("section");
  modal.className = "modal-backdrop";
  modal.dataset.cartModal = "";
  modal.hidden = true;
  modal.innerHTML = `<div class="exchange-modal cart-modal"><div class="modal-head"><div><p class="eyebrow">Favorites</p><h2>我的收藏</h2></div><button class="icon-button" type="button" data-close-cart>×</button></div><div class="cart-list" data-cart-list></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector("[data-close-cart]").addEventListener("click", () => modal.hidden = true);
  modal.addEventListener("click", (event) => { if (event.target === modal) modal.hidden = true; });
  return modal;
}

function showCartButton() {
  let button = document.querySelector("[data-open-cart]");
  if (!button) {
    button = document.createElement("button");
    button.className = "floating-cart";
    button.type = "button";
    button.dataset.openCart = "";
    button.innerHTML = `★<span data-cart-count>0</span>`;
    document.body.appendChild(button);
    button.addEventListener("click", () => {
      const modal = ensureCartModal();
      modal.querySelector("[data-cart-list]").innerHTML = exchangeCart.map((item) => `
        <article class="cart-request-row">
          <div class="cart-user"><b>${item.user}</b><span>${item.role}</span><em>信用分 ${item.credit} · 完成交换 ${item.done}</em></div>
          <div class="market-card-pair">
            <section><strong>对方提供</strong>${marketSkillCard("", item.title, item.meta, "offer")}</section>
            <section><strong>对方想学</strong>${marketSkillCard("", item.wantTitle, item.wantMeta, "want")}</section>
          </div>
          <button class="ghost-action cart-detail-button" type="button" data-cart-detail="${item.user}" data-cart-skill="${item.title}">查看详情</button>
        </article>`).join("") || `<p class="empty-cart">还没有加入收藏。</p>`;
      modal.querySelectorAll("[data-cart-detail]").forEach((detailButton) => {
        detailButton.addEventListener("click", () => openSkillDetail(detailButton.dataset.cartDetail, detailButton.dataset.cartSkill));
      });
      modal.hidden = false;
    });
  }
  button.hidden = false;
  button.querySelector("[data-cart-count]").textContent = exchangeCart.length;
}

function addToCart(card) {
  if (!card) return;
  const user = card.dataset.profile;
  const profile = exchanges.find((item) => item.user === user);
  exchangeCart.push({
    user,
    role: profile?.role || "技能交换用户",
    credit: profile?.heat || 90,
    done: profile ? Math.max(8, Math.round(profile.heat / 4)) : 12,
    title: card.dataset.cardTitle,
    meta: card.dataset.cardMeta || "技能交换",
    wantTitle: "Python 数据分析",
    wantMeta: "清洗订单数据 / 一页报告",
  });
  showCartButton();
  toast(`${card.dataset.profile} 的交换申请已加入收藏。`);
}

function initWorkRows() {
  document.querySelectorAll(".work-row").forEach((row) => {
    const tabs = row.querySelectorAll(".work-tabs button");
    const preview = row.querySelector(".work-preview");
    tabs.forEach((tab) => tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      if (preview) preview.dataset.mode = tab.textContent.trim();
      toast(`已切换到${tab.textContent.trim()}。`);
    }));
    row.querySelector(".work-row-head button")?.addEventListener("click", () => openSkillDetail("陈同学", row.querySelector("strong")?.textContent || "作品"));
  });
}

function initDeckDeletion() {
  let targetCard = null;
  const modal = document.createElement("section");
  modal.className = "modal-backdrop";
  modal.dataset.deleteModal = "";
  modal.hidden = true;
  modal.innerHTML = `<div class="exchange-modal confirm-modal"><div class="modal-head"><div><p class="eyebrow">Delete Card</p><h2>确认删除这张卡牌？</h2></div></div><p>删除后该卡不会再出现在你的牌组示例中。</p><div class="modal-actions"><button class="ghost-action" type="button" data-cancel-delete>取消</button><button class="primary-action danger-action" type="button" data-confirm-delete>确认删除</button></div></div>`;
  document.body.appendChild(modal);
  document.querySelectorAll("[data-delete-card]").forEach((button) => button.addEventListener("click", (event) => {
    event.preventDefault(); event.stopPropagation();
    targetCard = button.closest(".game-card");
    modal.hidden = false;
  }));
  modal.querySelector("[data-cancel-delete]").addEventListener("click", () => modal.hidden = true);
  modal.querySelector("[data-confirm-delete]").addEventListener("click", () => {
    targetCard?.remove();
    modal.hidden = true;
    toast("卡牌已删除。");
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
      document.querySelector("[data-thread-subtitle]").textContent = name === "林岚" ? "陈同学的 Python 数据分析卡 ⇄ 林岚的动漫制作卡" : "交换申请沟通中";
      document.querySelector("[data-ai-summary-entry]").hidden = false;
      document.querySelector("[data-detail-content]").hidden = true;
    });
  });
  document.querySelector("[data-open-draft]")?.addEventListener("click", () => {
    document.querySelector("[data-ai-summary-entry]").hidden = true;
    document.querySelector("[data-detail-content]").hidden = false;
  });
  document.querySelector("[data-ai-summary-entry]")?.addEventListener("click", () => {
    document.querySelector("[data-ai-summary-entry]").hidden = true;
    document.querySelector("[data-detail-content]").hidden = false;
  });
  document.querySelector("[data-draft-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const box = document.querySelector(".messages");
    if (box) {
      box.insertAdjacentHTML("beforeend", `<article class="chat-draft-card sent"><b>交换草案已发送</b><span>陈同学：Python 数据分析 · 30 分钟课程</span><span>林岚：动漫制作 · 5 秒循环动画点评</span><em>时间：每周六 15:00-16:00，共 4 周</em></article>`);
      box.scrollTop = box.scrollHeight;
    }
    toast("交换草案已发送给对方确认。");
  });
}

function initProfilePage() {
  const nameEl = document.querySelector("[data-profile-name]");
  if (!nameEl) {
    document.querySelectorAll("[data-profile-apply]").forEach((button) => button.addEventListener("click", () => toast("已发起交换申请。")));
    return;
  }
  const user = new URLSearchParams(location.search).get("user") || "林岚";
  nameEl.textContent = user;
  document.querySelector("[data-profile-avatar]").textContent = user.slice(0, 1);
  document.querySelector("[data-profile-summary]").textContent = `${user} 的技能主页。你可以先看对方卡牌、作品证明和交换偏好，再决定是否申请交换。`;
  document.querySelector("[data-profile-apply]")?.addEventListener("click", () => toast(`已向 ${user} 发起交换申请。`));
}

function initSkillDetailPage() {
  const titleEl = document.querySelector("[data-detail-title]");
  if (!titleEl) return;
  const params = new URLSearchParams(location.search);
  const skill = params.get("skill") || "手机摄影构图";
  const user = params.get("user") || "林岚";
  const source = exchanges.find((item) => item.user === user);
  const card = source?.cards?.find((item) => skill.includes(item.name) || item.name.includes(skill)) || source?.cards?.[0];
  titleEl.textContent = skill;
  document.querySelector("[data-detail-user]").textContent = user;
  document.querySelector("[data-detail-role]").textContent = source?.role || "技能交换用户";
  document.querySelector("[data-detail-score]").textContent = source?.heat || 96;
  document.querySelector("[data-detail-card]").className = `game-card detail-hero-card ${artForSkill(skill)} rarity-elite`;
  document.querySelector("[data-detail-rank]").textContent = rankForSkill(skill);
  document.querySelector("[data-detail-type]").textContent = typeForSkill(skill);
  document.querySelector("[data-detail-card-title]").textContent = skill;
  document.querySelector("[data-detail-card-meta]").textContent = card?.scenes || "作品展示 / 课程评价 / 交换边界";

  const tabs = document.querySelectorAll("[data-detail-tab]");
  const panels = document.querySelectorAll("[data-detail-panel]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.detailPanel === tab.dataset.detailTab));
    });
  });
}

initMarket();
initMyTabs();
initMessages();
initProfilePage();
initWorkRows();
initSkillDetailPage();








