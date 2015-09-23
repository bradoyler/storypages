var gulp = require('gulp'),
    fs = require('fs'),
    request = require('request'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    global = require('./models/global.json');

var s3 = require("gulp-s3");
aws = JSON.parse(fs.readFileSync('./aws.json'));

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


gulp.task('upload', function() {
    gulp.src('./dist/**')
        .pipe(s3(aws));
});

gulp.task('build', function() {

    nodemon({
        script: 'bin/www',
        ext: 'js handlebars',
        env: { 'NODE_ENV': 'production' }
    }).on('start', function () {
      console.log('### started Express');
        setTimeout(function () {

            global.storyCatalog.forEach(function (item) {
                request('http://localhost:3000/'+ item.slug)
                    .pipe(fs.createWriteStream('dist/'+ item.slug +'.html'));
                console.log('### extracted page: '+ item.slug);
            });

            request('http://localhost:3000/')
                .pipe(fs.createWriteStream('dist/index.html'));

        }, 400);
    });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
