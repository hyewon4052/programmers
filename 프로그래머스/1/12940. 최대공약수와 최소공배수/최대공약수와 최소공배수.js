function solution(n, m) {
    var answer = [];
    var n1 = [], n2 = [];
    for (var i = 1; i <= n; i++) {
        if (n % i == 0 && m % i == 0)
            num1 = i;
    }
     num2 = (n*m / num1);
    answer = [num1,num2];
    return answer;
}