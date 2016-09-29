var gulp = require('gulp');
var pug = require('gulp-pug');
var inject = require('gulp-inject');

var config = require('./config');

gulp.task('inject', ['inject:dev']);

gulp.task('inject:dev', ['sass:dev'], function () {
    var dest = config.dev.DEST;
    return injectFiles(config.pug.dev, dest);
    return injectFiles(config.pug.dev, dest);
});

gulp.task('inject:dist', ['sass:dist'], function () {
    var dest = config.dist.DEST;
    return injectFiles(config.pug.dist, dest);
    return injectFiles(config.pug.dist, dest);
});

function injectFiles(options, dest) {
    return gulp.src(config.SRC + '/index.html')
        .pipe(inject(gulp.src([config.SRC + '/**/*.js', '!' + config.SRC + '/**/systemjs.config.js'], {read: false})))
        .pipe(inject(gulp.src(dest + '/**/*.css', {read: false}), { ignorePath: dest }))
        .pipe(gulp.dest(dest));
}
