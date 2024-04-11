function solution(n) {
    var answer = 0;
    n=n.toString().split("");
    for (var i of n) {
        answer += parseInt(i)
    }
    return answer;
}