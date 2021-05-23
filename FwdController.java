package cpservice.fwd.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

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
	
	// 글 작성 클릭시 글 작성 페이지로 이동
	@RequestMapping(value = "/Register.do")
	public String Register() {
		return "Register";
	}		
	
	@RequestMapping(value = "/boardList.do")
	public String boardList(@ModelAttribute("searchVO") FwdVO searchVO, ModelMap model) throws Exception {
		List<EgovMap> boardList = fwdService.selectBoardList(searchVO);
		
		model.addAttribute("boardList", boardList);
		
	  return "/boardList";
	}		
		
	@RequestMapping(value = "/boardDetail.do")
//	public String boardDetail(@ModelAttribute("searchVO") FwdVO searchVO, HttpServletRequest request, ModelMap model) throws Exception {
//	public String boardDetail(ModelMap model, int seq) {
	
	public String boardDetail(@ModelAttribute("searchVO") FwdVO searchVO, ModelMap model) throws Exception {
		
		searchVO.getSeq();
		
		//		List<EgovMap> boardDetail = fwdService.selectBoardDetail(searchVO);	
		
//		FwdVO boardDetail = fwdService.selectBoardDetail(seq);
//		String seq = request.getParameter("seq");
//		int seqInt = Integer.parseInt(seq);
//		searchVO.setSeq(seqInt);
//		
//		List<EgovMap> boardDetail = fwdService.selectBoardDetail(searchVO);
//		
//		try {
//			List<EgovMap> boardDetail = fwdService.selectBoardDetail(searchVO);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
		
//		model.addAttribute("boardDetail", boardDetail);
		
		return "boardDetail";
	}		
	
	@RequestMapping(value = "/testList.do")
	public String testListDo() {
	  
		System.out.println("abc");
	  return "/testList";
	}		
	
}