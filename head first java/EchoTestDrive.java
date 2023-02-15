public class EchoTestDrive {
    public static void main (String[] args) {
        Echo e1 = new Echo();
        Echo e2 = new Echo(); // Echo e2 = e1; to get 24 as count result.

        int x = 0;

        while (x < 4) {
            e1.hello();
            e1.count++;

            if ( x == 3) {
                e2.count++;
            }
            if (x > 0) {
                e2.count = e2.count + e1.count;
            }
            x++;
        }
        System.out.println(e2.count);
    }


    static class Echo {
        int count= 0;

        void hello() {
            System.out.println("helloooo.... ");
        }
    }
}
