function solution(number) {
    var answer = 0;
    for (var i = 0; i < number.length; i++ ) {
        for (var j = 1; j < number.length; j++) {
            for (var z = 1 ; z < number.length; z++) {
                if (number[i] + number[i + j] + number[i + j+z] == 0)
                    answer++;
            }
        }
    }
    return answer;
}