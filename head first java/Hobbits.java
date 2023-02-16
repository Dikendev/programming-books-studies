public class Hobbits {
    String name;
    public static void main (String[] args) {
        int z = 0;

        // creating Hobbits array object
        Hobbits[] hobbit = new Hobbits[3];

        while(z < 3) {
            hobbit[z] = new Hobbits();
            hobbit[z].name = "yoy";
            if (z == 1) {
                hobbit[z].name = "frodo";
            }
            if (z == 2) {
                hobbit[z].name = "sam";
            }
            System.out.println(hobbit[z].name + " is a");
            System.out.println("Good hobbit name");
            z++;
        }
    }
}
