function solution(n) {
    var answer = 0;
    if (n % 2 === 0) {
        for (var i = 1; i <= n; i++) {
            if (i % 2 === 0)
                answer += i*i;
        }
    }
    else {
        for (var i =1; i <= n; i++) 
            if (i % 2 === 1)
                answer += i;
    }
    return answer;
}