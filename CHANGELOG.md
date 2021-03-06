История изменений
=================

2.0.0
-----

### Технологии

* [ __*major*__ ] Технологии `css-stylus`, `css-stylus-with-nib` и `css-stylus-with-autoprefixer` объединены в одну — [stylus](api.ru.md) ([#67], [#68]).

### Крупные изменения

* Добавлена поддержка карт кода (source maps) ([#60]).
* [ __*major*__ ] Для пост-обработки вместо [css-preprocessor](https://github.com/enb-make/enb/blob/v0.17.0/lib/preprocess/css-preprocessor.js) используется [postcss](https://github.com/postcss/postcss) ([#33]).
* [ __*major*__ ] Для минификации кода вместо модуля [stylus](https://github.com/stylus/stylus/blob/master/docs/executable.md) используется модуль [csswring](https://github.com/hail2u/node-csswring) ([#71]).
* [ __*major*__ ] Для добавления вендорных префиксов вместо [autoprefixer](https://github.com/postcss/autoprefixer) используется [autoprefixer-core](https://github.com/postcss/autoprefixer-core) ([#24]).
* [ __*major*__ ] Исправлена обработка CSS-файлов: если БЭМ-сущность на одном уровне переопределения реализована и в файле с расширением `.styl`, и в файле с расширением `.css`, то в сборку попадет только `.styl`-файл ([#73]).

### Опции

* [ __*major*__ ] Из технологии `stylus` удалена опция `variables` ([#36]).

В технологию `stylus` добавлены следующие опции:

* [sourcemap](api.ru.md#sourcemap) ([#60])
* [autoprefixer](api.ru.md#autoprefixer) ([#64])
* [compress](api.ru.md#compress) ([#71])
* [url](api.ru.md#url) ([#58])
* [imports](api.ru.md#imports) ([#57])
* [comments](api.ru.md#comments) ([#55])
* [useNib](api.ru.md#usenib) ([#65])
* [includes](api.ru.md#includes) ([#54])

### Зависимости

* Модуль `stylus@0.50.0` обновлен до версии `0.52.0` ([#90]).
* Модуль `vow@0.4.8` обновлен до версии `0.4.10`.

### Engines

* Добавлена поддержка `io.js` ([#34]).
* Добавлена поддержка `node.js` версии `0.12` ([#35]).

### Тестирование

* Добавлены тесты для технологии `stylus` ([#36]).
* Добавлено тестирование под Windows в Continues Integration при помощи [AppVeyor](http://www.appveyor.com) ([#37]).

[#24]: https://github.com/enb-make/enb-stylus/issues/24
[#26]: https://github.com/enb-make/enb-stylus/issues/26
[#33]: https://github.com/enb-make/enb-stylus/issues/33
[#34]: https://github.com/enb-make/enb-stylus/issues/34
[#35]: https://github.com/enb-make/enb-stylus/issues/35
[#36]: https://github.com/enb-make/enb-stylus/issues/36
[#37]: https://github.com/enb-make/enb-stylus/issues/37
[#48]: https://github.com/enb-make/enb-stylus/issues/48
[#54]: https://github.com/enb-make/enb-stylus/issues/54
[#55]: https://github.com/enb-make/enb-stylus/issues/55
[#56]: https://github.com/enb-make/enb-stylus/issues/56
[#57]: https://github.com/enb-make/enb-stylus/issues/57
[#58]: https://github.com/enb-make/enb-stylus/issues/58
[#60]: https://github.com/enb-make/enb-stylus/issues/60
[#64]: https://github.com/enb-make/enb-stylus/issues/64
[#65]: https://github.com/enb-make/enb-stylus/issues/65
[#67]: https://github.com/enb-make/enb-stylus/issues/67
[#68]: https://github.com/enb-make/enb-stylus/issues/68
[#71]: https://github.com/enb-make/enb-stylus/issues/71
[#73]: https://github.com/enb-make/enb-stylus/issues/73
[#90]: https://github.com/enb-make/enb-stylus/issues/90
