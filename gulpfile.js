const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gls = require('gulp-live-server');
const browserSync = require('browser-sync').create();

//GUUUUUUUUUUUUUSE

const style = () => {
    console.log('START style');
    return gulp
        .src('./sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                errLogToConsole: true,
                outputStyle: 'compressed',
            }),
        )
        .on('error', console.error.bind(console))
        .pipe(
            autoprefixer({
                cascade: false,
            }),
        )
        .pipe(
            csso({
                debug: true, // dev
            }),
        )
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
};

const script = () => {
    console.log('START script');
    return gulp
        .src('./scripts/*.js')
        .pipe(
            babel({
                presets: ['@babel/env'],
            }),
        )
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.stream());
};

const serve = () => {
    const server = gls.new('./app.js');
    server.start();

    gulp.watch(['./sass/**/*.sass', './views/**/*.hbs', './scripts/*.js'], (file) => {
        server.notify.apply(server, [file]);
    });
    gulp.watch('./app.js', server.start.bind(server));
};

function browserSyncReload(done) {
    console.log('START BS RELOAD');
    browserSync.reload();
    done();
}

gulp.task('watch', () => {
    serve();
    browserSync.init({
        proxy: `http://localhost:${process.env.PORT || '8000'}`,
        port: `${process.env.PORT || '8001'}`,
    });
    gulp.watch('./app.js', browserSyncReload);
    gulp.watch('./**/*.json', browserSyncReload);
    gulp.watch('./views/**/*.hbs', browserSyncReload);
    gulp.watch('./sass/**/*.sass', style);
    gulp.watch('./scripts/**/*.js', script);
});

gulp.task('default', (done) => {
    style();
    script();
    done();
});
