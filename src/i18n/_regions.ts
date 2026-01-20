// src/i18n/_regions.ts

export const regions = {
  vi: {
    "reg.title": "Khu vực",

    "reg.report": "Báo cáo vị trí",
    "reg.seoul": "Seoul",
    "reg.incheon": "Incheon",
    "reg.gyeonggi": "Gyeonggi",
    "reg.gangwon": "Gangwon",
    "reg.daejeon": "Daejeon",
    "reg.sejong": "Sejong",
    "reg.chungbuk": "Chungbuk",
    "reg.chungnam": "Chungnam",
    "reg.daegu": "Daegu",
    "reg.busan": "Busan",
    "reg.ulsan": "Ulsan",
    "reg.gyeongbuk": "Gyeongbuk",
    "reg.gyeongnam": "Gyeongnam",
    "reg.gwangju": "Gwangju",
    "reg.jeonbuk": "Jeonbuk",
    "reg.jeonnam": "Jeonnam",
    "reg.jeju": "Jeju",
  },
  ko: {
    "reg.title": "영역",
    "reg.report": "입지 리포트",
    "reg.seoul": "서울",
    "reg.incheon": "인천",
    "reg.gyeonggi": "경기",
    "reg.gangwon": "강원",
    "reg.daejeon": "대전",
    "reg.sejong": "세종",
    "reg.chungbuk": "충북",
    "reg.chungnam": "충남",
    "reg.daegu": "대구",
    "reg.busan": "부산",
    "reg.ulsan": "울산",
    "reg.gyeongbuk": "경북",
    "reg.gyeongnam": "경남",
    "reg.gwangju": "광주",
    "reg.jeonbuk": "전북",
    "reg.jeonnam": "전남",
    "reg.jeju": "제주",
  },
};

// Dữ liệu dùng chung cho Bản đồ
export const regionData = {
  mapBaseImage: "/images/regions/map_base.png",
  categories: [
    {
      name: "Metropolitan Area",
      items: [
        {
          id: "01",
          name: "Seoul",
          slug: "seoul",
          coords: "140,156,190,198",
          shape: "rect",
        },
        {
          id: "02",
          name: "Incheon",
          slug: "incheon",
          coords: "67,135,140,208",
          shape: "rect",
        },
        {
          id: "03",
          name: "Gyeonggi",
          slug: "gyeonggi",
          coords:
            "123,93,130,170,177,159,185,177,185,192,165,196,149,196,140,177,139,190,131,206,128,221,121,235,138,346,152,271,181,276,194,279,247,248,270,184,224,162,230,142,244,121,198,86,171,80",
          shape: "poly",
        },
      ],
    },
    {
      name: "Gangwon Region",
      items: [
        {
          id: "04",
          name: "Gangwon",
          slug: "gangwon",
          coords:
            "330,20,300,60,179,62,171,74,180,92,219,99,239,124,230,132,228,167,271,177,259,226,271,244,323,231,367,255,444,251,456,238",
          shape: "poly",
        },
      ],
    },
    {
      name: "Chungcheong Region",
      items: [
        {
          id: "05",
          name: "Daejeon",
          slug: "daejeon",
          coords: "188,361,203,386,221,388,235,354,216,343",
          shape: "poly",
        },
        {
          id: "06",
          name: "Sejong",
          slug: "sejong",
          coords: "202,308,182,302,184,335,191,353,212,344",
          shape: "poly",
        },
        {
          id: "07",
          name: "Chungbuk",
          slug: "chungbuk",
          coords:
            "216,340,198,280,259,242,362,254,339,289,267,320,273,364,295,382,277,414,244,411,229,373,237,360",
          shape: "poly",
        },
        {
          id: "08",
          name: "Chungnam",
          slug: "chungnam",
          coords:
            "190,285,92,253,50,304,118,415,158,393,189,405,204,397,178,341",
          shape: "poly",
        },
      ],
    },
    {
      name: "Gyeongsang Region",
      items: [
        {
          id: "09",
          name: "Daegu",
          slug: "daegu",
          coords:
            "340,383,360,413,334,429,334,468,354,469,376,457,384,429,375,411,398,397,394,389,346,376",
          shape: "poly",
        },
        {
          id: "10",
          name: "Gyeongbuk",
          slug: "gyeongbuk",
          coords:
            "455,238,442,259,365,259,346,292,273,323,276,360,296,375,272,427,313,470,329,470,331,424,354,415,335,385,348,372,394,387,401,400,379,414,385,434,382,461,362,469,388,485,426,457,467,463,407",
          shape: "poly",
        },
        {
          id: "11",
          name: "Gyeongnam",
          slug: "gyeongnam",
          coords:
            "416,477,437,505,384,545,319,584,234,525,249,499,237,479,272,438,311,473,361,474,388,494",
          shape: "poly",
        },
        {
          id: "12",
          name: "Ulsan",
          slug: "ulsan",
          coords: "465,469,430,461,418,472,452,514",
          shape: "poly",
        },
        {
          id: "13",
          name: "Busan",
          slug: "busan",
          coords: "442,507,384,546,423,559,444,537",
          shape: "poly",
        },
      ],
    },
    {
      name: "Jeolla Region",
      items: [
        {
          id: "14",
          name: "Gwangju",
          slug: "gwangju",
          coords: "157,525,114,536,140,561,167,553,172,539",
          shape: "poly",
        },
        {
          id: "15",
          name: "Jeonbuk",
          slug: "jeonbuk",
          coords:
            "272,418,164,400,112,422,98,491,112,523,165,502,172,520,233,495,235,476",
          shape: "poly",
        },
        {
          id: "16",
          name: "Jeonnam",
          slug: "jeonnam",
          coords:
            "233,525,263,564,255,616,126,662,33,594,76,535,92,509,119,548,141,568,171,556,177,543,162,525,118,531,117,525,162,511,173,525",
          shape: "poly",
        },
      ],
    },
    {
      name: "Jeju Region",
      items: [
        {
          id: "17",
          name: "Jeju",
          slug: "jeju",
          coords: "137,739,74,759,61,778,73,797,114,791,147,781,156,754",
          shape: "poly",
        },
      ],
    },
  ],
};

