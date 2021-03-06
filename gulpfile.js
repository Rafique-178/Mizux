const gulp = require(`gulp`)
const {
    src,
    dest
} = require(`gulp`)
const {series}= require('gulp')

function fontAwesome() {
    return src(`node_modules/@fortawesome/fontawesome-free/css/all.min.css`).pipe(dest(`src/css`));
}
function faWebFontsFolder() {
    return src(`node_modules/@fortawesome/fontawesome-free/webfonts/**/*`).pipe(dest(`src/webfonts`))
}
function bootstrapCSSFile() {
    return src(`node_modules/bootstrap/dist/css/bootstrap.min.css`).pipe(dest(`src/css`));
}
function bootstrapJSFile() {
    return src(`node_modules/bootstrap/dist/js/bootstrap.min.js`).pipe(dest(`src/js`));
}
function popperJs() {
    return src(`node_modules/@popperjs/core/dist/umd/popper.min.js`).pipe(dest(`src/js`));
}
function jquery() {
    return src(`node_modules/jquery/dist/jquery.slim.min.js`).pipe(dest(`src/js`));
}
exports.default = series(fontAwesome, faWebFontsFolder, bootstrapCSSFile, bootstrapJSFile, popperJs, jquery);