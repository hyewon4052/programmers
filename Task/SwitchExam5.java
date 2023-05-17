import java.util.Scanner;

class SwitchExam5
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int student_class;
		String department = " ";
		System.out.print("반 입력 : ");
		student_class = sc.nextInt();
		
			
		switch(student_class) {
		case 1 : case 2 :
			department = "뉴미디어소프트웨어과" ; break;
		case 3 : case 4 :
			department = "뉴미디어웹솔루션과" ; break;
		case 5 : case 6 :
			department = "뉴미디어디자인과" ; break;
		}
		System.out.println(student_class + "반은 " + department + "입니다.");

	}
}