// Dữ liệu KFEZ (Đã dịch Việt - Hàn)
export const kfezData = {
  vi: {
    title: "KFEZ, nơi công thức thành công cho doanh nghiệp mở ra",
    description:
      "Các Khu Kinh tế Tự do Hàn Quốc (KFEZ) được thiết kế để tích cực thu hút đầu tư nước ngoài bằng cách cải thiện môi trường kinh doanh và điều kiện sống, đồng thời tối đa hóa quyền tự chủ và các ưu đãi đầu tư thông qua việc nới lỏng quy định.",
    items: [
      {
        id: "incheon",
        name: "Incheon",
        fullName: "Khu Kinh tế Tự do Incheon (IFEZ)",
        desc: "Incheon đã tái sinh thành một trung tâm kinh doanh toàn cầu. IFEZ tự hào có môi trường kinh doanh quốc tế lý tưởng, bao gồm Sân bay Quốc tế Incheon, Cảng Incheon đang phát triển nhanh chóng, và khuôn viên toàn cầu Songdo.",
        link: "#",
      },
      {
        id: "gyeonggi",
        name: "Gyeonggi",
        fullName: "Khu Kinh tế Tự do Gyeonggi (GGFEZ)",
        desc: "GGFEZ nằm ở trung tâm Vành đai Kinh tế Bờ biển phía Tây. Bao gồm ba khu vực: Poseung (BIX) và Hyeondeok tập trung vào công nghệ cao, logistics; và Siheung Baegot tập trung vào R&D các phương tiện không người lái.",
        link: "#",
      },
      {
        id: "gangwon",
        name: "Gangwon",
        fullName: "Khu Kinh tế Tự do Gangwon (GSFEZ)",
        desc: "GSFEZ là đặc khu kinh tế cải thiện môi trường kinh doanh và điều kiện sống cho các công ty đầu tư nước ngoài tại tỉnh Gangwon, tập trung vào du lịch nghỉ dưỡng, năng lượng hydro và vật liệu công nghệ cao.",
        link: "#",
      },
      {
        id: "chungbuk",
        name: "Chungbuk",
        fullName: "Khu Kinh tế Tự do Chungbuk (CBFEZ)",
        desc: "Nằm ở trung tâm nội địa, CBFEZ là trung tâm mới để phát triển các thành phố toàn cầu và thúc đẩy ngành công nghiệp sinh học (Bio) cũng như ngành Hàng không Đô thị (UAM).",
        link: "#",
      },
      {
        id: "gwangju",
        name: "Gwangju",
        fullName: "Khu Kinh tế Tự do Gwangju (GJFEZ)",
        desc: "GJFEZ là khu kinh tế tự do duy nhất tập trung vào AI tại Hàn Quốc. Nơi đây đang xây dựng trung tâm mới cho sự tăng trưởng đổi mới thông qua hội tụ các công nghệ tiên tiến như ô tô thân thiện môi trường và năng lượng thông minh.",
        link: "#",
      },
      {
        id: "gwangyang",
        name: "Gwangyang Bay",
        fullName: "Khu Kinh tế Tự do Vịnh Gwangyang (GFEZ)",
        desc: "GFEZ bao gồm sáu khu vực chuyên biệt và mười bảy khu phức hợp được chuẩn bị hoàn hảo cho sự thành công của bạn. Đây là trung tâm logistics, du lịch và các ngành công nghiệp mới ở Đông Bắc Á.",
        link: "#",
      },
      {
        id: "daegu",
        name: "Daegu Gyeongbuk",
        fullName: "Khu Kinh tế Tự do Daegu Gyeongbuk (DGFEZ)",
        desc: "DGFEZ cung cấp các địa điểm kinh doanh, cơ sở R&D tập trung vào hội tụ IT, phụ tùng máy móc vận tải công nghệ cao và các ngành công nghiệp y tế.",
        link: "#",
      },
      {
        id: "ulsan",
        name: "Ulsan",
        fullName: "Khu Kinh tế Tự do Ulsan (UFEZ)",
        desc: "Ulsan là thành phố công nghiệp số 1 Hàn Quốc. UFEZ tập trung vào việc thúc đẩy các ngành công nghiệp di động tương lai, sinh học, hóa chất, vật liệu mới, hydro và năng lượng carbon thấp.",
        link: "#",
      },
      {
        id: "busan",
        name: "Busan Jinhae",
        fullName: "Khu Kinh tế Tự do Busan Jinhae (BJFEZ)",
        desc: "BJFEZ là cụm công nghiệp toàn cầu về đóng tàu, ô tô và máy móc, đồng thời là khu vực trọng điểm cho các công nghệ kỹ thuật số thế hệ tiếp theo và trung tâm logistics tốt nhất Đông Bắc Á.",
        link: "#",
      },
    ],
  },
  ko: {
    title: "기업의 성공 공식이 펼쳐지는 KFEZ",
    description:
      "한국경제자유구역(KFEZ)은 규제 완화를 통해 기업의 자율성과 투자 인센티브를 극대화하고, 외국인 투자 기업의 경영 환경과 생활 여건을 개선하여 외국인 투자를 적극 유치하기 위해 조성되었습니다.",
    items: [
      {
        id: "incheon",
        name: "인천",
        fullName: "인천경제자유구역 (IFEZ)",
        desc: "인천은 글로벌 비즈니스 허브로 재탄생했습니다. 12년 연속 공항서비스평가(ASQ) 1위를 달성한 인천국제공항, 급성장하는 인천항, 송도 글로벌 캠퍼스 등 최적의 국제 비즈니스 환경을 자랑합니다.",
        link: "#",
      },
      {
        id: "gyeonggi",
        name: "경기",
        fullName: "경기경제자유구역 (GGFEZ)",
        desc: "GGFEZ는 서해안 경제벨트의 중심에 위치합니다. 첨단·물류·유통 산업을 위한 평택 포승(BIX) 지구와 현덕 지구, 육·해·공 무인 이동체 R&D를 위한 시흥 배곧 지구로 구성됩니다.",
        link: "#",
      },
      {
        id: "gangwon",
        name: "강원",
        fullName: "강원경제자유구역 (GSFEZ)",
        desc: "GSFEZ는 강원도 내 외국인 투자 기업의 경영 환경과 생활 여건을 개선하는 경제 특구입니다. 사계절 명품 휴양 관광, 수소 에너지, 첨단 소재 부품 산업의 중심지입니다.",
        link: "#",
      },
      {
        id: "chungbuk",
        name: "충북",
        fullName: "충북경제자유구역 (CBFEZ)",
        desc: "충북은 내륙 중앙에 위치하여 사통팔달의 접근성을 제공합니다. CBFEZ는 바이오 산업과 회전익 정비와 연계된 도심 항공 모빌리티(UAM) 산업을 육성하는 새로운 허브입니다.",
        link: "#",
      },
      {
        id: "gwangju",
        name: "광주",
        fullName: "광주경제자유구역 (GJFEZ)",
        desc: "GJFEZ는 한국 유일의 AI 중심 경제자유구역입니다. 차세대 친환경 자동차, 스마트 에너지, 생체의료 기술 등 첨단 기술의 융합을 통해 한국의 혁신 성장을 위한 새로운 허브를 구축하고 있습니다.",
        link: "#",
      },
      {
        id: "gwangyang",
        name: "광양만권",
        fullName: "광양만권경제자유구역 (GFEZ)",
        desc: "GFEZ는 6개의 특화 지구와 17개의 단지로 구성되어 있습니다. 동북아시아의 물류, 관광, 신산업의 새로운 허브로서 역동적인 국제 무역 도시로 형성되고 있습니다.",
        link: "#",
      },
      {
        id: "daegu",
        name: "대구경북",
        fullName: "대구경북경제자유구역 (DGFEZ)",
        desc: "DGFEZ는 IT 융합, 첨단 수송 기계 부품, 의료 산업을 중심으로 비즈니스 부지, R&D 시설, 안정적인 상업 및 주거 여건을 제공합니다.",
        link: "#",
      },
      {
        id: "ulsan",
        name: "울산",
        fullName: "울산경제자유구역 (UFEZ)",
        desc: "울산은 한국 1위의 산업 도시입니다. UFEZ는 미래 모빌리티, 바이오, 화학, 신소재, 수소 및 저탄소 에너지 산업 육성에 중점을 두고 있습니다.",
        link: "#",
      },
      {
        id: "busan",
        name: "부산진해",
        fullName: "부산진해경제자유구역 (BJFEZ)",
        desc: "BJFEZ는 조선, 자동차, 기계 산업의 글로벌 산업 클러스터이자 차세대 디지털 기술의 핵심 지역이며, 동북아 최고의 물류 허브인 부산항을 보유하고 있습니다.",
        link: "#",
      },
    ],
  },
};

