function solution(nums) {
    var answer = 0;
    
    let map = new Map();
    const cnt = nums.length / 2;
    
    for ( let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) ? map.get(nums[i])+1 : 1);
    }
    answer = map.size < cnt ? map.size : cnt ;
    
    return answer;
}