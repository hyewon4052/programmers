function solution(strlist) {
    var answer = [];
    for (var i in strlist) {
        answer[i] = strlist[i].length;
    }
    return answer;
}