function solution(n) {
    var answer = 0;
    var max = Number.MAX_SAFE_INTEGER;
    var ch = n.toString(2).split('').filter(element => '1' === element).length;
    for (let i = n+1; i < max; i++){
        if(ch == i.toString(2).split('').filter(element => '1' ===element).length){
            return i;
            break;
        }
    }
}