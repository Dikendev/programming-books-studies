public class BooksTestDrive {
    public static void main(String[] args) {

        int x = 0;

        //creating a book arrays object with length 3.
        Books[] myBooks = new Books[3];
        myBooks[0] = new Books();
        myBooks[1] = new Books();
        myBooks[2] = new Books();

        // assign title to books string
        myBooks[0].title = "The Grapes of Java";
        myBooks[1].title = "The Java Gatsby";
        myBooks[2].title = "The Java CookBook";

        //assign author to books string
        myBooks[0].author = "Diego";
        myBooks[1].author = "Cristine";
        myBooks[2].author = "David";

        while (x < myBooks.length) {
            System.out.println(myBooks[x].title);
            System.out.println("by ");
            System.out.println(myBooks[x].author);
            x++;
        }
    }

    static class Books {
        String title;
        String author;
    }
}