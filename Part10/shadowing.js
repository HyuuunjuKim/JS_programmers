function shadowing_example() {
    var val = 0; // 2.
    console.log("F", val);
    val++; // 4. 함수 속 val = 1이됨
}

var val = 0; //3. 바깥 쪽 val은 위 함수가 실행되는 동안 가려짐 // 5. 바깥 val은 여전히 0
shadowing_example();
console.log("0", val); //1.val = 1 이었다가 함수 안에 똑같은 변수 선언되자 val = 0