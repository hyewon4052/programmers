class ForTest10_1 
{
	public static void main(String[] args) 
	{
		int num = 1;
		for (int i = 1; i <= 5; i++ )
		{
			for (int j = 1; j <= 5; j++)
			{
				num += 1;
				System.out.print(num);
			}
			num -= 4;
			System.out.println();
		}
	}
}
