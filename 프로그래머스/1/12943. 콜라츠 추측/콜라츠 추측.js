function solution(n) {
    var answer = 0;
    while(true) {
        if (n == 1)
            break;
        if (n % 2 == 0)
            n /= 2;
        else if (n %2 == 1)
            n = n * 3 + 1;
        answer++;
        if (answer >= 500) 
            return -1
    }
    return answer;
}