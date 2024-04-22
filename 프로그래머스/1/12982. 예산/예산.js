function solution(d, budget) {
    var answer = 0;
    var total = 0;
    d.sort((a,b)=>a-b).some((a)=> {
        budget -= a
        if (budget < 0) {
            return true;
        }
        answer++;
            
    })
        
    return answer;
}