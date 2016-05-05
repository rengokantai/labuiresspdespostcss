/**
 * Created by Hernan Y.Ke on 2016/5/5.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    cssnano = require('cssnano'),
    animation = require('postcss-animation'),

    source = 'process/css/',
    dest = 'builds/postcss/';

gulp.task('html', ()=> {
    gulp.src(dest + '*.html');
});

gulp.task('css', function() {
    gulp.src(source + 'style.css')
        .pipe(postcss([
            precss(),
            animation(),
            autoprefixer(),
            cssnano()
        ]))
        .on('error', gutil.log)
        .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', ()=> {
    gulp.watch(source + '**/*.css', gulp.series(['css']));
    gulp.watch(dest + '**/*.html', gulp.series(['html']));
});

gulp.task('webserver', function() {
    gulp.src(dest)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', gulp.parallel('html', 'css', 'webserver','watch'));