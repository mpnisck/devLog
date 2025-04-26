typingText(
  [
    "안녕하십니까 여러분의 웹 사이트 여행길을 <br> 책임질 <b>프론트엔드 엔지니어 김연주</b>입니다.",
  ],
  "text",
  ["#333"]
);

export function typingText(
  words: string[],
  id: string,
  colors: string[] = ["#fff"]
): void {
  let letterCount = 1;
  let x = 1;
  let waiting = false;

  const target = document.getElementById(id) as HTMLElement | null;
  if (!target) return;

  target.style.color = colors[0];

  window.setInterval(() => {
    if (!target) return;

    if (letterCount === 0 && !waiting) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      setTimeout(() => {
        const usedColor = colors.shift();
        if (usedColor) colors.push(usedColor);
        const usedWord = words.shift();
        if (usedWord) words.push(usedWord);
        x = 1;
        target.style.color = colors[0];
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && !waiting) {
      waiting = true;
      setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500);
    } else if (!waiting) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 100);
}
