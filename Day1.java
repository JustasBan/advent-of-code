import java.util.ArrayList;
import java.util.List;

//first day

public class Day1 {  
    public static void main1(String[] args)
    { 
        int[] input ={
            199,
            200,
            208,
            210,
            200,
            207,
            240,
            269,
            260,
            263
        };

        int increases = 0;
        List<Integer> list = new ArrayList<Integer>();  

        for(int i = 0; i < input.length-2; i++){

            list.add(input[i]+input[i+1]+input[i+2]);
        }

        for(int i = 1; i < list.size(); i++){

            if(list.get(i) > list.get(i-1)){
                increases++;
            }
        }

        System.out.println(increases);
    }
}
