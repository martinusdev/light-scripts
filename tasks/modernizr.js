const gulpModernizr = require('gulp-modernizr');

const { modernizr: modernizrConfig } = require('./../config.js');

// Lean Modernizr build
const modernizrTask = (gulp) => function modernizr() {
  const { src, cfg, dest } = modernizrConfig();

  return gulp.src(src)
    .pipe(gulpModernizr(cfg))
    .pipe(gulp.dest(dest));
};

module.exports = {
  modernizrTask,
};
