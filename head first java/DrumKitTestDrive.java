public class DrumKitTestDrive {
    public static void main(String[] args) {

        Drumkit d = new Drumkit();

        d.playSnare();
        // snare false para nao ser feito o trigger do metodo na classse drumkit
        d.snare = false;
        d.playTopHat();

        if (d.snare) {
            d.playSnare();
        }
    }

    public static class Drumkit {
        boolean topHat = true;
        boolean snare = true;

        void playTopHat() {
            System.out.println("ding ding da-ding");
        }
        void playSnare() {
            System.out.println("bang bang ba-bang");
        }
    }
}
