import java.util.Scanner;
class Fact_method 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int f=1;

		System.out.print("n을 입력하시오 : ");
		int n = sc.nextInt();
		for (int i = 1 ; i <= n ; i++)
		{
			f = f * i;
		}
			System.out.println(n+"! = " + f);
	}
}
