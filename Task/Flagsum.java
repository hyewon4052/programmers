import java.util.Scanner;
class Flagsum
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int sw=0, sum=0;

		System.out.print("n을 입력하세요  : ");
		int n = sc.nextInt();

		for (int i = 0 ; i <= n ; i++ )
		{
			i = i + 1;
			if (sw == 0)
			{
				sum = sum + i;
				sw = 1;
			}
			else 
			{
				sum = sum - i;
				sw = 0;
			}
		}
		System.out.println("결과 : " + sum);
	}
}
