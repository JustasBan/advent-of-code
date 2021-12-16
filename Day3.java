import java.util.ArrayList;
import java.util.List;

//3rd day

public class Day3 {
    public static void main(String[] args){
    
        String[] input = {
            "00100",
            "11110",
            "10110",
            "10111",
            "10101",
            "01111",
            "00111",
            "11100",
            "10000",
            "11001",
            "00010",
            "01010"
        };

        List<String> listOxy = new ArrayList<String>();  
        List<String> listCO2 = new ArrayList<String>();  

        for (String string : input1) {
            listOxy.add(string);
            listCO2.add(string);
        }
        
        String oxygen_bin = "", co2_bin = "";
        Character one = '1', zero = '0';
        int len = listOxy.get(0).length();

        for (int i = 0; i < len; i++) {

            int zeros = 0, ones = 0;

            //calc numbers in column i in oxy list
            for (int j = 0; j< listOxy.size(); j++){

                if(one.equals(listOxy.get(j).charAt(i))){
                    ones++;
                }
                else{
                    zeros++;
                }
            }

            //filter out the listOxy
            List<String> newlistOxy = new ArrayList<String>();

            if(ones>zeros){

                if(listOxy.size() != 0){

                    for (String string : listOxy) {

                        if(one.equals(string.charAt(i))){

                            newlistOxy.add(string);
                        }
                    }
                }
            }
            else{

                if(ones<zeros){
                    
                    if(listOxy.size() != 0){

                        for (String string : listOxy) {

                            if(zero.equals(string.charAt(i))){
                            
                                newlistOxy.add(string);
                            }
                        }
                    }
                }
                else{

                    if(listOxy.size() != 0){
                        
                        for (String string : listOxy) {

                            if(one.equals(string.charAt(i))){

                                newlistOxy.add(string);
                            }
                        }
                    }
                }
            }

            if(listOxy.size() > 1)
                listOxy = newlistOxy;
            
            System.out.println(listOxy.toString());

        }

        for (int i = 0; i < len; i++) {

            int zeros = 0, ones = 0;

            //calc numbers in column i in co2 list
            for (int j = 0; j< listCO2.size(); j++){

                if(one.equals(listCO2.get(j).charAt(i))){
                    ones++;
                }
                else{
                    zeros++;
                }
            }

            //filter out the co2 list
            List<String> newlistCO2 = new ArrayList<String>();

            if(ones>zeros){

                if(listCO2.size() > 1){

                    for (String string : listCO2) {

                        if(zero.equals(string.charAt(i))){

                            newlistCO2.add(string);
                        }
                    }
                }
            }
            else{

                if(ones<zeros){
                    
                    if(listCO2.size() > 1){

                        for (String string : listCO2) {

                            if(one.equals(string.charAt(i))){
                            
                                newlistCO2.add(string);
                            }
                        }
                    }
                }
                else{

                    if(listCO2.size() > 1){
                        
                        for (String string : listCO2) {

                            if(zero.equals(string.charAt(i))){

                                newlistCO2.add(string);
                            }
                        }
                    }
                }
            }

            if(listCO2.size() > 1)
                listCO2 = newlistCO2;

            System.out.println(listCO2.toString());
        }

        oxygen_bin = listOxy.get(0);
        co2_bin = listCO2.get(0);

        int oxygen = Integer.parseInt(oxygen_bin, 2),
            co2 = Integer.parseInt(co2_bin, 2);

            System.out.println(oxygen*co2);
    }
}
