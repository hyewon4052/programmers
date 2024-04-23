function solution(my_string) {
    var answer = [];
    my_string.split(" ").forEach((a)=> {
        if (a != "") 
            answer.push(a);
    })
    
    return answer;
}