const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();
const webp = require('gulp-webp');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const pngquant = require('imagemin-pngquant');
// const jsmin = require('gulp-jsmin');


function html() {
    return src('src/**.html')
      .pipe(include({
        prefix: '@@'
      }))
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(dest('dist'))
  }

  function htmlprod() {
    return src('src/**.html')
      .pipe(include({
        prefix: '@@'
      }))
      .pipe(htmlmin({
        collapseWhitespace: true
      }))
      .pipe(rename(function (path) {
        path.extname = ".php";
      }))
      .pipe(dest('dist'))
  }
  
  function scss() {
    return src('src/styles/main.scss')
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(csso())
      .pipe(concat('style.css'))
      .pipe(dest('dist'))
  }
  
  function clear() {
    return del('dist')
  }

  function img() {
    return src('src/images/**.{png,jpg,svg,gif,ico,webp}')
      .pipe(imagemin([
        imagemin.mozjpeg({quality: 69, progressive: true}),
	      pngquant({quality: [0.3, 0.7], strip: true})
      ]))
      .pipe(dest('dist/images'))
  }

  function imgwebp() {
    return src('dist/images/**.{png,jpg}')
      .pipe(webp())
      .pipe(dest('dist/images'))
  }

  function favicons() {
    return src('dist/images/favicons/**.{png,jpg,ico}')
    .pipe(imagemin())
    .pipe(dest('dist/images/favicons'))
  }

  function videos() {
    return src('src/videos/**.mp4')
      .pipe(dest('dist/videos'))
  }

  function fonts() {
    return src('src/fonts/**.woff')
      .pipe(dest('dist/fonts'))
  }

  function scripts() {
    return src('src/scripts/**.js')
      .pipe(dest('dist'))
  }

  function php() {
    return src('src/**.php')
      .pipe(dest('dist'))
  }
  
  function serve() {
    sync.init({
      server: './dist'
    })
  
    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/styles/**.scss', series(scss)).on('change', sync.reload)
    watch('src/scripts/**.js', series(scripts)).on('change', sync.reload)
    watch('src/images', series(img)).on('change', sync.reload)
    watch('src/videos', series(videos)).on('change', sync.reload)
  }
  
  exports.build = series(clear, scss, htmlprod, img, imgwebp, favicons, videos, php, scripts, fonts)
  exports.serve = series(clear, scss, html, img, imgwebp, favicons, videos, php, fonts, scripts, serve)
  exports.clear = clear