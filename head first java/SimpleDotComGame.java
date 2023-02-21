import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class SimpleDotComGame {
    int[] locationCells;
    int numOfHits = 0;

    public void setLocationsCells(int[] location) {
        locationCells = location;
    }

    public String checkYourself(String stringGuess) {
        int guess = Integer.parseInt(stringGuess);
        String result = "miss";

        for (int cell : locationCells) {
            if (guess == cell) {
                result = "hit";
                numOfHits++;
                break;
            }
        }
        if (numOfHits == locationCells.length) {
            result = "kill";
        }
        System.out.println(result);
        return result;
    }

    public static void main(String[] args) {

        int numOfGuesses = 0;

        SimpleDotComGame dot = new SimpleDotComGame();
        GameHelper helper = new GameHelper();

        int randomNumb = (int) (Math.random() * 5);

        int[] locations = {randomNumb, randomNumb + 1, randomNumb + 2};

        dot.setLocationsCells(locations);

        boolean isAlive = true;

        while (isAlive) {
            String guess = helper.getUserInput("Enter a guess number: ");
            String result = dot.checkYourself(guess);
            numOfGuesses++;

            if (result == "kill") {
                isAlive = false;
                    System.out.println("You played: " + numOfGuesses  + "times");
            }
        }
    }

    public static class GameHelper {
        public String getUserInput(String prompt) {
            String inputLine = null;
            System.out.print(prompt + " ");

            try {
                BufferedReader is = new BufferedReader(new InputStreamReader(System.in));
                inputLine = is.readLine();
                if (inputLine.length() == 0) return null;
            } catch (IOException e) {
                System.out.println("IOException: " + e);
            }
            return inputLine;
        }
    }
}