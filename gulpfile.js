var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    babel = require("gulp-babel"),
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require("vinyl-source-stream"),
    del         = require('del');

    gulp.task('scss', function() {
        return gulp.src('app/scss/*.scss')
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
    });

    gulp.task('bs', function() {
        browserSync({ 
            server: {
                baseDir: 'app'
            },
            notify: false
        });
    });

    gulp.task("react", function () {
	  return browserify({
            entries: 'app/js/index.jsx',
            extensions: ['.jsx'],
            debug: true
        })
	  	.transform(babelify, {presets: ["env", "react"]})
	  	.bundle()
	  	.on('error', (err) => {
            console.error(err.message);
        })
        .pipe(source('app.js'))
	    .pipe(gulp.dest("app/js"));
	});

    gulp.task('watch', ['bs', 'scss', 'react'], function() {
        gulp.watch('app/scss/*.scss', ['scss']);
        gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/js/*.jsx', ['react']);
        gulp.watch('app/js/*.js', browserSync.reload);
    });

    gulp.task('clean', function() {
        return del.sync('dist');
    });

    gulp.task('build', ['clean', 'scss', 'react'], function() {

        var buildCss = gulp.src('app/css/main.css')
        .pipe(gulp.dest('dist/css'))

        var buildJs = gulp.src('app/js/*.js') 
        .pipe(gulp.dest('dist/js'))

        var buildHtml = gulp.src('app/*.html') 
        .pipe(gulp.dest('dist'));

    });
