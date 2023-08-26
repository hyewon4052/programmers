import java.util.Scanner;

class Str 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		String st1 = " ";
		String st2 = " ";

		System.out.print("문자를 입력하세요. : ");
		st1 = sc.next();
		System.out.print("문자를 입력하세요. : ");
		st2 = sc.next();
		System.out.println(st2 + " " + st1);
	}
}
