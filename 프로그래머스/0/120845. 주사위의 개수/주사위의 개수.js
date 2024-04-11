function solution(box, n) {
    var answer = 1;
    for (var i of box) {
        answer *= parseInt(i / n);
    }
    return answer;
}