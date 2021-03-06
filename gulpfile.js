var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass')

gulp.task('server', function(){
    connect.server();
});

gulp.task('style', function (){
    gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['style'])
})

gulp.task('default', ['server', 'style', 'watch']);