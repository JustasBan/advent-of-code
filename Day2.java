//2nd day

public class Day2 {
    public static void main(){

        String[] input={
            "forward 5",
            "down 5",
            "forward 8",
            "up 3",
            "down 8",
            "forward 2"
        };

        int horizont = 0, depth = 0, aim = 0;

        for (String string : input) {

            int num = Integer.parseInt(string.split(" ")[1]);
            
            if(string.contains("forward")){

                horizont += num;
                depth += (aim * num);
            }
            else{

                if(string.contains("down")){

                    aim += num;
                }
                else{

                    if(string.contains("up")){
                        aim -= num;
                    }
                }
            }
        }

        System.out.println(horizont*depth);
    }
}
