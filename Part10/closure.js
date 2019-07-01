function makeCountFunction(initVal) {
    var count = initVal;
    function Increase() {
        count++;
        console.log(count);
    }
}