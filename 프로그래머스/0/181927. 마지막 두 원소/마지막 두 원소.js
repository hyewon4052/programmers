function solution(num_list) {
    var answer = [];
    var n1 = num_list.slice(num_list.length-1,num_list.length)
    var n2 = num_list.slice(num_list.length-2,num_list.length-1)
    if (n1 > n2)
        num_list.push(n1-n2);
    else
        num_list.push(n1*2);
    return num_list;
    
}