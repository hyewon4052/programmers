function solution(a, b, n) {
    let totalCola = 0; 
    let answer = n;    
    
    while (answer >= a) {
        let newCola = Math.floor(answer / a) * b; 
        totalCola += newCola;  

        answer = (answer % a) + newCola; 
    }
    
    return totalCola; 
}
