public class Triangle {
    double area;
    int height;
    int length;

    public static void main(String[] args) {

        int x = 0;
        // creating a array
        Triangle[] ta = new Triangle[4];

        while (x < 4) {
            // adding object triangle in it array;
            ta[x] = new Triangle();
            ta[x].height = (x + 1) * 2;
            ta[x].length = x + 4;
            // area of triangles, result of method
            ta[x].setArea();
            System.out.print("Triangle " + x + " , area");
            System.out.println(" = " + ta[x].area);
            x++;
        }
        int y = x;
        Triangle t5 = ta[2];
        ta[2].area = 343;
        System.out.print("y = " + y);
        System.out.println(", t5 area = " + t5.area);
    }

    void  setArea() {
        area = (height * length) /2;
    }
}