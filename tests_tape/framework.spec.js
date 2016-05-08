import test from 'blue-tape'

const t = (name, cb) => test(`- ${name}`, cb)

t('nested test', function (a) {
    const tt = (name, cb) => a.test(`-- ${name}`, cb)

    tt('test a', function (aa) {
        aa.plan(1);
        aa.equal(1+3, 4, '4 equals 4');
    });

    tt('test b', function (aa) {
        aa.plan(1);
        aa.equal(2+3, 5, '5 equals 3');
    });

    tt('test c', function (aa) {
        aa.plan(1);
        aa.equal(2+3, 5, '5 equals 5');
    });
});
