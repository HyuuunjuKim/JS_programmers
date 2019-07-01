var count = 0;

while (true) {

    var ans;
    ans = parseInt( prompt("1+1=?"));
    if (ans != 2) {
        console.log("틀렸습니다. 다시 도전하세요");
        continue;
    }

    ans = parseInt( prompt("7-3=?"));
    if (ans != 4) {
        console.log("틀렸습니다. 다시 도전하세요");
        continue;
    }

    ans = parseInt( prompt("9*7=?"));
    if (ans != 63) {
        console.log("틀렸습니다. 다시 도전하세요");
        continue;
    }
    break;

    //continue를 만나면 여기로 이동
}
//break를 만나면 여기로 이동

console.log("아주 굿이예요~굿~굿~굿~~!!!")