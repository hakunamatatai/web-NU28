// js/main.js

document.addEventListener("DOMContentLoaded", function () {
  // 1. 获取 DOM 节点
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  // 2. 汉堡菜单点击事件
  navToggle.addEventListener("click", function () {
    navList.classList.toggle("show"); // 切换显示/隐藏
  });

  // 3. 点击导航项后自动关闭移动端菜单（可选）
  document.querySelectorAll(".nav-list li a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("show")) {
        navList.classList.remove("show");
      }
    });
  });

  // 4. 滚动时给导航添加阴影/背景色（可选）
  const siteNav = document.querySelector(".site-nav");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      siteNav.classList.add("scrolled");
    } else {
      siteNav.classList.remove("scrolled");
    }
  });
});
