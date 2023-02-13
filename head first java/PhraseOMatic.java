public class PhraseOMatic {
    public static void main(String[] args) {
        // three sets of words to choose from
        String[] wordListOne = {"24/7", "java", "javaScript", "react", "back-end dev","front-end dev", "+devs2blu","30,000 foot", "win-win", "sigma"};

        String[] wordListTwo = {"empowered", "sticky", "oriented", "centric", "macOS", "network", "shared", "leveraged", "aligned", "cooperative", "focused", "branded"};

        String[] wordListThree = {"process", "focus", "portal", "barbecue", "strategy", "mission", "mind-share", "space", "solution", "vision", "communication"};

        // find out how many words are in each list
        int oneLength = wordListOne.length;
        int twoLength = wordListTwo.length;
        int threeLength = wordListThree.length;

        // generate three random numbers
        int rand1 = (int) (Math.random() * oneLength);
        int rand2 = (int) (Math.random() * twoLength);
        int rand3 = (int) (Math.random() * threeLength);

        // build a phrase
        String phrase = wordListOne[rand1] + " " +wordListTwo[rand2] + " " + wordListThree[rand3];

        System.out.println("What we need is a " + phrase );
    }




}
