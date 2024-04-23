function solution(strArr) {
    var answer = [];
    strArr.forEach((a)=>{
        if (a.indexOf("ad") == -1 ) {
            answer.push(a)
        }
    })
    return answer;
}