class Solution {
    public String solution(int[] numLog) {
        String answer = "";
        for ( int i = 1; i < numLog.length; i++ ) {
            int recent = numLog[i] - numLog[i-1];
            if( recent == 1 ) answer += "w";
            else if ( recent == -1 ) answer += "s";
            else if ( recent == 10 ) answer += "d";
            else if ( recent == -10 ) answer += "a";
        }
        return answer;
    }
}