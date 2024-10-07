test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1.07 dollar should be 156.5 yen", function() {

    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(2.14);

    // Si 1.07 dólares son 156.5 yenes, entonces 2.14 dolares debe ser ((2.14 * 156.5)/1.07)
    const expected = (2.14 * 156.5) / 1.07;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(2.14)).toBe(313);
})

test("156.5 yen should be 0.87 pound", function() {

    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(313);

    // Si 156.5 yenes son 0.87 ound, entonces 313 yenes debe ser ((313 * 0.87)/156.5)
    const expected = (313 * 0.87) / 156.5;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(313)).toBe(1.74);
})