package cpservice.fwd.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import cpservice.fwd.service.FwdService;
import cpservice.fwd.service.FwdVO;
import egovframework.rte.psl.dataaccess.util.EgovMap;

@Controller
public class FwdController {

	/** 고객관리 서비스 */
	@Resource(name = "fwdService")
	private FwdService fwdService;
	
	@RequestMapping(value = "/reqUrl.do")
	public String selectReqUrl(@ModelAttribute("searchVO") FwdVO searchVO, ModelMap model) throws Exception {
		
		List<EgovMap> resultList = fwdService.selectTargetUrl(searchVO);
		
		String URL = (String) resultList.get(0).get("urlStr");
		
		return "redirect:http://"+URL;
		
	}
	
}