const gulp = require('gulp') ;
const sass = require('gulp-sass')(require('sass')) ;
const sourcemaps = require('gulp-sourcemaps') ;
const uglify = require('gulp-uglify') ;
const imagemin = require('gulp-imagemin') ;

function compilationSass() {
    return gulp.src('./source/styles/main.scss') 
        .pipe(sass( {
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')) ;
}

function compactJavaScript () {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify()) 
        .pipe(gulp.dest('./build/scripts')) ;
}

function compactImg () {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images')) ;
}



exports.sass = compilationSass ;
exports.javascript = compactJavaScript ;
exports.images = compactImg ;
exports.watch = function () {
    gulp.watch('./source/styles/*.scss', {ignoreinitial: false}, gulp.series(compilationSass)) ;
    gulp.watch('./source/scripts/*.js', {ignoreinitial: false}, gulp.series(compactJavaScript)) ;
    gulp.watch('./source/images/*', {ignoreinitial: false}, gulp.series(compactImg)) ;
}
