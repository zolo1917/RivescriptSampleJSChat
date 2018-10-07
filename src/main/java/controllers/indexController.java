package controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 
 * @author zolo1917
 *
 */
@Controller
public class indexController {
	@RequestMapping({"/"," "})
	public String index() {
		return "index";
	}
}
