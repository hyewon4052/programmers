function solution(my_string, letter) {
    var answer = '';
    my_string = my_string.split("");
    for (var i in my_string) 
        if (my_string[i] == letter)
            my_string[i] = "";
    answer = my_string.join("");
    return answer;
}