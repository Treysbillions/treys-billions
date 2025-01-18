import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class AnimationExample extends JPanel {
    private int x = 0; // Position du cercle en x
    private int y = 100; // Position du cercle en y
    private final int DIAMETER = 30; // Taille du cercle

    public AnimationExample() {
        // Crée un Timer qui se déclenche toutes les 10 millisecondes
        Timer timer = new Timer(10, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Déplace le cercle vers la droite
                x += 1;
                if (x > getWidth()) {
                    x = 0; // Réinitialiser la position quand il atteint la fin
                }
                repaint(); // Redessine le panneau
            }
        });
        timer.start(); // Démarre l'animation
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        // Dessine un cercle à la position (x, y)
        g.setColor(Color.RED);
        g.fillOval(x, y, DIAMETER, DIAMETER);
    }

    public static void main(String[] args) {
        // Crée une fenêtre JFrame pour afficher l'animation
        JFrame frame = new JFrame("Animation en Java");
        AnimationExample animation = new AnimationExample();
        frame.add(animation);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
