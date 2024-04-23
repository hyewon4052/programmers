function solution(n) {
    var answer = [];
    while(true) {        
        answer.push(n);
        if (n % 2 == 0) {
            n /= 2;
        }
        else {
            n = 3*n+1        }
        
        if (n == 1)
            break;
    }
    answer.push(1)
    return answer;
}