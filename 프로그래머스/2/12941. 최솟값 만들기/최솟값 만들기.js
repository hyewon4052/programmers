function solution(A,B){
    var answer = 0;
    // 배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합 (배열의 길이만큼 반복)
    //  두 수를 곱한 값을 누적하여 더합니다. 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표
    A.sort((a,b)=>a-b);
    B.sort((a,b)=> b-a);
    
    for (var i = 0; i < A.length; i++){
         answer += A[i] * B[i];
    }
    return answer;
}