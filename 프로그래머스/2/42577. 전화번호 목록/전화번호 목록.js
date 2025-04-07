function solution(phone_book) {
    var answer = true;
    
    let map = new Map();
    for (let i = 0; i < phone_book.length; i++) {
        map.set(phone_book[i],1);
    }
    for (let i = 0; i < phone_book.length; i++) {
        for (let j = 0; j < phone_book[i].length; j++) {
            var str = phone_book[i].slice(0,j);
            
            if (map.has(str)) return false;
        }
    }
    
    return answer;
}