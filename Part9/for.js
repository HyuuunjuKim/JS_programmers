//for문은 가장 많이 사용되는 반복문

var array = [1, 2, 3, 4, 5, 6,7,8,9,10];

/* while문으로 작성 시
var i = 0;
while( i < array.length ) { //조건식

    // 반복 실행된 코드
    console.log( array[i]);

    i++; 
}
*/

for ( var i = 0 ; i<array.length ; i++) {
    // 반복 실행된 코드
    console.log( array[i]);

// for문의 경우는 continue를 만나면 i++을 먼저 실행하고 반복 조건식을 검사
}