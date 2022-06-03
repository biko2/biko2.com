var gulp = require("gulp");
require("gulp-tasks-pleasure")(gulp);


gulp.task('docs-bitween', function () {
  return gulp.src('src/pages/bitween/docs/*')
    .pipe(gulp.dest('build/bitween/docs'));
});



// Override build task
gulp.task(
  "build",
  gulp.series(
    "docs-bitween",
    "sass",
    "js",
    //"images",
    "fonts",
    "svg",
    "videos",
    "static",
    "twigPages",
  )
);
