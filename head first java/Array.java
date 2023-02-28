import java.util.ArrayList;

public class Array {
    public static void main(String [] args) {
        ArrayList <Array> myList = new ArrayList<Array>();

        Array s = new Array();
        Array y = new Array();
        myList.add(y);
        myList.add(s);

        int idx1 = myList.indexOf(y);
        int idx2 = myList.indexOf(s);

        System.out.println("index y = " + idx1 + " index de s = " + idx2);
    }
}
