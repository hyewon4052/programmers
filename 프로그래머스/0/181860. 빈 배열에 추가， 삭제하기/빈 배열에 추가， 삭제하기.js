function solution(arr, flag) {
    var answer = [];
    arr.forEach((a,idx)=>{
        if (flag[idx]==true){
            for(var i = 0; i < a*2; i++){
                answer.push(a);
            }
        }
        else 
            answer.splice(-a);
    })
    return answer;
}