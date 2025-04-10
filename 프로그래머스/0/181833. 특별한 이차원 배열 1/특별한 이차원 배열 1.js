function solution(n) {
    var answer = Array.from({ length: n }, () => []);
    for(var i = 0; i < n; i++){
        for (var j = 0; j < n; j++) {
            answer[i][j] = i === j ? 1 : 0; 
        }
    }
    return answer;
}