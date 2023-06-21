class Light 
{
	public static void main(String[] args) 
	{
		long light = 300000;
		for ( int s = 1 ; s <= 60 ; s++ )
		{
			for (int m = 1 ; m <= 60 ; m++ )
			{
				for (int h = 1; h <= 24; h++ )
				{
					light += 300000;
				}
			}
		}
		System.out.println("빛이 하루 동안 가는 거리 : " + light);
	}
}
