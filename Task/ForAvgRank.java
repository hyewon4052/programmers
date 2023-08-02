import java.util.Scanner;

class ForAvgRank
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
		
		if (ClassCount < 2 || ClassCount > 4)
		{	
			do
			{
				System.out.println();
				System.out.println("[ 입력 가능한 반은 2~4반입니다. 다시 입력해주세요. ]");
				System.out.print("입력받을 반의 개수 (2~4) ==> ");
				ClassCount = sc.nextInt();
			}
			while (ClassCount < 2 || ClassCount > 4);
		}

		System.out.print("입력받을 학생 수 (2~4) ==> ");
		int StudentCount = sc.nextInt();
		
		if (StudentCount < 2 || StudentCount > 4)
		{	
			do
			{
				System.out.println();
			System.out.println("[ 입력 가능한 학생 수는 2~4반입니다. 다시 입력해주세요. ]");
			System.out.print("입력받을 학생 수 (2~4) ==> ");
			StudentCount = sc.nextInt();
			}
			while (StudentCount < 2 || StudentCount > 4);
		}

		System.out.println();
		System.out.println("[ 총 "+ ClassCount + "개의 반이 존재합니다. ]");
		System.out.println("[ 각 학급별 학생 수는 "+ StudentCount + "명 입니다. ]");
		System.out.println();
		
		
		int count = 1;
		int[] GetScore = new int[ClassCount*StudentCount];
		for (int i = 1; i <= StudentCount ; i++ )
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
					GetScore[count-1] = score;
				}
				count++;
			}
		}
		int max = 0;
		int min = 0;
		int [] Rank = new int [ClassCount];
		double [] ClassAverage = new double[ClassCount];
		
		for (int i = 0; i < ClassCount; i++) 
		{ 
			double sum = 0;
			for (int j = 0; j < StudentCount; j++) 
			{
				sum += GetScore[i + j * StudentCount ];
			}
			ClassAverage[i] = sum / (double) StudentCount;
		}

	
		for (int i = 0; i < ClassCount; i++)
		{
			if (ClassAverage[i] > ClassAverage[max])
			{
				max = i;
			}
			else if (ClassAverage[i] <= ClassAverage[min])
			{
				min = i;
			}
		}

		for (int i = 0; i < ClassCount ; i++ )
		{
			Rank[i] = 1;
			for (int j = 0; j < ClassCount; j++)
			{
				if (ClassAverage[i] < ClassAverage[j])
				{
					Rank[i] += 1; 
				}
			}	
		}
		
		for (int i = 0; i < ClassCount ; i++)
		{
			System.out.println();
			System.out.printf("[%d반] 점수 : %.2f - [%d등]", i+1, ClassAverage[i], Rank[i] );
		}
		System.out.println();
		System.out.printf("[ 제일 잘한 반은 %d반이며, %d반의 평균 점수는 %.2f점으로, 제일 점수가 낮은 %d반의 평균인 %.2f보다 %.2f점 높습니다.", max+1, max+1, ClassAverage[max], min+1, ClassAverage[min], ClassAverage[max]-ClassAverage[min]);

	}
}