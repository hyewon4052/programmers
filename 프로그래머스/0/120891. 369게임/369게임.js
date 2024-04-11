function solution(order) {
    var answer = 0;
    order = order.toString().split("");
    for (var i of order) {
        if (i == 3|| i == 6|| i==9) {
            answer++;
        }
    }
    return answer;
}