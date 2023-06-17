import java.util.Scanner;

class Prime 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.print("n을 입력하세요 : ");
		int n = sc.nextInt();
		
		for (int i=2; i < n ; i++ )
		{
			if (n % i == 0)
			{
				System.out.println(n + "는 소수가 아닙니다.");
				break;
			}
			else
			{	
				System.out.println(n + "는 소수입니다.");
				break;
			}
		}
	}
}
