var gulp = require('gulp');
require('gulp-tasks-pleasure')(gulp);

gulp.task('docs-bidasoa', function() {
  return gulp
    .src('src/pages/bidasoa/docs/**')
    .pipe(gulp.dest('build/bidasoa/docs'));
});

// Override build task
gulp.task(
  'build',
  gulp.series(
    'sass',
    'js',
    'images',
    'fonts',
    'svg',
    'videos',
    'static',
    'twigPages',
    'docs-bidasoa',
  ),
);
