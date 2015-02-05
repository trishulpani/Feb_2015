import java.util.stream.*;

public class SomeJava8Code{
	public static void main(String[] args){
		Stream.of(1,2,3,34,5,15,6,7,8)
				.filter(i->{return i%2==0;})
				.forEach(System.out::println);	
						
		Math adder = (a,b) -> {return a+b;};
		
		System.out.println(adder.sum(12,45));
	}
}
interface Math{
	int sum(int a, int b);
}