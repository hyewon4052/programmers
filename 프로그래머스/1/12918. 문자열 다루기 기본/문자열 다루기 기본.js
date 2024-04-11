function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 문자열의 모든 문자가 숫자인지 확인
    for (var i = 0; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') {
            return false;
        }
    }
    
    return true;
}
