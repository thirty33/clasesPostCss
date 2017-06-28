var gulp = require('gulp')
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create()

// Servidor de desarrollo

gulp.task('serv', function () {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	})
})

// Tarea para procesar el css

gulp.task('css', function(){
	var processors = []

		return gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())
})

// Tarea para vigilar los cambios 

gulp.task('watch', function(){
	gulp.watch('./src/*.css', ['css'])
	gulp.watch('./dist/*.html').on('change', function(){
		browserSync.reload()
	})


})


gulp.task('default', ['watch', 'serv', 'css'])