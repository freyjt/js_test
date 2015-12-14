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

Test.prototype.getReport = function( ) {
    if(this.failedTests.length >= 0) {
        var i;
        for(i = 0; i < this.failedTests.length; i++) {
            console.log("  **************************************************");
            console.log("   Test Failed:");
            console.log("     " + this.failedTests[i]);
            console.log("  **************************************************");
        }
    }
    var totalTests = this.passedTests.length + this.failedTests.length;
    var pPassed    = (this.passedTests.length * 100 / totalTests);
    console.log("  **************************************************");
    console.log("  Conducted " + totalTests + " tests.");
    console.log("    Passed " + this.passedTests.length + " tests.");
    console.log("     " + pPassed + " Percent passed");
    var status == (pPassed == 1) ? "green" : "red";
    console.log("    status: " + status);
    console.log("  **************************************************");
}