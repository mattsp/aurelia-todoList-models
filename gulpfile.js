var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var tsProject = ts.createProject('tsconfig.json')
var merge = require('merge2');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('build/**/*')
    .pipe(clean())
})

gulp.task('scripts', function() {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(tsProject());
        return merge([
            tsResult.dts.pipe(gulp.dest('build/definitions')),
            tsResult.js
            .pipe(concat('index.js'))
            .pipe(gulp.dest('build/js'))
        ]);
});

gulp.task('build', gulp.series('clean', 'scripts'));