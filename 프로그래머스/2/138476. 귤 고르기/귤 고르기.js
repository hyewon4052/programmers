function solution(k, tangerine) {
    var answer = 0;
    // 같은 사이즈인 귤 수 세기
    var im = {};
    var total = 0;
    
    tangerine.forEach((x) => { 
      im[x] = (im[x] || 0)+1; 
    });
    var arr = Object.values(im).sort((a,b)=>b-a);
    
    for( var i of arr){
        if (total < k) {
            total += i;
            answer++;
        }
        else {
            continue;
        }
    }
    return answer;
}