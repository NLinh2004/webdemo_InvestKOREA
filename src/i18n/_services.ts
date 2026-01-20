// src/i18n/_services.ts
export const services = {
  vi: {
    "ser.guide": "Hướng dẫn đầu tư",
    "ser.consulting": "Tư vấn trực tuyến",
    "ser.living": "Thông tin đời sống",
    "ser.cost": "Chi phí đầu tư ban đầu",
    "ser.legislation": "Luật mới và sửa đổi",
    "ser.faq": "Câu hỏi thường gặp (FAQ)",
    "ser.office": "Thuê văn phòng (IKP)",
    "ser.network": "Mạng lưới của chúng tôi",
    "ser.forms": "Biểu mẫu",
    "services.title": "DỊCH VỤ",
    "services.description": "Chúng tôi hỗ trợ toàn diện cho quá trình đầu tư của bạn tại Hàn Quốc.",
    "services.download": "TẢI XUỐNG HƯỚNG DẪN",
    "services.find_office": "TÌM VĂN PHÒNG",
    "services.find_office_desc": "Liên hệ với mạng lưới toàn cầu của chúng tôi."
  },
  ko: {
    "ser.guide": "투자 가이드",
    "ser.consulting": "온라인 상담",
    "ser.living": "생활 정보",
    "ser.cost": "초기 투자 비용",
    "ser.legislation": "최신 법령 및 개정안",
    "ser.faq": "자주 묻는 질문",
    "ser.office": "사무실 임대 (IKP)",
    "ser.network": "글로벌 네트워크",
    "ser.forms": "서식",
    "services.title": "서비스",
    "services.description": "성공적인 한국 투자를 위한 맞춤형 서비스를 제공합니다.",
    "services.download": "가이드북 다운로드",
    "services.find_office": "국내외 사무소 안내",
    "services.find_office_desc": "인베스트코리아의 글로벌 네트워크를 확인하세요."
  }
};

