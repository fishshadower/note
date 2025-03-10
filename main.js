/**
 * 自定义鼠标指针
 */

// 获取自定义鼠标指针的 DOM 元素
const customCursor = document.getElementById("customCursor");
const clickableElements = document.querySelectorAll(".clickable");

// 监听鼠标移动事件，实时更新光标位置
document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // 更新光标的位置
  customCursor.style.left = `${mouseX}px`;
  customCursor.style.top = `${mouseY}px`;
});

// 监听鼠标点击事件，改变鼠标样式或触发动画
document.addEventListener("mousedown", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(1.2)"; // 点击时放大
});

document.addEventListener("mouseup", () => {
  customCursor.style.transform = "translate(-50%, -50%) scale(1)"; // 恢复默认大小
});

// 鼠标移入可点击内容时
clickableElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    customCursor.src = "./image/cursor_click.png"; // 变为可点击样式
  });

  element.addEventListener("mouseleave", () => {
    customCursor.src = "./image/cursor.png"; // 还原默认样式
  });
});
