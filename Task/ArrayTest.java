import java.util.Scanner;

class ArrayTest
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in) ;

		int[]num = new int[3];
		for (int i = 0 ; i < num.length; i++)
		{
			System.out.print("수를 입력하시오  : ");
			int n = sc.nextInt();
			num[i] = n;
		}
		for (int i = 0; i < num.length ; i++)
		{
			System.out.println(num[i]);
		}
	}
}
