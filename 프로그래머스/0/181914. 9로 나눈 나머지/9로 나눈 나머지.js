function solution(number) {
    var answer = 0;
    answer = number.split("").map(Number).reduce((a,b)=>a+b)
    answer %= 9
    return answer;
}