package tacos;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")            // handle request for the root path
    public String home() {
        return "home";          // returns the view name
    }
}
