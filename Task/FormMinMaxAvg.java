import java.util.Scanner;

class FormMinMaxAvg 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);

		System.out.println("**********************");
		System.out.println("*       반평균       *");
		System.out.println("**********************");
		System.out.println();
		
		System.out.print("입력받을 반의 개수 (2~4) ==> ");
		int ClassCount = sc.nextInt();

		while (ClassCount < 2 || ClassCount > 4)
		{	
			System.out.println();
			System.out.println("[ 입력 가능한 반은 2~4반입니다. 다시 입력해주세요. ]");
			System.out.print("입력받을 반의 개수 (2~4) ==> ");
			ClassCount = sc.nextInt();
		}
		System.out.println("[ 총 "+ ClassCount + "개의 반이 존재합니다. ]");
		System.out.println();
		
		
		int count = 1;
		int[] GetScore = new int[ClassCount*2];
		for (int i = 1; i <= 2 ; i++ )
		{
			for (int j = 1 ; j <= ClassCount ; j++ )
			{
				System.out.print("[" + count + "] " + j + "반 학생 점수 입력 (0~100) ==> ");
				int score = sc.nextInt();
				GetScore[count-1] = score;
				
				while (score < 0 || score > 100)
				{
					System.out.println();
					System.out.println("[ 잘못된 범위의 점수가 입력되었습니다. 다시 입력해주세요. ]");
					System.out.print("[" + count + "] " + j + "반 학생 점수 입력 (0~100) ==> ");
					score = sc.nextInt();
				}
				count++;
			}
		}
		int max = 1;
		int min = 1;

		double [] ClassAverage = new double[ClassCount];
		for (int i = 0; i < ClassCount; i++)
		{
			ClassAverage[i] = (GetScore[i]+GetScore[i+ClassCount])/2;
		}

		for (int i = 1; i < ClassCount; i++)
		{
			if (ClassAverage[i-1] >= ClassAverage[i])
			{
				max = i;
			}
			if (ClassAverage[i-1] <= ClassAverage[i])
			{
				min = i;
			}
		}
		
		System.out.println();
		System.out.printf("[ 제일 잘한 반은 %d반이며, %d반의 평균 점수는 %.2f점으로, 제일 점수가 낮은 %d반의 평균인 %.2f보다 %.2f점 높습니다.", max, max, ClassAverage[max-1], min, ClassAverage[min-1], ClassAverage[max-1]-ClassAverage[min-1]);

	}
}
