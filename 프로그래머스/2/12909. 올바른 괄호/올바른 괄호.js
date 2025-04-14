function solution(s){
    var answer = true;
    
    s = s.split("");
    var ibucket = 0;
    
    for (var i = 0; i <= s.length; i++) {
        if ( s[i] === '(') {
            ibucket += 1;
        }
        else if ( s[i] === ')'){
            ibucket -= 1;
        }
        
        if ( ibucket < 0) return false;
    }
    if (ibucket !== 0) return false;
    return answer;
}