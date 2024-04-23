function solution(a, b) {
    var answer = 0;
    var num1 = a.toString()+b.toString();
    var num2 = 2*a*b;
    if (num1 >= num2)
        answer = parseInt(num1);
    else if (num1 < num2)
        answer = num2;
    
    return answer;
}