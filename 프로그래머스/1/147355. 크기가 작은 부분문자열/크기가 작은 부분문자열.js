function solution(t, p) {
    var answer = 0;
    var t_len = t.length;
    var p_len = p.length;
    
    for (var i = 0; i <= t_len-p_len; i++) {
        if (t.substr(i,p_len) <= p) answer++;
    }
    return answer;
    
    
}