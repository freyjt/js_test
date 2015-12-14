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