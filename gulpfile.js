/*Dependencias*/
var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();

gulp.task('copiai', function(){
   return gulp.src(['./app/img/*.png'])
   .pipe(gulp.dest('./img'))
});

gulp.task('copiav', ['copiai'], function(){
  return gulp.src(['./app/video/*.{mp4, ogv, webm}'])
    .pipe(gulp.dest('./video'))
});

gulp.task('inject', ['copiav'], function() {
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');

  var injectSrc = gulp.src(['app/css/*.css',
    'app/js/*.js'], {read: false});

  var injectOptions = {
    ignorePath: '/../app'
  }

  var options = {
    bowerJson: require('./bower.json'),
    directory: '/../app',
    ignorePath: '../../app'
  }

  return gulp.src('./app/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./'));

});


/*BROWSER-SYNC*/
gulp.task('browserSync', ['inject'], function(){
 browserSync.init({
     server:{
         baseDir:'app'
     },
 })
});

gulp.task('sync', function(){
    return gulp.src('css/**/*.css')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream:true}))
});

