function solution(s1, s2) {
    var answer = 0;
    for (var i of s1) {
        for (var j of s2) {
            if (i == j)
                answer++;
        }
    }
    return answer;
}