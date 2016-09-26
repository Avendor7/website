var gulp = require('gulp');
var pug = require('gulp-pug');

var config = require('./config');

gulp.task('pug', ['pug:dev']);

gulp.task('pug:dev', function () {
    var dest = config.dev.DEST;
    return compilePug(config.pug.dev, dest);
});

gulp.task('pug:dist', function () {
    var dest = config.dist.DEST;
    return compilePug(config.pug.dist, dest);
});

function compilePug(options, dest) {
    return gulp.src([
            config.buildSrcGlob('pug'),
            '!src/index.pug'
        ])
        .pipe(pug(options).on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest(dest));
}