// Dữ liệu Báo cáo
export const locationReportsData = {
  vi: {
    title: "Báo cáo địa điểm",
    moreText: "Xem thêm",
    moreLink: "/vi/location-report",
    items: [
      {
        id: 1,
        title:
          "Khu công nghiệp Quốc gia Thông minh Sejong: Định hình trung tâm công nghiệp tương lai",
        date: "05.12.2025",
        image: "/public/images/regions/report_01.png",
        link: "#",
        tags: ["Sejong", "Công nghiệp thông minh"],
      },
      {
        id: 2,
        title:
          "Khu công nghiệp Khoa học Ochang: Cụm công nghiệp pin thứ cấp toàn cầu",
        date: "11.11.2025",
        image: "/public/images/regions/report_02.png",
        link: "#",
        tags: ["Chungbuk", "Pin thứ cấp"],
      },
      {
        id: 3,
        title:
          "Khu công nghiệp Hàng không Vũ trụ Gyeongnam: Trung tâm hàng không lớn nhất Hàn Quốc",
        date: "05.02.2025",
        image: "/public/images/regions/report_03.png",
        link: "#",
        tags: ["Gyeongnam", "Hàng không vũ trụ"],
      },
    ],
  },
  ko: {
    title: "입지 리포트",
    moreText: "더보기",
    moreLink: "/ko/location-report",
    items: [
      {
        id: 1,
        title: "세종 스마트 국가산업단지: 미래 산업의 핵심 거점으로 도약",
        date: "2025.12.05",
        image: "/public/images/regions/report_01.png",
        link: "#",
        tags: ["세종", "스마트 산업"],
      },
      {
        id: 2,
        title: "오창과학산업단지: 이차전지 및 첨단 산업의 글로벌 허브",
        date: "2025.11.11",
        image: "/public/images/regions/report_02.png",
        link: "#",
        tags: ["충북", "이차전지"],
      },
      {
        id: 3,
        title: "경남 항공 국가산업단지: 대한민국 최대 항공우주 산업 클러스터",
        date: "2025.02.05",
        image: "/public/images/regions/report_03.png",
        link: "#",
        tags: ["경남", "항공우주"],
      },
    ],
  },
};
