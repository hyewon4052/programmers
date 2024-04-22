function solution(x) {
    var answer = false;
    var im = x.toString().split("").map(Number).reduce((a,b)=>a+b);
    if (x % im === 0) {
        answer = true
    }
    return answer;
}