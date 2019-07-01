/*
do_while문은 반복을 할지 말지를 마지막에 결정함
즉, 최소 한 번은 무조건 실행된다는 것
*/

var cond = false;

while(cond) {
    console.log("이 구문은 실행되지 않습니다")
}

do {
    console.log("이 구문은 한 번은 실행됩니다.")
}while(cond);

do {
    var ans = parseInt( prompt("1+1=?"));
} while (ans != 2);

console.log("맞췄습니다!");