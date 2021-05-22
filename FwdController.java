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
		
		//log4j("URL = " + URL);
		return "redirect:http://"+URL;
		
	}
	
	// HttpServletRequest 객체안에 모든 데이터들이 들어가는데 getParameter메소드로 testId 원하는 데이터 가져옴
	// 제목 클릭 시 상세보기
	@RequestMapping(value = "/testDetail.do")
	public String viewForm(@ModelAttribute("searchVO") TestVO searchVO, Model model, HttpServletRequest request)
			throws Exception {

		int testId = Integer.parseInt(request.getParameter("testId"));
		testVO.setTestId(testId);

		searchVO resultVO = testServiceImpl.selectDetail(testVO);
		model.addAttribute("result", resultVO);

		return "test/testDetail";
	}	
	
	
	
	

	
}