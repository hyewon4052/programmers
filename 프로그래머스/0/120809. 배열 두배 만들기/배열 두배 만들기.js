function solution(numbers) {
    var answer = [];
    for (i in numbers) {
        answer[i] = numbers[i]*2
    }
    return answer;
}