function solution(progresses, speeds) {
    var answer = [];
    var day = progresses.map((n,idx)=> Math.ceil((100-n)/speeds[idx]));
   
    var current = day[0];
    var count = 0;
    for (var i = 0; i < day.length; i++){
        if ( day[i] <= current ){
            count += 1;
        }
        else {
            answer.push(count);
            current = day[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}