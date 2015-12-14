module.exports = {
    Test: Test
}

function Test( ) {
    //test interface is object
    // of the form {    test: string generated by test, 
    //                  user: string passed in by user}
    this.failedTests = [];
    this.passedTests = [];

}

//Test if two things are very equal
Test.prototype.assertEqual = function( thingOne, thingTwo, descriptor ) {
    if(typeof(descriptor) === 'undefined') {
        descriptor === "";
    }
    if( thingOne === thingTwo ) {
        this.addToPassed( "AssertEqual\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    } else {
        this.addToFailed( "AssertEqual\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    }
} //END assetEqual


//Test if two things are equal with coercion
Test.prototype.assertEquallish = function( thingOne, thingTwo, descriptor ) {

    if( thingOne == thingTwo ) {
        this.addToPassed( "AssertEquallish\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    } else {
        this.addToFailed( "AssertEquallish\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    }
} //END assertEquallish

//Test if two things are strictly not equivalent
Test.prototype.assertNotEqual = function( thingOne, thingTwo, descriptor ) {

    if(thingOne === thingTwo)
        this.addToFailed( "AssertNotEqual\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    else
        this.addToPassed( "AssertNotEqual\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
} //End assertNotEqual

//Test if two things are not equal, even after coercion
Test.prototype.assertNotEquallish = function( thingOne, thingTwo, descriptor ) {

    if( thingOne != thingTwo ) {
        this.addToPassed( "AssertNotEquallish\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    } else {
        this.addToFailed( "AssertNotEquallish\n     " + thingOne + " : " + typeof(thingOne) + "\n     "
            + thingTwo + " : " + typeof(thingTwo), descriptor);
    }
} //END assertNotEquallish

//Add a test to passedTests
Test.prototype.addToPassed = function(fromTest, fromUser) {
    var pusher = {};
    if(typeof(fromUser) !== 'undefined') {
        pusher.user = fromUser;
    }
    pusher.test = fromTest;

    this.passedTests.push(pusher);
} //END addToPassed

//Add a test to failedTests
Test.prototype.addToFailed = function(fromTest, fromUser) {
    var pusher = {};
    if(typeof(fromUser) !== 'undefined') {
        pusher.user = fromUser;
    }
    pusher.test = fromTest;
    this.failedTests.push(pusher);
} //END addToFailed

Test.prototype.getReport = function( ) {
    if(this.failedTests.length >= 0) {
        var i;
        for(i = 0; i < this.failedTests.length; i++) {
            console.log("  **************************************************");
            console.log("   Test Failed:");
            console.log("     " + this.failedTests[i].test);
            if( typeof(this.failedTests[i].user) !== 'undefined') {
                console.log("    " + this.failedTests[i].user)
            }
            console.log("  **************************************************");
        }
    }
    var totalTests = this.passedTests.length + this.failedTests.length;
    var pPassed    = (this.passedTests.length * 100 / totalTests);
    console.log("  **************************************************");
    console.log("  Conducted " + totalTests + " tests.");
    console.log("    Passed " + this.passedTests.length + " tests.");
    console.log("     " + pPassed + " Percent passed");
    var status = (pPassed == 100) ? "green" : "red";
    console.log("    status: " + status);
    console.log("  **************************************************");
}

Test.prototype.printPassed = function( ) {
    var i;
    for(i = 0; i < this.passedTests.length; i++) {
        console.log("  ************************************************")
        console.log("  " + this.passedTests[i]);
    }
}