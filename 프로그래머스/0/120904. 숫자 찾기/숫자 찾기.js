function solution(num, k) {
    var answer = 0;
    num = num.toString().split("");
    for (var i in num) {
        if (num[i] == k) {
            answer = parseInt(i)+1;
            break;
        }
        else 
            answer = -1;
    }
    return answer;
}