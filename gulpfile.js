// GULP

var gulp   = require('gulp');
var sass   = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// SASS

gulp.task('sass', function () {
  return sass('_assets/sass/style.scss', {style: 'compressed'})
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest('_assets/css'));
});

// JAVASCRIPT

gulp.task('headScripts', function() {
	return gulp.src([
		'_assets/js/_src/modernizr.js'
	])
	.pipe(concat('head-scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('_assets/js'));
});

gulp.task('footScripts', function() {
	return gulp.src([
		'_assets/js/_src/_plugins/*.js',
		'_assets/js/_src/functions.js',
		'_assets/js/_src/ios-orientationchange-fix.js'
	])
	.pipe(concat('foot-scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('_assets/js'));
});

gulp.task('ieScripts', function() {
	return gulp.src([
		'_assets/js/_src/respond.js',
		'_assets/js/_src/selectivizr.js'
	])
	.pipe(concat('ie-scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('_assets/js'));
});

// WATCH

gulp.task('watch', function() {
  gulp.watch('_assets/sass/**/*.scss', ['sass']);
});

// DEFAULT TASK

gulp.task('default',[
	'sass',
	'headScripts',
	'footScripts',
	'ieScripts',
	'watch'
]);