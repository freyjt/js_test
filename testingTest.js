


function letsCallItMain( ) {

    var Test = require('./Test.js')['Test'];
    var test = new Test();

    var three = 3;
    var other = '3';
    var two   = '2';
    test.assertEqual(three, three, "Asserting same object three is equal.");
    test.assertEqual(three, other, "Asserting different objects are equal. WANT FAILURE.");
    test.assertEquallish(three, other, "Assserting different objects are equallish.");
    test.assertNotEqual(three, other, "Asserting different objects are not equal.");
    test.assertNotEqual(three, three, "Asserting same object not Equal. WANT FAILURE.");
    test.assertNotEquallish(three, two, "Asserting different object representations are not equallish");
    test.assertNotEquallish(three, other, "Asserting different object representations of\n same number are not equallish. WANT FAILURE.");
    test.assertType('string', other, "Asserting other is of type string.");
    test.assertType('number', other, "Asserting string, other, is of type number. WANT FAILURE");

    
    test.getReport();

} letsCallItMain();