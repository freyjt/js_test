# js_test

A simple object for testing javascript objects.

<p>Simple is an understatement. All you have here are assertions that will accept objects and descriptions.

<p>Methods of use:
<ul>
<li>assertEqual(objectOne, objectTwo, description)<br/>
    fails on any two objects that are not strictly equal</li>
<li>assertNotEqual(objectOne, objectTwo, description)<br/>
    fails on any two objects that are unequal in anyway</li>
<li>assertEquallish(objectOne, objectTwo, description)<br/>
    fails if two objects are unequal <em>with coercion</em></li>
<li>assertNotEquallish(objectOne, objectTwo, description)<br/>
    fails if two objects are the same after coercion</li>
<li>assertType(typeString, object, description)<br/>
    fails if one object is not the type given by typestring</li>
<li><strong>getReport()</strong><br/>
    console.log all <em>failed</em> tests, with descriptions, and<br/>
    a simple status report for failure rate</li>
<li><strong>printPassed()</strong><br/>
    console.log all passed tests.</li>