// src/i18n/_regions-report.ts
import { regions } from "./_regions"; // Import file bạn vừa cung cấp

export const regionReportPageData = {
  vi: {
    breadcrumb: ["Trang chủ", "Khu vực", "Báo cáo vị trí"],
    title: "Báo cáo vị trí",
    desc: "Cập nhật những thông tin mới nhất về môi trường đầu tư, chính sách và tiềm năng phát triển của các khu vực trọng điểm tại Hàn Quốc.",
    searchPlaceholder: "Tìm kiếm báo cáo...",
    searchBtn: "Tìm kiếm",
    filterLabel: "Khu vực:",
    allRegions: "Tất cả khu vực",
    resultText: "Tìm thấy:",
    unit: "báo cáo",
    empty: "Không tìm thấy báo cáo phù hợp.",
    // Lấy danh sách tên tỉnh thành từ file _regions.ts để làm bộ lọc
    regionNames: Object.values(regions.vi).filter(
      (val) => val !== "Khu vực" && val !== "Báo cáo vị trí"
    ),
  },
  ko: {
    breadcrumb: ["홈", "지역", "입지 리포트"],
    title: "입지 리포트",
    desc: "한국 주요 지역의 투자 환경, 정책 및 개발 잠재력에 대한 최신 정보를 확인하세요.",
    searchPlaceholder: "리포트 검색...",
    searchBtn: "검색",
    filterLabel: "지역 선택:",
    allRegions: "전체 지역",
    resultText: "검색 결과:",
    unit: "건",
    empty: "검색 결과가 없습니다.",
    regionNames: Object.values(regions.ko).filter(
      (val) => val !== "영역" && val !== "입지 리포트"
    ),
  },
};
