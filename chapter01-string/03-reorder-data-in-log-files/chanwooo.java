class Solution {
    public String[] reorderLogFiles(String[] logs) {
        var myComp = new Comparator<String>() {
            @Override
            public int compare(String log1, String log2) {
                var split1 = log1.split(" ", 2);
                var split2 = log2.split(" ", 2);

                var isDigit1 = Character.isDigit(split1[1].charAt(0));
                var isDigit2 = Character.isDigit(split2[1].charAt(0));

                // case 1). both logs are letter-logs
                if (!isDigit1 && !isDigit2) {
                    // first compare the content
                    int cmp = split1[1].compareTo(split2[1]);
                    if (cmp != 0)
                        return cmp;
                    // logs of same content, compare the identifiers
                    return split1[0].compareTo(split2[0]);
                }

                // case 2). one of logs is digit-log
                if (!isDigit1 && isDigit2)
                    // the letter-log comes before digit-logs
                    return -1;
                else if (isDigit1 && !isDigit2)
                    return 1;
                else
                    // case 3). both logs are digit-log
                    return 0;


            }
        };

        Arrays.sort(logs, myComp);
        return logs;
    }

}