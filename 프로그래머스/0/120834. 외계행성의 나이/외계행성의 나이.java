class Solution {
    public String solution(int age) {
        String answer = "";
        String newage = Integer.toString(age);
        for ( int i = 0; i < newage.length(); i++ ){
            answer += (char)(newage.charAt(i)+49);
        }
        return answer;
    }
}