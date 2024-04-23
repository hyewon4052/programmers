function solution(num_list) {
    var answer = 0;
    var num1 = "", num2 = "";
    num_list.forEach((a, idx) => {
        if (a % 2 === 0) num1 += a.toString();
        else if (a % 2 === 1) num2 += a.toString();
    });
    return parseInt(num1) + parseInt(num2);
}