export const servicesData = {
  vi: {
    pageTitle: "Dịch vụ",
    hero: {
      image: "/images/regions/banner.png",
      title: "Chúng tôi hỗ trợ bạn như thế nào",
    },
    // Section 1: Các dịch vụ chính
    mainServices: {
      title: "Dịch vụ của chúng tôi",
      desc: "Invest KOREA quảng bá môi trường đầu tư của Hàn Quốc ra nước ngoài và cung cấp các dịch vụ toàn diện cho các công ty nước ngoài.",
      items: [
        { title: "Hướng dẫn Đầu tư", icon: "📖", link: "#" },
        { title: "Ươm tạo Doanh nghiệp", icon: "🏢", link: "#" },
        { title: "Câu hỏi thường gặp (FAQ)", icon: "❓", link: "#" },
        { title: "Tư vấn Trực tuyến", icon: "💬", link: "#" },
        { title: "Mạng lưới của chúng tôi", icon: "🌐", link: "#" },
        { title: "Chi phí Đầu tư Ban đầu", icon: "💰", link: "#" },
      ],
    },
    // Section 2: Trung tâm tư vấn
    consulting: {
      title: "Trung tâm Tư vấn Đầu tư cung cấp dịch vụ tùy chỉnh",
      desc: "Tất cả các nhà đầu tư nước ngoài và thành viên gia đình đều được chào đón với các dịch vụ tư vấn miễn phí qua điện thoại, fax, e-mail hoặc gặp mặt trực tiếp.",
      list: [
        "Xác nhận đầu tư bằng hiện vật / Đăng ký giấy phép kinh doanh",
        "Tư vấn đời sống / Hỗ trợ tham quan địa điểm",
        "Hỗ trợ tìm kiếm địa điểm / Đăng ký nhà máy",
        "Thông báo, đăng ký hoặc thay đổi vốn đầu tư nước ngoài",
      ],
      btnDetail: "Chi tiết Trung tâm Tư vấn",
      btnPdf: "Tải PDF giới thiệu",
      // Nội dung Popup
      popup: {
        title: "Trung tâm Tư vấn Đầu tư",
        info: [
          {
            label: "Giờ làm việc",
            value: "Thứ 2 – Thứ 6, 09:00 ~ 18:00 (Nghỉ trưa 12:30 ~ 13:30)",
          },
          {
            label: "Địa chỉ",
            value:
              "Tầng 2, Invest Korea Plaza, 7, Heolleung-ro, Seocho-gu, Seoul",
          },
          { label: "Điện thoại", value: "(82-2) 3497-1970" },
          { label: "Fax", value: "(82-2) 3497-1611" },
          {
            label: "Ngôn ngữ",
            value: "Tiếng Anh, Tiếng Trung, Tiếng Nhật, Tiếng Hàn",
          },
        ],
      },
    },
    // Section 3: FAQ
    faq: {
      title: "Câu hỏi thường gặp",
      moreBtn: "Xem thêm",
      items: [
        {
          cat: "Định nghĩa",
          q: "Trong trường hợp khẩn cấp, người nước ngoài không nói tiếng Hàn có thể gọi đến đâu?",
        },
        {
          cat: "Định nghĩa",
          q: "Rác thải được phân loại và xử lý như thế nào tại Hàn Quốc?",
        },
        {
          cat: "Định nghĩa",
          q: "Nếu người nước ngoài chuyển chỗ ở tại Hàn Quốc, họ có phải báo cáo thay đổi địa chỉ không?",
        },
        {
          cat: "Định nghĩa",
          q: "Có danh sách các đại lý bất động sản sử dụng ngoại ngữ không?",
        },
      ],
    },
    // Section 4: Tìm văn phòng
    offices: {
      title: "Tìm văn phòng Invest Korea gần bạn",
      desc: "Khám phá các văn phòng gần nhất để thuận tiện cho việc liên hệ tại khu vực của bạn",
      selectCountry: "Chọn Quốc gia",
      selectRegion: "Chọn Khu vực",
      btnGo: "Đến trang web văn phòng nước ngoài",
    },
    // Section 5: Đặt câu hỏi
    ask: {
      title: "Đặt câu hỏi",
      btn: "Gửi câu hỏi",
    },
  },
  ko: {
    pageTitle: "서비스",
    hero: {
      image: "/images/regions/banner.png",
      title: "투자 지원 서비스",
    },
    mainServices: {
      title: "주요 서비스",
      desc: "Invest KOREA는 한국의 투자 환경을 해외에 알리고 외국 기업에게 포괄적인 서비스를 제공합니다.",
      items: [
        { title: "투자 가이드", icon: "📖", link: "#" },
        { title: "인큐베이팅", icon: "🏢", link: "#" },
        { title: "자주 묻는 질문 (FAQ)", icon: "❓", link: "#" },
        { title: "온라인 상담", icon: "💬", link: "#" },
        { title: "네트워크", icon: "🌐", link: "#" },
        { title: "초기 투자 비용", icon: "💰", link: "#" },
      ],
    },
    consulting: {
      title: "투자상담센터 맞춤형 서비스 제공",
      desc: "모든 외국인 투자자와 그 가족은 전화, 팩스, 이메일 또는 방문을 통해 무료 상담 서비스를 받으실 수 있습니다.",
      list: [
        "현물 투자 확인 / 사업자 등록",
        "생활 상담 / 현장 방문 동행",
        "맞춤형 입지 지원 / 공장 등록",
        "외국인 투자 신고, 등록 및 변경",
      ],
      btnDetail: "상담센터 상세정보",
      btnPdf: "상담센터 소개 PDF",
      popup: {
        title: "투자상담센터",
        info: [
          {
            label: "운영 시간",
            value: "월 – 금 09:00 ~ 18:00 (점심시간 12:30 ~ 13:30)",
          },
          {
            label: "주소",
            value: "서울시 서초구 헌릉로 7, 인베스트코리아플라자 2층",
          },
          { label: "전화", value: "(82-2) 3497-1970" },
          { label: "팩스", value: "(82-2) 3497-1611" },
          { label: "언어", value: "영어, 중국어, 일본어, 한국어" },
        ],
      },
    },
    faq: {
      title: "자주 묻는 질문",
      moreBtn: "더보기",
      items: [
        {
          cat: "정의",
          q: "한국어를 못하는 외국인이 긴급 상황 시 어디에 전화해야 하나요?",
        },
        { cat: "정의", q: "한국에서는 쓰레기를 어떻게 분류하고 배출하나요?" },
        {
          cat: "정의",
          q: "외국인이 한국 내에서 이사할 경우 주소 변경 신고를 해야 하나요?",
        },
        { cat: "정의", q: "외국어가 가능한 부동산 중개업소 명단이 있나요?" },
      ],
    },
    offices: {
      title: "가까운 무역관 찾기",
      desc: "가까운 KOTRA 해외 무역관을 찾아보세요.",
      selectCountry: "국가 선택",
      selectRegion: "지역 선택",
      btnGo: "해외 무역관 사이트 바로가기",
    },
    ask: {
      title: "문의하기",
      btn: "문의 등록",
    },
  },
};
