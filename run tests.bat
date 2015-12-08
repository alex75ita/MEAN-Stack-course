
.echo start node_modules\.bin\mocha tests\a_test.js
.echo "-g '<regex>'"
.echo "-R (nyan | xunit | dot)"

start node_modules\.bin\mocha -R dot  -g "feature B" tests\* 
