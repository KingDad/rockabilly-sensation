var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var del = require('del');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require('browser-sync').create();
gulp.task('clean:dist', function(){
	return del.sync('dist');
});
gulp.task('browserSync', function(){
	browserSync.init({
		server:{
			baseDir: 'site'
		},
	});
});
gulp.task('images', function(){
	return gulp.src('site/images/**/*.+(svg|png|jpg|gif)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/images'));
});
gulp.task('sass', function(){
	return gulp.src('site/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('site/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});
gulp.task('useref', function(){
	return gulp.src('site/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});
gulp.task('build', function(callback){
	runSequence('clean:dist',
		['sass', 'useref', 'images'],
		callback
		);
});
gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('site/scss/**/*.scss', ['sass']);
	gulp.watch('site/*.html', browserSync.reload);
	gulp.watch('site/js/**/*.js', browserSync.reload);
});
gulp.task('default', function(callback){
	runSequence(['sass', 'browserSync', 'watch'],
		callback
		);
});
gulp.task('hello', function(){
	console.log("Hello muchacho.");
});