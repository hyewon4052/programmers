function solution(myString) {
    var answer = []
    myString.split("x").sort().forEach((a)=>{
        if (a.length != 0)
            answer.push(a);
    })
    return answer
}