function solution(strArr) {
    var answer = [];
    strArr.filter((_,idx)=>{
        if (idx % 2 == 0)
            answer[idx] = strArr[idx].toLowerCase();
        else 
            answer[idx] = strArr[idx].toUpperCase();
    })
    return answer;
}