function solution(binomial) {
    var answer = 0;
    binomial = binomial.split(" ");
    if (binomial[1] == "+") 
        answer = parseInt(binomial[0]) + parseInt(binomial[2]);
    else if (binomial[1] == "-")
        answer = parseInt(binomial[0]) - parseInt(binomial[2]);
    else if (binomial[1] == "*")
        answer = parseInt(binomial[0]) * parseInt(binomial[2]);
    return answer;
}