var gulp = require('gulp'),
    fs = require('fs'),
    request = require('request'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    storiesConfig = require('./storiesConfig');

gulp.task('sass', function () {
  gulp.src('./public/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js handlebars',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('build', function() {

    nodemon({
        script: 'bin/www',
        ext: 'js handlebars',
        env: { 'NODE_ENV': 'production' }
    }).on('start', function () {
      console.log('### started Express');
        setTimeout(function () {

            for (story in storiesConfig.stories) {
                request('http://localhost:3000/'+ story)
                    .pipe(fs.createWriteStream('dist/'+ story +'.html'));
                console.log('### extracted page: '+ story);
            }

        }, 200);
    });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
