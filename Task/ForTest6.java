import java.util.Scanner;
class ForTest6 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int c=0,i,input;

		System.out.println("정수 10개를 입력하세요: ");
		for (i = 0; i < 10; i++)
		{
			input = sc.nextInt();
			if (input % 3 == 0 || input % 5 == 0)
			{
				c++;
			}
		}
		System.out.println("3과 5의 배수의 개수: " + c);

	}
}
