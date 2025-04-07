function solution(clothes) {
    var answer = 1;
    
    let map = new Map();
    for(let i = 0; i < clothes.length; i++) {
        map.set(clothes[i][1],map.get(clothes[i][1]) ? map.get(clothes[i][1]) +1 : 1 );        
    }
    for (let [key,value] of map ) {
        answer *= value + 1
    }
    return answer-1;
}