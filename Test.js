module.exports = {
    Test: Test
}

function Test( ) {

    this.failedTests = [];
    this.passedTests = [];

}

Test.prototype.assertEqual = function( thingOne, thingTwo, descriptor ) {

    if(typeof(descriptor) === 'undefined') {
        descriptor === "";
    }

    if( thingOne === thingTwo ) {
        this.addToPassed( "AssertEqual " + thingOne + " : " + thingTwo, descriptor);
    } else {
        this.addToFailed( "AssertEqual " + thingOne + " : " + thingTwo, descriptor);
    }
}


//Test if two things are equal with coercion
Test.prototype.assertEqualish = function( thingOne, thingTwo, descriptor ) {

    if(typeof(descriptor) === 'undefined') {
        descriptor === "";
    }
    if( thingOne == thingTwo ) {
        this.addToPassed( "AssertEqualish " + thingOne + " : " + thingTwo, descriptor);
    } else {
        this.addToFailed( "AssertEqualish " + thingOne + " : " + thingTwo, descriptor);
    }

}
