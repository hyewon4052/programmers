function solution(sides) {
    var answer=1, sum = 0;
   sides.sort(function(a,b){
       return a-b;
   })
    for (var i of sides)
        sum += i;
    if ((sum - sides[2]) <= sides[2])
        answer = 2;

    return answer;
}