function solution(s) {
    var answer = '';
    let arr = s.split(' ').map(Number);
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    answer += min + " " + max;
    return answer;
}