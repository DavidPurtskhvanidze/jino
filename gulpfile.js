var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         server: "app/"
//     });
//
//     gulp.watch("app/sass/*.sass", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });

// gulp.task('sass', function (done) {
//     gulp.src('app/sass/style.sass')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoPrefixer())
//         .pipe(gulp.dest('app/css'));
//     done();
// });

gulp.task('sass', function() {
    return gulp.src("app/sass/*.sass")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('app/css'));
});

// gulp.task('default', ['serve']);
