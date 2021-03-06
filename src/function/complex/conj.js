/**
 * Compute the complex conjugate of a complex value.
 * If x = a+bi, the complex conjugate is a-bi.
 * @param {Number | Complex | Array | Matrix | Range} x
 * @return {Number | Complex | Array | Matrix} res
 */
function conj(x) {
    if (arguments.length != 1) {
        throw newArgumentsError('conj', arguments.length, 1);
    }

    if (isNumber(x)) {
        return x;
    }

    if (x instanceof Complex) {
        return new Complex(x.re, -x.im);
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range) {
        return util.map(x, conj);
    }

    if (x.valueOf() !== x) {
        // fallback on the objects primitive value
        return conj(x.valueOf());
    }

    throw newUnsupportedTypeError('conj', x);
}

math.conj = conj;

/**
 * Function documentation
 */
conj.doc = {
    'name': 'conj',
    'category': 'Complex',
    'syntax': [
        'conj(x)'
    ],
    'description':
        'Compute the complex conjugate of a complex value. ' +
            'If x = a+bi, the complex conjugate is a-bi.',
    'examples': [
        'conj(2 + 3i)',
        'conj(2 - 3i)',
        'conj(-5.2i)'
    ],
    'seealso': [
        're',
        'im',
        'abs',
        'arg'
    ]
};
