
.echo start node_modules\.bin\mocha tests\a_test.js
.echo "-g '<regex>'"
.echo "-R (nyan | xunit | dot)"

.echo "start node_modules\.bin\mocha -R dot  -g "feature B" tests\*"

.echo "test" and "test-dot" are defined in gulfile.js
.echo "npm (test | test-dot)"


.echo "start" leave command window open
start npm test 
rem call npm test