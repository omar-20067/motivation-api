// server.js
const express = require("express");
const app = express();

const videos = [
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/1.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/2.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/3.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/4.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/5.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/6.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/7.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/8.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/9.mp4",
  "https://raw.githubusercontent.com/omar-20067/motivation-videos/main/10.mp4"
  // أضف المزيد إذا أردت
];

const quotes = [
  { quote_ar: "ثق بنفسك، فأنت أقوى مما تظن!", quote_en: "Believe in yourself — you're stronger than you think!" },
  { quote_ar: "ابدأ الآن، لا تنتظر اللحظة المثالية.", quote_en: "Start now, don’t wait for the perfect moment." },
  { quote_ar: "النجاح لا يأتي صدفة، بل بصبر وعمل.", quote_en: "Success doesn't come by chance, but by patience and work." },
  { quote_ar: "اجعل كل يوم خطوة نحو حلمك.", quote_en: "Make each day a step toward your dream." },
  { quote_ar: "الفشل ليس النهاية، بل بداية جديدة.", quote_en: "Failure isn't the end, it's a new beginning." },
  { quote_ar: "لا تستسلم، فالمحاولة هي أول طريق النجاح.", quote_en: "Never give up — trying is the first step to success." },
  { quote_ar: "تعلم من أخطائك وواصل التقدم.", quote_en: "Learn from your mistakes and keep moving forward." },
  { quote_ar: "لا تدع الخوف يوقفك.", quote_en: "Don't let fear stop you." },
  { quote_ar: "كل يوم فرصة جديدة.", quote_en: "Each day is a new opportunity." },
  { quote_ar: "حافظ على تركيزك وابقَ ثابتًا.", quote_en: "Stay focused and remain steady." },
  { quote_ar: "ثابر، فالصبر مفتاح النجاح.", quote_en: "Persevere — patience is the key to success." },
  { quote_ar: "ابدأ صغيرًا، احلم كبيرًا.", quote_en: "Start small, dream big." },
  { quote_ar: "انظر للفشل كدرس لا كهزيمة.", quote_en: "See failure as a lesson, not defeat." },
  { quote_ar: "ثق بأنك قادر على التغيير.", quote_en: "Believe you are capable of change." },
  { quote_ar: "اتخذ خطوة واحدة يوميًا.", quote_en: "Take one step each day." },
  { quote_ar: "النجاح نتيجة للانضباط والعمل المستمر.", quote_en: "Success is the result of discipline and consistent work." },
  { quote_ar: "ابنِ عادات تقودك للنجاح.", quote_en: "Build habits that lead to success." },
  { quote_ar: "لا أحد ينجح بالصدفة.", quote_en: "No one succeeds by accident." },
  { quote_ar: "كل لحظة تساوي فرصة.", quote_en: "Every moment is an opportunity." },
  { quote_ar: "كن أفضل نسخة من نفسك.", quote_en: "Be the best version of yourself." },
  { quote_ar: "العمل الجاد يتفوق على الموهبة.", quote_en: "Hard work beats talent." },
  { quote_ar: "ابدأ حتى لو لم تكن جاهزًا.", quote_en: "Start even if you're not ready." },
  { quote_ar: "لا تؤجل أحلامك.", quote_en: "Don't postpone your dreams." },
  { quote_ar: "اعمل بذكاء لا بجهد فقط.", quote_en: "Work smart, not just hard." },
  { quote_ar: "كل فشل يقربك من النجاح.", quote_en: "Every failure brings you closer to success." },
  { quote_ar: "طور نفسك كل يوم.", quote_en: "Improve yourself every day." },
  { quote_ar: "اجعل الشغف دافعك.", quote_en: "Let passion drive you." },
  { quote_ar: "الإصرار يصنع الفرق.", quote_en: "Determination makes the difference." },
  { quote_ar: "كُن الشخص الذي تريده أن يكون قدوتك.", quote_en: "Be the person you want to look up to." },
  { quote_ar: "الإيجابية قوة.", quote_en: "Positivity is power." }
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
