/**
 * css-stylus
 * ==========
 *
 * Собирает *css*-файлы вместе со *styl*-файлами по deps'ам, обрабатывает инклуды и ссылки, сохраняет в виде `?.css`.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию `?.css`.
 * * *Object* **variables** — Дополнительные переменные окружения для `stylus`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-stylus/techs/css-stylus'));
 * ```
 */
var path = require('path'),
    vow = require('vow'),
    postcss = require('postcss'),
    atImport = require('postcss-import'),
    stylus = require('stylus');

module.exports = require('enb/lib/build-flow').create()
    .name('css-stylus')
    .target('target', '?.css')
    .defineOption('compress', false)
    .defineOption('prefix', '')
    .defineOption('variables')
    .defineOption('infoComments', true)
    .defineOption('includes')
    .defineOption('includeCSS', true)
    .useFileList(['css', 'styl'])
    .builder(function (sourceFiles) {
        var node = this.node,
            filename = node.resolvePath(path.basename(this._target)),
            defer = vow.defer(),
            infoComments = this._infoComments,
            css, renderer;

        css = sourceFiles.map(function (file) {
            var url = node.relativePath(file.fullname);

            if (file.name.indexOf('.styl') !== -1) {
                var pre = post = '';

                if (infoComments === true) {
                    pre = '/* ' + url + ':begin */\n';
                    post = '/* ' + url + ':end */\n';
                }

                return pre + '@import "' + url + '";\n' + post;
            } else {
                return '@import "' + url + '";';
            }
        }).join('\n');

        renderer = stylus(css, {
                compress: this._compress,
                prefix: this._prefix
            })
            .set('include css', this._includeCSS)
            .set('resolve url', true)
            .set('filename', filename)
            .define('url', stylus.url());

        if (this._variables) {
            var variables = this._variables;

            Object.keys(variables).forEach(function (key) {
                renderer.define(key, variables[key]);
            });
        }

        if (this._includes) {
            this._includes.forEach(function (path) {
                renderer.include(path);
            });
        }

        this._configureRenderer(renderer)
            .render(function (err, css) {
                if (err) {
                    defer.reject(err);
                } else {
                    defer.resolve(css);
                }
            });

        return defer.promise()
            .then(function (css) {
                return postcss()
                    .use(atImport({
                        transform: function (content, filename) {
                            var url = node.relativePath(filename),
                                pre = post = '',
                                res;

                                if (infoComments === true) {
                                    pre = '/* ' + url + ': begin */ /**/\n';
                                    post = '/* ' + url + ': end */ /**/\n';
                                }

                                res = pre + content + post;

                            return res.replace(/\n/g, '\n    ');
                        }
                    }))
                    .process(css, {
                        from: filename
                    })
                    .css;
            });
    })
    .methods({
        _configureRenderer: function (renderer) {
            return renderer;
        }
    })
    .createTech();
