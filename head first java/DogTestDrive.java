public class DogTestDrive {

    public static void main(String[] args) {
        int counter = 0;
        Dog[] dogs = new Dog[3];

        while (counter < dogs.length ) {
            dogs[counter] = new Dog();

            if (counter == 0){
                dogs[counter].size = 70;
            }
            if (counter == 1 ) {
                dogs[counter].size = 8;
            }
            if ( counter == 2) {
                dogs[counter].size = 35;
            }

            dogs[counter].bark();

            counter++;
        }
    }

   static class Dog {
        int size;
        String name;

        void bark() {
            if (size > 60) {
                System.out.println("Woooof! Woooof");
            } else if (size > 14) {
                System.out.println("Ruff! Ruff");
            } else  {
                System.out.println("Yip! Yip");
            }
        }
    }
}
