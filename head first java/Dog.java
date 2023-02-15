public class Dog {
    String name;
    public static void main(String[] args) {
        // make a dog object and access it
        Dog dog1 = new Dog();
        dog1.name = "Joy";
        dog1.bark();

        // A Dog array;
        Dog[] myDogs = new Dog[3];

        // put some dogs in it
        myDogs[0] = new Dog();
        myDogs[1] = new Dog();
        myDogs[2] = new Dog(); // this object returns a null value

        // now access the Dogs using the array reference
        myDogs[0].name = "Java";
        myDogs[1].name = "Oracle";

        System.out.println("Last dog's name is: " + myDogs[2].name);

        // loop through the array and tell all  dogs to bark
        int x = 0;
        while (x < myDogs.length) {
            myDogs[x].bark();
            x++;
        }
    }

    public void bark() {
        System.out.println(name + " Say Ruff!");
    }
    public void eat() { }
    public void chaseCat() {}
}
