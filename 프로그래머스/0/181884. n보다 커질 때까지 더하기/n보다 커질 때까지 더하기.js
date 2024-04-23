function solution(numbers, n) {
    var answer = 0;
    numbers.some((a)=>{
        answer+=a;
        if(answer > n)
            return true;
    })
    return answer;
}