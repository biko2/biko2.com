var gulp = require("gulp");
require("gulp-tasks-pleasure")(gulp);

// Override build task
gulp.task(
  "build",
  gulp.series(
    "sass",
    "js",
    "images",
    "fonts",
    "svg",
    "videos",
    "static",
    "twigPages"
  )
);
