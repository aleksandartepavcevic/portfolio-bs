const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');
const { src, dest } = require('gulp');

function copyHtml () {
    return gulp.src('./src/*.html').pipe(gulp.dest('./dist'));
}

function style () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
}

function imgTask () {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function jsTask() {
    return src('./src/js/index.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('./dist', { sourcemaps: '.' }));
}

function start () {
    copyHtml();
    style();
    watch();
    imgTask();
    jsTask();

    gulp.watch('./src/scss/**/*.scss').on('change', style);
    gulp.watch('./src/*.html').on('change', copyHtml).on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', jsTask).on('change', browserSync.reload);
}



exports.style = style;
exports.watch = watch;
exports.copyHtml = copyHtml;
exports.start = start;
exports.imgTask = imgTask;
exports.jsTask = jsTask;