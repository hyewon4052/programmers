function solution(n) {
    var answer = [];
    var num = 0;
    var a = n.toString().split("");
    for (var i = a.length-1; i >= 0; i--) {
        answer[num] = parseInt(a[i]);
        num++;
    }
    return answer;
}