


function letsCallItMain( ) {

    var Test = require('./Test.js')['Test'];
    var test = new Test();

    var three = 3;
    var other = '3';

    test.assertEqual(three, three, "Asserting same object three is equal.");
    test.assertEqual(three, other, "Asserting different objects are equal. WANT FAILURE.");
    
    test.getReport();

} letsCallItMain();