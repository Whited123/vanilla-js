const quotes = [
  {
    quote:
      "많은 패배를 경헙하게 될지 모르지만, 절대 패배자가 되어서는 안 된다.",
    author: "마야 안젤루",
  },
  {
    quote: "하루에 3시간을 걸으면, 7년 후에 지구를 한 바퀴 돌 수 있다.",
    author: "사무엘 존슨",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해.",
    author: "찰리 채플린",
  },
  {
    quote:
      "지금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다. 오늘 그것을 못하면 내일 그것을 할 수 있는가?",
    author: "토마스 아켐피스",
  },
  {
    quote:
      "먹고 싶은것을 다 먹는 것은 그렇게 재미있지 않다. 인생을 경계선 없이 살면 기쁨이 덜하다. 먹고싶은것을 다 먹을수 있다면 먹고싶은것을 먹는데 무슨 재미가 있겠나?",
    author: "톰 행크스",
  },
  {
    quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
    author: "미상",
  },
  {
    quote: "애벌레가 세상이 끝났다고 생각하는 순간, 나비로 변했다.",
    author: "속담",
  },
  {
    quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    author: "존 록펠러",
  },
  {
    quote: "주고 기억하지 않고, 받고 잊지 않는 사람들에게 복이 있나니.",
    author: "미상",
  },
  {
    quote: "중요한 것은 꺾이지 않는 마음",
    author: "데프트",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
