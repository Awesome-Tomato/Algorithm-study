import java.util.*;

class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        var dict = new HashMap<String,Integer>();
        paragraph = paragraph.toLowerCase().replaceAll("[^a-z]"," ");

        for(var word : paragraph.split("\\s+")){
            dict.put(word, dict.getOrDefault(word, 0)+1);
        }
        for(var banWord : banned){
            dict.remove(banWord);
        }
        // System.out.println(dict);

        // return dict.entrySet().stream().max((m1, m2) -> m1.getValue() > m2.getValue() ? 1 : -1).get().getKey();
        return Collections.max(dict.entrySet(), Map.Entry.comparingByValue()).getKey();


    }
}