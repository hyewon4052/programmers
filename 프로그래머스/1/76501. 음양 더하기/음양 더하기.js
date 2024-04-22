function solution(absolutes, signs) {
    var answer = 123456789;
    for (var i in signs) {
        if (signs[i] === false)
            absolutes[i] *= -1; 
    }
    answer = absolutes.reduce((a,b)=>a+b)
    return answer;
}