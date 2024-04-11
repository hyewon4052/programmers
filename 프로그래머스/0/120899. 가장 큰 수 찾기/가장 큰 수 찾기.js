function solution(array) {
    var answer = [], len;
    let max = Number.MIN_SAFE_INTEGER;
    for (var i in array) {
        if (array[i] > max) {
            max = array[i];
            len = parseInt(i);
        }    
    }
    answer[0] = max;
    answer[1] = len;
    return answer;
}