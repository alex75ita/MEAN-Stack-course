var gulp = require("gulp");
var mocha = require("gulp-mocha");

gulp.task("test", function() {
	gulp
		.src(["./src/**/*_test.js", "!./node_modules/**/*.js"])
		.pipe(mocha())
		.on("error", function(error) {
			this.emit("end");
		})
		;	
});

gulp.task("test-dot", function() {
	gulp
		.src(["./src/**/*_test.js", "!./node_modules/**/*.js"])
		.pipe(mocha({reporter:"dot"}))
		.on("error", function(error) {
			this.emit("end");
		})
		;
});

gulp.task("watch", function() {
	gulp.watch("./src/**/*.js", ["test"]);	
});