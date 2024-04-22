function solution(arr) {
    var answer = [],n=0;
    
    n = Math.min(...arr)
    arr.splice(arr.indexOf(n),1);
    return arr < 2 ? [-1] : arr  

        
}