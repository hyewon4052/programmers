function solution(array) {
    var answer = 0;
    array = array.toString().split("");
    for (var i of array) {
        if (i == 7)
            answer++;
    }
    return answer;
}