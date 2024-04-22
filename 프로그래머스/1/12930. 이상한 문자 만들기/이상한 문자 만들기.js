function solution(s) {
    var answer = '';
    var array = s.split("");
    var index = 0;
    
    for(var i = 0; i < s.length; i++) {
        // 공백
        if (array[i] == " ") {
            answer += " ";
            index = 0
        }
        else {
            if (index % 2 == 0) {
                answer += array[i].toUpperCase();
            }
            
            if (index % 2 ==1) {
                 answer += array[i].toLowerCase();
            }
            index++;
        }
    }
    return answer;
}

