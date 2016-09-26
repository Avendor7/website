var gulp = require('gulp');
var npmFiles = require('gulp-npm-files');

var config = require('./config');

gulp.task('npmFiles', ['npmFiles:dev']);

gulp.task('npmFiles:dev', function () {
    var dest = config.dev.DEST;
    return copyNpmFiles(dest);
});

gulp.task('npmFiles:dist', function () {
    var dest = config.dist.DEST;
    return copyNpmFiles(dest);
});

function copyNpmFiles(dest) {
    return gulp.src(npmFiles(), {base: './'})
        .pipe(gulp.dest(dest))
}