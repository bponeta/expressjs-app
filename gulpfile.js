var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('buildjs', function(){
	gulp.src('source/*.js')
	pip(uglify())
	pip(gulp.dest('dist'));
});