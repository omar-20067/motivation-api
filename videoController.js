const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

async function generateVideo(script) {
  const inputPath = path.resolve(__dirname, `../videos/${script.videoFileName}`);
  const outputPath = path.resolve(__dirname, `../outputs/output-${Date.now()}.mp4`);

  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .videoFilters({
        filter: 'drawtext',
        options: {
          fontfile: '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
          text: script.text, // الاقتباس هنا
          fontsize: 48,
          fontcolor: 'white',
          x: '(main_w/2-text_w/2)',
          y: '(main_h/2-text_h/2)',
          box: 1,
          boxcolor: 'black@0.5',
          boxborderw: 10
        }
      })
      .output(outputPath)
      .on('end', () => resolve(outputPath))
      .on('error', (err) => reject(err))
      .run();
  });
}

module.exports = { generateVideo };
