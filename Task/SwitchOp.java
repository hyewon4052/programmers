import java.util.Scanner;

class  SwitchOp
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		String op = " ";
		String result;
		int num1, num2;
		System.out.print("수식 입력 (수와 연산자 사이는 공백을 둘 것) : ");
		num1 = sc.nextInt();
		op = sc.next();
		num2 = sc.nextInt();

		switch(op) {
		case "+" : 
			result = Integer.toString(num1 + num2); break;
		case "*" :
			result = Integer.toString(num1 * num2); break;
		case "/" : 
			result = Integer.toString(num1 / num2); break;
		case "-" :
			result = Integer.toString(num1 - num2); break;
		default : 
			result = "사칙 연산자가 아닙니다" ; 
		}
		System.out.println(num1 + " " + op + " " + num2 + " = " + result);
	}
}
