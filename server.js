// server.js
const express = require("express");
const app = express();

const videos = [
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/1.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/2.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/3.mp4"
];

const quotes = [
  {
    quote_ar: "ثق بنفسك، فأنت أقوى مما تظن!",
    quote_en: "Believe in yourself — you're stronger than you think!"
  },
  {
    quote_ar: "النجاح لا يأتي صدفة، بل بصبر وعمل.",
    quote_en: "Success doesn't come by chance, but by patience and work."
  },
  {
    quote_ar: "ابدأ الآن، لا تنتظر اللحظة المثالية.",
    quote_en: "Start now, don’t wait for the perfect moment."
  },
  // أضف حتى 30 اقتباس هنا
];

app.get("/random-video", (req, res) => {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.json({
    title: "فيديو تحفيزي",
    video_url: randomVideo,
    quote_ar: randomQuote.quote_ar,
    quote_en: randomQuote.quote_en
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
