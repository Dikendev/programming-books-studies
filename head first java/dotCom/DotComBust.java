package dotCom;

import java.util.ArrayList;
public class DotComBust {

    private static void main (String[] args) {
        DotComBust game = new DotComBust();
        game.setUpGame();
        game.startPlaying();
    }
    //declare and initialize the variables we`ll need
    private GameHelper helper = new GameHelper();
    private final ArrayList<DotCom> dotComsList = new ArrayList<DotCom>();
    private int numOfGuesses = 0;

    private void setUpGame() {
        //add three DotCom objects names and stick`em in the arrayList
        DotCom one = new DotCom();
        one.setName("Pets.com");
        DotCom two = new DotCom();
        two.setName("eToys.com");
        DotCom three = new DotCom();
        three.setName("Go2.com");
        dotComsList.add(one);
        dotComsList.add(two);
        dotComsList.add(three);

        // print brief instructions for user
        System.out.println("Your goal is to sink three dot cons.");
        System.out.println("Pets.com, etoys.com, Go2.com");
        System.out.println("Try to sink them all in the fewest number of guesses");

        for (DotCom dotComToSet: dotComsList) {                     // repeat with each DotCom in the list
            ArrayList<String> newLocation = helper.placeDotCom(3);  // ask the helper for a DotCom Location
            dotComToSet.setLocationCells(newLocation);              // call the setter method on DotCom
        }
    }

    private void startPlaying() {
        while(!dotComsList.isEmpty()) {                              // as long as the DotCom list is NOT empty
            String userGuess = helper.getUserInput("Enter a guess"); // get user input
            checkUserGuess(userGuess);                               // call checkUserGuess method
        }
        finishGame();   // call finishGame method
    }

    private void checkUserGuess(String userGuess) {
        numOfGuesses++;
        String result = "miss";

        for (Dotcom dotComToTest : dotComsList) {
            result = dotComToTest.checkYourself(userGuess);
            if (result.equals("hit")) {
                break;
            }
            if (result.equals("kill")) {
                dotComsList.remove(dotComToTest);
                break;
            }
        }
        System.out.println(result);
    }

    private void finishGame() {
        System.out.println("All Dot coms are dead! Your stock is now worthless");
        if (numOfGuesses <= 18) {
            System.out.println("It only took you " + numOfGuesses + " guesses") ;
            System.out.println("You got out before your options sank");
        } else {
            System.out.println("Took you long enough " + numOfGuesses + " guesses");
        }
    }
}