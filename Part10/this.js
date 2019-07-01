/*
함수역시 객체의 속성이 될 수 있음.
객체 속성의 값으로서 함수가 들어가면 이러한 함수를 method라 부름
*/

function f() {
    //this는 함수 f가 불렸을 때 어떤 객체에 bind 된 속성으로 불렸는지 알게 해줌
    console.log(this);
    console.log ("f is called");
}

function setName(name) {
    this.name = name;
}

var o = { name: "object", method:f};
var o2 = {name:"", setName: setName};

o.setName("object1");
o2.setName("object2");

console.log( o, o2 ); 