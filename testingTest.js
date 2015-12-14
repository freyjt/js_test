


function letsCallItMain( ) {

    var Test = require('./Test.js')['Test'];
    var test = new Test();

    var three = 3;
    var ohter = '3';

    test.assertEqual(three, three, "Asserting same object three is equal.");

    test.getReport();
} letsCallItMain();8