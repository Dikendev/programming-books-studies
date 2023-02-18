import javax.sound.midi.Soundbank;

public class GoodDog {
    private int size;

    // encapsulation the GoodDog class
    public int getSize() {
        return size;
    }

    public void setSize(int s) {
        size = s;
    }

    void bark() {
        if (size > 60) {
            System.out.println("Woof! Woof!");
        }
        else if (size > 14) {
            System.out.println("Ruff! Ruff");
        }
        else {
            System.out.println("Yip! Yip!");
        }
    }
    public static void main(String[] args) {
        // creating an instance of object, a copy
        GoodDog one = new GoodDog();
        one.setSize(70);

        GoodDog two = new GoodDog();
        two.setSize(8);

        System.out.println("Dog one: " + one.getSize());
        System.out.println("Dog two: " + two.getSize());
        one.bark();
        two.bark();
    }
}
