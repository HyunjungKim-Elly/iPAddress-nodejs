package tech_test;
import java.util.Arrays;
import java.util.Scanner;

public class Recursive {
	
	public static void recursive(int[] arr, int index, int loop) {
		
		if(loop == 0) {
			System.out.println(Arrays.toString(arr));
			
		}else {
			if(index < 1) {
				loop--;
				recursive(arr, arr.length-1, loop);
			}else {				
				if(arr[index] > arr[index-1]) {
					int temp = arr[index -1];
					arr[index-1] = arr[index]; 
					arr[index]=temp;
				}
				recursive(arr, index-1, loop);
			}
		}
 
		
	}

	public static void main(String[] args) {
		
		int size;
		Scanner sc = new Scanner(System.in);
		
		System.out.print("How many digits you want to add?\n");
		size = sc.nextInt();
		
		int [] num = new int[size];
		
		System.out.print("Enter digits\n");
		
		for(int i=0; i<size; i++) {
			num[i]= sc.nextInt();
		}

		recursive(num, size-1, size);
			
	}
}
