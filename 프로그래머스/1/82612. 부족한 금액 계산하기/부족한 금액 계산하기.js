function solution(price, money, count) {
    var answer ,sum=0;
    for (var i = 1; i <= count; i++) {
        sum+= price*i;
    }
    answer = money-sum;
    if (answer >= 0)
        return 0;
    else
        return (-1)*answer;
}