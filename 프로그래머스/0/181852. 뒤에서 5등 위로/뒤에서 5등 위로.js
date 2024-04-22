function solution(num_list) {
    var answer = [];
    return num_list.sort((a,b)=>a-b).reverse().splice(0,num_list.length-5).reverse()
    
}