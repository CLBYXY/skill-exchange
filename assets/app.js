const exchanges = [
  { user: "林岚", avatar: "林", role: "品牌摄影师", teach: "摄影、剪辑", want: "动漫制作", mode: ["browse", "recommend", "hot"], type: "online", time: "weekend", distance: "3.2km", heat: 96, desc: "可教人像构图、自然光和短视频剪辑节奏，希望换到角色分镜和 5 秒循环动画。" },
  { user: "周亦", avatar: "周", role: "剪辑博主", teach: "短视频剪辑、脚本结构", want: "Python 数据分析", mode: ["browse", "recommend", "hot"], type: "online", time: "weekday", distance: "12km", heat: 92, desc: "每次 30 分钟，可按作品拆解剪辑问题，想换一个数据看板入门。" },
  { user: "许诺", avatar: "许", role: "效率教练", teach: "Notion 学习系统", want: "手机摄影修图", mode: ["browse", "nearby"], type: "online", time: "weekday", distance: "1.8km", heat: 74, desc: "擅长搭建学习复盘系统，希望有人带我做一组可发布的照片。" },
  { user: "陈默", avatar: "默", role: "后端工程师", teach: "Python 项目拆解", want: "吉他弹唱", mode: ["browse", "nearby"], type: "offline", time: "weekend", distance: "800m", heat: 81, desc: "可以讲接口设计和自动化脚本，想换吉他节奏和一首完整弹唱。" },
  { user: "高晴", avatar: "高", role: "英语教练", teach: "英语面试、口语表达", want: "PPT 视觉设计", mode: ["browse", "recommend"], type: "online", time: "weekday", distance: "8km", heat: 88, desc: "帮你练面试回答和表达流畅度，希望换到一套路演 PPT 设计建议。" },
  { user: "韩知", avatar: "韩", role: "产品设计师", teach: "Figma 原型、交互评审", want: "Python 自动化", mode: ["browse", "hot"], type: "online", time: "weekend", distance: "5.6km", heat: 90, desc: "能帮你把想法做成可演示原型，想换脚本自动化处理资料。" },
  { user: "陆声", avatar: "陆", role: "吉他老师", teach: "民谣吉他、弹唱节奏", want: "个人网站搭建", mode: ["browse", "nearby"], type: "offline", time: "weekend", distance: "2.4km", heat: 77, desc: "一对一纠正节奏和和弦，希望换一个个人主页。" },
  { user: "袁野", avatar: "袁", role: "咖啡玩家", teach: "咖啡拉花、手冲入门", want: "短视频拍摄", mode: ["browse"], type: "offline", time: "weekend", distance: "4.1km", heat: 69, desc: "适合兴趣入门，想把咖啡制作过程拍成短视频。" },
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
    button.addEventListener("click", () => toast(`已向 ${button.dataset.apply} 发送交换申请。对方同意后进入沟通页确认草案。`));
  });
  document.querySelectorAll("[data-save]").forEach((button) => {
    button.addEventListener("click", () => toast(`${button.dataset.save} 的交换需求已收藏。`));
  });
}

function initMarket() {
  const tabs = document.querySelectorAll("[data-mode]");
  if (!tabs.length) return;
  let current = "browse";
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
  if (location.hash === "#publish") activate("publish");
  document.querySelector("[data-publish-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    toast("新的交换需求已发布到市场。");
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
