function solution(myString) {
    var answer = '';
    myString.split("").forEach((a)=>{
        if (a == "a")
            answer += a.toUpperCase();
        else if (a != "A")
            answer += a.toLowerCase();
        else 
            answer += a;
    })
    return answer;
}