var gulp = require('gulp');

gulp.task('default', function (done) {
    gulp.src('app/css/main.css').pipe(gulp.dest('demo/css/'));
    done();
});