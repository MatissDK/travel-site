var gulp = require('gulp');
var watch = require('gulp-watch');


gulp.task('default', function () {
    console.log('Gulp task created');
});

gulp.task('html', function () {
   console.log('HTML gulp');
});

gulp.task('styles', function () {
    console.log('Styles gulp');
});

gulp.task('watch',function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles')
    });
});