function solution(s) {
    var answer = '';
    var length = s.length / 2
    
    if (s.length % 2 == 1) 
        answer = s.substr(length,1);
    else
        answer = s.substr(length-1,2);
    return answer;
}