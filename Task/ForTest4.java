import java.util.Scanner;

class ForTest4 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int input,m;

		System.out.print("10 이하의 정수를 입력하세요 : ");
		input = sc.nextInt();
		if (input <= 10)
		{
			for (m = 0; m <input ; m++)
			{
				System.out.println("MSG");
			}
		}
		else 
		{
			System.out.println("해당 범위에 값이 들어있지 않습니다.");
		}
	}
}
