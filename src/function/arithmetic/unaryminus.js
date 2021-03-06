/**
 * Inverse the sign of a value. -x or unaryminus(x)
 * @param  {Number | Complex | Unit | Array | Matrix | Range} x
 * @return {Number | Complex | Unit | Array | Matrix} res
 */
function unaryminus(x) {
    if (arguments.length != 1) {
        throw newArgumentsError('unaryminus', arguments.length, 1);
    }

    if (isNumber(x)) {
        return -x;
    }
    else if (x instanceof Complex) {
        return new Complex(
            -x.re,
            -x.im
        );
    }
    else if (x instanceof Unit) {
        var res = x.clone();
        res.value = -x.value;
        return res;
    }

    if (x instanceof Array || x instanceof Matrix || x instanceof Range) {
        return util.map(x, unaryminus);
    }

    if (x.valueOf() !== x) {
        // fallback on the objects primitive value
        return unaryminus(x.valueOf());
    }

    throw newUnsupportedTypeError('unaryminus', x);
}

math.unaryminus = unaryminus;

/**
 * Function documentation
 */
unaryminus.doc = {
    'name': 'unaryminus',
    'category': 'Operators',
    'syntax': [
        '-x',
        'unaryminus(x)'
    ],
    'description':
        'Inverse the sign of a value.',
    'examples': [
        '-4.5',
        '-(-5.6)'
    ],
    'seealso': [
        'add', 'subtract'
    ]
};