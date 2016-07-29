const _ =       require("lodash");
const fs =      require("fs");
const gulp =    require("gulp");
const pug =     require("gulp-pug");
const pugLint = require("gulp-pug-lint");
const rename =  require("gulp-rename")

const targets = JSON.parse(fs.readFileSync("targets.json"));
_(targets).forEach((file, target) => {
	gulp.task(target, () => {
		return gulp.src(file)
			.pipe(pugLint())
			.pipe(pug({}))
			.pipe(gulp.dest("dist/"));
	});
});
gulp.task("default", Object.keys(targets));
