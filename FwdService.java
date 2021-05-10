package cpservice.fwd.service;

import java.util.List;

import egovframework.rte.psl.dataaccess.util.EgovMap;

public interface FwdService {
	/**
	 * URL 조회
	 * @param FwdVO 검색조건
	 * @return List<?> URL 목록
	 */
	List<EgovMap> selectTargetUrl(FwdVO vo);
}