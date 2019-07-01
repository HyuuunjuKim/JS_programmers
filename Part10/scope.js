//scope란 선언된 변수가 어느 위치에서 유용한가를 말함
function a() {
    //a()라는 함수 안에서만 v_a 접근 가능
    var v_a="a";

    function b() {
        //b()라는 함수 안에서만 v_b 접근 가능
        var v_b = "b";
        console.log("b: ", typeof(v), typeof(v_a), typeof(v_b));
    }
    b();

    console.log("a: ", typeof(v), typeof(v_a), typeof(v_b));
}

//가장 밖에서 v가 선언되어 나머지 함수에서도 접근 가능 
var v = "v";

a();
console.log("o: ", typeof(v), typeof(v_a), typeof(v_b));