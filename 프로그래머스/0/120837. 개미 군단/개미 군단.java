class Solution {
    public int solution(int hp) {
        int answer = 0;
        while(hp>0){
            if(hp>4) {
                hp -= 5;
            }
            else if(hp < 4 && hp > 2) {
                hp-= 3;
            }
            else {
                hp -= 1;
            }
            answer++;
        }
        return answer;
    }
}