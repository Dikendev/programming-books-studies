public class MultiFor {
    public static void main(String[] args) {

        for (int x = 0; x < 4; x++) {
            // if the if (x == 1) x++ came before the y for loop, it will increase x++ before print it to the console.

            for(int y = 4; y > 2; y--) {
                System.out.println(x + " " + y);
            }

            if (x == 1) {
                x++;
            }
        }
    }
}