// require plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const bulkSass = require('gulp-sass-bulk-import');
const plumber = require('gulp-plumber');
const pleeease = require('gulp-pleeease');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const notify = require('gulp-notify');


// Sass Task Settings
gulp.task('sass', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(bulkSass())
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>'),
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      errLogToConsole: true,
    // includePaths: [ 'src/' ],
    }))
    // .pipe(pleeease()) // commpress & add prefix & sourcemap
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify('css task finished'));
});

// Image min Task Settings
// gulp.task('image', () => {
//   gulp.src('src/images/**/*.{png,jpg,svg,webp}')
//     .pipe(imagemin({
//       progressive: true,
//       svgoPlugins: [
//         { removeViewBox: false },
//         { cleanupIDs: false }
//       ],
//       use: [pngquant()]
//     }))
//     .pipe(gulp.dest('dist/images'))
//     .pipe(notify('imagemin task finished'));
// });


// Copy
gulp.task('copy', () => {
  gulp.src('src/www/**/*.{html,gif}')
    .pipe(gulp.dest('dist'));

  gulp.src('src/images/**/*')
  .pipe(gulp.dest('dist/images'));

  gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

// Gulp Watch Settings
gulp.task('default', () => {
  gulp.watch("src/scss/**/*.scss",["sass"]); //run sass
  // gulp.watch('src/images/**/*.{png,jpg,svg,webp}', ['image']);
  gulp.watch('src/www/**/*.{html,gif}', ['copy']);
});
