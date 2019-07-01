var obj = {
    name: "object",
    weight : 30,
    isObject: true,
    arr: [1,2,3],
    obj: {peoperty:1},
};

//for문
console.log("For문으로 object property 반복하기")

var property_list = Object.keys(obj); //Object.keys함수로 함수의 속성 배열 생성
console.log("Property List : ", property_list);

for ( var i=0 ; i<property_list.length ; i++ ) {
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName] );
}

//for_in 구문 사용

console.log("\n\nFor in 구문으로 object property 반복하기");

for ( var propertyName in obj) {
    console.log ("\t", propertyName, ": ", obj[propertyName]);
}