import java.util.Scanner;

class Tax_calculate
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		
		double tax;
		long salary;
		tax = 0;
		System.out.print("연간 소득 입력 : ");
		salary = sc.nextLong();
		if (salary<=20000000)
		{
			tax = salary*0.05;
		}
		else if (salary>20000000 && salary<=40000000)
		{
			tax = salary*0.15;
		}
		else if (salary>40000000 && salary<=80000000)
		{
			tax = salary*0.25;
		}
		else {
			tax = salary*0.4;
		}
		System.out.println("근로 소득에 대한 소득세는" + tax + "입니다.");
	}
}