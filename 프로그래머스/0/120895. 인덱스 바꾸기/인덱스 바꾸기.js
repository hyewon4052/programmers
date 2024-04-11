function solution(my_string, num1, num2) {
    var answer = '',a,b;
    my_string = my_string.split("");
    a = my_string[num1];
    b = my_string[num2];
    
    my_string[num1] = b;
    my_string[num2] = a;
    answer = my_string.join("");
    return answer;
}