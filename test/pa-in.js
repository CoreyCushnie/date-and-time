(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../date-and-time'),
        forEach = function (array, fn) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (fn(array[i], i) === 0) {
                    break;
                }
            }
        },
        MMMM = ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
        MMM = ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
        dddd = ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨੀਚਰਵਾਰ'],
        ddd = ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁਧ', 'ਵੀਰ', 'ਸ਼ੁਕਰ', 'ਸ਼ਨੀ'],
        dd = ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁਧ', 'ਵੀਰ', 'ਸ਼ੁਕਰ', 'ਸ਼ਨੀ'],
        A = ['ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ', // 0 - 3
            'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ',   // 4 - 9
            'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', // 10 - 16
            'ਸ਼ਾਮ', 'ਸ਼ਾਮ', 'ਸ਼ਾਮ',   // 17 - 19
            'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ'];    // 20 - 23

    if (typeof require === 'function') {
        require('../locale/pa-in');
    }

    describe('format with "pa-in"', function () {
        before(function () {
            date.locale('pa-in');
        });

        forEach(MMMM, function (m, i) {
            it('"MMMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'MMMM')).to.equal(m);
            });
        });
        forEach(MMM, function (m, i) {
            it('"MMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'MMM')).to.equal(m);
            });
        });
        forEach(dddd, function (d, i) {
            it('"dddd" equals to "' + d + '"', function () {
                var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
                expect(date.format(now, 'dddd')).to.equal(d);
            });
        });
        forEach(ddd, function (d, i) {
            it('"ddd" equals to "' + d + '"', function () {
                var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
                expect(date.format(now, 'ddd')).to.equal(d);
            });
        });
        forEach(dd, function (d, i) {
            it('"dd" equals to "' + d + '"', function () {
                var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
                expect(date.format(now, 'dd')).to.equal(d);
            });
        });
        forEach(A, function (a, i) {
            it('"A" equals to "' + a + '"', function () {
                var now = new Date(2016, 0, 1, i, 34, 56, 789);
                expect(date.format(now, 'A')).to.equal(a);
            });
        });
        it('numeric expression', function () {
            var now = new Date(2016, 0, 1, 2, 34, 56, 789),
                str = '੨੦੧੬੦੧੦੧੦੨੩੪੫੬੭੮੯';
            expect(date.format(now, 'YYYYMMDDHHmmssSSS')).to.equal(str);
        });

        after(function () {
            date.locale('en');
        });
    });

    describe('parse with "pa-in"', function () {
        before(function () {
            date.locale('pa-in');
        });

        forEach(MMMM, function (m, i) {
            it('"MMMM"', function () {
                var now = new Date(1970, i, 1);
                expect(date.parse(m, 'MMMM')).to.eql(now);
            });
        });
        forEach(MMM, function (m, i) {
            it('"MMM"', function () {
                var now = new Date(1970, i, 1);
                expect(date.parse(m, 'MMM')).to.eql(now);
            });
        });
        forEach(A, function (a, i) {
            it('h A', function () {
                var now = new Date(1970, 0, 1, i);
                expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
            });
        });
        it('numeric expression', function () {
            var now = new Date(2016, 0, 1, 2, 34, 56, 789),
                str = '੨੦੧੬੦੧੦੧੦੨੩੪੫੬੭੮੯';
            expect(date.parse(str, 'YYYYMMDDHHmmssSSS')).to.eql(now);
        });

        after(function () {
            date.locale('en');
        });
    });

}(this));
