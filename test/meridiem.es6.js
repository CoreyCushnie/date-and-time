import expect from 'expect.js';
import date from '../date-and-time';
import '../plugin/meridiem';

const A = ['a.m.', 'p.m.'],
    a = ['A.M.', 'P.M.'],
    AA = ['AM', 'PM'],
    aa = ['am', 'pm'];

describe('extended meridiem', () => {
    before(() => {
        date.plugin('meridiem');
    });

    it('A, ante meridiem', () => {
        const now = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'A')).to.equal(A[0]);
    });
    it('A, post meridiem', () => {
        const now = new Date(2019, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'A')).to.equal(A[1]);
    });
    it('a, ante meridiem', () => {
        const now = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'a')).to.equal(a[0]);
    });
    it('a, post meridiem', () => {
        const now = new Date(2019, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'a')).to.equal(a[1]);
    });
    it('AA, ante meridiem', () => {
        const now = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'AA')).to.equal(AA[0]);
    });
    it('AA, post meridiem', () => {
        const now = new Date(2019, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'AA')).to.equal(AA[1]);
    });
    it('aa, ante meridiem', () => {
        const now = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'aa')).to.equal(aa[0]);
    });
    it('aa, post meridiem', () => {
        const now = new Date(2019, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'aa')).to.equal(aa[1]);
    });
    it('parse a.m.', () => {
        const now = new Date(1970, 0, 1, 0, 34);
        expect(date.parse('00:34 a.m.', 'hh:mm A')).to.eql(now);
    });
    it('parse p.m.', () => {
        const now = new Date(1970, 0, 1, 12, 34);
        expect(date.parse('00:34 p.m.', 'hh:mm A')).to.eql(now);
    });
    it('parse A.M.', () => {
        const now = new Date(1970, 0, 1, 0, 34);
        expect(date.parse('00:34 A.M.', 'hh:mm A')).to.eql(now);
    });
    it('parse P.M.', () => {
        const now = new Date(1970, 0, 1, 12, 34);
        expect(date.parse('00:34 P.M.', 'hh:mm A')).to.eql(now);
    });
    it('parse AM', () => {
        const now = new Date(1970, 0, 1, 0, 34);
        expect(date.parse('00:34 AM', 'hh:mm A')).to.eql(now);
    });
    it('parse PM', () => {
        const now = new Date(1970, 0, 1, 12, 34);
        expect(date.parse('00:34 PM', 'hh:mm A')).to.eql(now);
    });
    it('parse am', () => {
        const now = new Date(1970, 0, 1, 0, 34);
        expect(date.parse('00:34 am', 'hh:mm A')).to.eql(now);
    });
    it('parse pm', () => {
        const now = new Date(1970, 0, 1, 12, 34);
        expect(date.parse('00:34 pm', 'hh:mm A')).to.eql(now);
    });
});
