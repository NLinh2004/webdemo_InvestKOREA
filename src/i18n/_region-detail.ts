export const regionDetailLabels = {
  vi: {
    home: "Trang chủ",
    regions: "Khu vực",
    goSite: "Đi tới trang web địa phương",
    keyIndustries: "Ngành công nghiệp trọng điểm",
    stats: {
      pop: "Dân số",
      comp: "Số doanh nghiệp",
      empl: "Lao động",
      prod: "Sản lượng",
    },
    visitSite: "Ghé thăm Website",
    unit: "đơn vị: tỷ USD",
  },
  ko: {
    home: "홈",
    regions: "지역",
    goSite: "지자체 사이트 바로가기",
    keyIndustries: "주요 산업",
    stats: {
      pop: "인구",
      comp: "기업 수",
      empl: "종사자 수",
      prod: "생산액",
    },
    visitSite: "홈페이지 방문",
    unit: "단위: 10억 달러",
  },
};
// src/i18n/_regions-detail.ts

export const regionIdMap: Record<string, string> = {
  seoul: "01",
  incheon: "02",
  gyeonggi: "03",
  gangwon: "04",
  daejeon: "05",
  sejong: "06",
  chungbuk: "07",
  chungnam: "08",
  daegu: "09",
  gyeongbuk: "10",
  gyeongnam: "11",
  ulsan: "12",
  busan: "13",
  gwangju: "14",
  jeonbuk: "15",
  jeonnam: "16",
  jeju: "17",
};

// Dữ liệu mẫu (Bạn có thể thay đổi tiêu đề theo từng khu vực)
export const regionContentData: any = {
  vi: {
    seoul: {
      title: "Seoul",
      subTitle:
        "Seoul, Thủ đô Toàn cầu – Trung tâm Kinh tế, Văn hóa và Đổi mới",
      industries:
        "Tài chính, ICT, Dịch vụ kinh doanh, Nội dung văn hóa, Start-up công nghệ",
      stats: {
        pop: "9,428,372",
        comp: "1,150,000",
        empl: "5,200,000",
        prod: "450.5",
      },
      zoneTitle: "Khu Kinh tế Tự do Seoul (SFEZ)",
      zoneDesc:
        "Seoul là trung tâm tài chính và khởi nghiệp hàng đầu châu Á, cung cấp môi trường kinh doanh đẳng cấp thế giới với hạ tầng kỹ thuật số tiên tiến nhất.",
      hubTitle: "Trái tim của làn sóng Hàn Quốc và Kinh tế số",
      hubDesc:
        "Seoul đóng vai trò là đầu tàu kinh tế của Hàn Quốc, tập trung các tập đoàn đa quốc gia và là nơi dẫn dắt các xu hướng công nghệ toàn cầu.",
    },
    busan: {
      title: "Busan",
      subTitle: "Thành phố Cảng biển Logistics và Du lịch Toàn cầu",
      industries:
        "Logistics cảng biển, Đóng tàu, Du lịch, Điện ảnh, Tài chính hàng hải",
      stats: {
        pop: "3,317,812",
        comp: "305,000",
        empl: "1,450,000",
        prod: "92.4",
      },
      zoneTitle: "Khu Kinh tế Tự do Busan Jinhae (BJFEZ)",
      zoneDesc:
        "Cảng Busan là cửa ngõ logistics quan trọng nhất Đông Bắc Á, kết nối các tuyến hàng hải toàn cầu với hiệu suất xử lý container hàng đầu thế giới.",
      hubTitle: "Trung tâm Logistics và Kinh tế Hàng hải",
      hubDesc:
        "Busan đang chuyển mình mạnh mẽ thành thành phố thông minh dựa trên thế mạnh về cảng biển và hạ tầng du lịch nghỉ dưỡng đẳng cấp quốc tế.",
    },
    incheon: {
      title: "Incheon",
      subTitle: "Cửa ngõ của Hàn Quốc kết nối với Thế giới",
      industries:
        "Logistics hàng không, Bio-health, Ô tô, Chất bán dẫn, Năng lượng sạch",
      stats: {
        pop: "2,989,125",
        comp: "220,000",
        empl: "1,200,000",
        prod: "85.1",
      },
      zoneTitle: "Khu Kinh tế Tự do Incheon (IFEZ)",
      zoneDesc:
        "Với Sân bay Quốc tế Incheon và các khu đô thị thông minh Songdo, Yeongjong, Cheongna, IFEZ là đặc khu kinh tế thành công nhất Hàn Quốc.",
      hubTitle: "Trung tâm Bio-Cluster và Logistics Toàn cầu",
      hubDesc:
        "Incheon sở hữu cụm sản xuất dược phẩm sinh học lớn nhất thế giới và là địa điểm lý tưởng cho các doanh nghiệp FDI nhờ vị trí chiến lược.",
    },
    daegu: {
      title: "Daegu",
      subTitle: "Thành phố Y tế Đổi mới và Robot Tương lai",
      industries:
        "Robot, Y tế thông minh, Phụ tùng ô tô tương lai, Dệt may kỹ thuật số",
      stats: {
        pop: "2,375,306",
        comp: "250,000",
        empl: "1,050,000",
        prod: "55.8",
      },
      zoneTitle: "Khu Kinh tế Tự do Daegu Gyeongbuk (DGFEZ)",
      zoneDesc:
        "DGFEZ tập trung vào việc tạo ra hệ sinh thái cho các ngành công nghiệp công nghệ cao và trung tâm y tế chất lượng cao hàng đầu khu vực.",
      hubTitle: "Trung tâm Công nghiệp Robot và Chăm sóc sức khỏe",
      hubDesc:
        "Daegu đang dẫn đầu trong việc thử nghiệm các giải pháp đô thị thông minh và chuyển đổi sang nền kinh tế dựa trên công nghệ cao.",
    },
    daejeon: {
      title: "Daejeon",
      subTitle: "Thành phố Khoa học và Công nghệ hàng đầu Hàn Quốc",
      industries:
        "R&D, Hàng không vũ trụ, Bio-tech, Chất bán dẫn, Công nghệ Nano",
      stats: {
        pop: "1,442,213",
        comp: "125,000",
        empl: "650,000",
        prod: "42.3",
      },
      zoneTitle: "Đặc khu Nghiên cứu & Phát triển Daedeok",
      zoneDesc:
        "Nơi tập trung các viện nghiên cứu quốc gia và đại học hàng đầu, Daejeon là cái nôi của những phát minh công nghệ quan trọng nhất Hàn Quốc.",
      hubTitle: "Thung lũng Silicon của Hàn Quốc",
      hubDesc:
        "Daejeon cung cấp nguồn nhân lực trình độ cao và hạ tầng nghiên cứu vượt trội cho các doanh nghiệp công nghệ muốn đổi mới sáng tạo.",
    },
    gwangju: {
      title: "Gwangju",
      subTitle: "Thành phố của Trí tuệ Nhân tạo và Văn hóa Nghệ thuật",
      industries:
        "Trí tuệ nhân tạo (AI), Ô tô thân thiện môi trường, Năng lượng thông minh",
      stats: {
        pop: "1,417,716",
        comp: "115,000",
        empl: "600,000",
        prod: "38.9",
      },
      zoneTitle: "Khu Kinh tế Tự do Gwangju (GJFEZ)",
      zoneDesc:
        "GJFEZ được thiết kế để trở thành trung tâm công nghiệp AI duy nhất tại Hàn Quốc, kết hợp với sản xuất ô tô hiện đại.",
      hubTitle: "Trung tâm Đổi mới AI và Công nghiệp Văn hóa",
      hubDesc:
        "Gwangju tạo ra sự giao thoa độc đáo giữa công nghệ tương lai và nền tảng văn hóa, nghệ thuật lâu đời của vùng Honam.",
    },
    ulsan: {
      title: "Ulsan",
      subTitle: "Thủ đô Công nghiệp của Hàn Quốc",
      industries: "Ô tô, Đóng tàu, Hóa dầu, Năng lượng Hydro, Vật liệu mới",
      stats: {
        pop: "1,103,661",
        comp: "95,000",
        empl: "550,000",
        prod: "165.2",
      },
      zoneTitle: "Khu Kinh tế Tự do Ulsan (UFEZ)",
      zoneDesc:
        "UFEZ tận dụng vị thế là cụm công nghiệp lớn nhất thế giới để phát triển các nguồn năng lượng mới và kinh tế hydro xanh.",
      hubTitle: "Cỗ máy Sản xuất Toàn cầu",
      hubDesc:
        "Ulsan là nơi đặt các nhà máy lớn nhất của Hyundai và các tập đoàn hóa chất, đóng vai trò then chốt trong chuỗi cung ứng toàn cầu.",
    },
  },
  ko: {
    seoul: {
      title: "서울",
      subTitle: "글로벌 허브 도시 서울 – 경제, 문화 및 혁신의 중심",
      industries: "금융, ICT, 비즈니스 서비스, 문화 콘텐츠, 기술 스타트업",
      stats: {
        pop: "9,428,372",
        comp: "1,150,000",
        empl: "5,200,000",
        prod: "450.5",
      },
      zoneTitle: "서울 경제자유구역 (SFEZ)",
      zoneDesc:
        "서울은 아시아 최고의 금융 및 스타트업 허브로서 첨단 디지털 인프라와 함께 세계적인 비즈니스 환경을 제공합니다.",
      hubTitle: "한류와 디지털 경제의 심장",
      hubDesc:
        "서울은 대한민국의 경제 성장을 견인하며 글로벌 다국적 기업들이 집결하여 세계적인 기술 트렌드를 선도하는 도시입니다.",
    },
    busan: {
      title: "부산",
      subTitle: "글로벌 물류 및 관광의 거점 해양도시",
      industries: "항만 물류, 조선, 관광, 영화 콘텐츠, 해양 금융",
      stats: {
        pop: "3,317,812",
        comp: "305,000",
        empl: "1,450,000",
        prod: "92.4",
      },
      zoneTitle: "부산진해경제자유구역 (BJFEZ)",
      zoneDesc:
        "부산항은 동북아시아의 핵심 물류 관문으로 세계적인 컨테이너 물동량 처리 능력을 보유하고 있습니다.",
      hubTitle: "물류 및 해양 경제의 허브",
      hubDesc:
        "부산은 항만 경쟁력과 세계 수준의 관광 인프라를 바탕으로 스마트 해양 도시로 도약하고 있습니다.",
    },
    incheon: {
      title: "인천",
      subTitle: "세계를 향해 열린 대한민국의 관문",
      industries: "항공 물류, 바이오 헬스, 자동차, 반도체, 신재생에너지",
      stats: {
        pop: "2,989,125",
        comp: "220,000",
        empl: "1,200,000",
        prod: "85.1",
      },
      zoneTitle: "인천경제자유구역 (IFEZ)",
      zoneDesc:
        "인천국제공항과 송도, 영종, 청라 국제도시를 품은 IFEZ는 대한민국에서 가장 성공적인 경제자유구역입니다.",
      hubTitle: "글로벌 바이오 클러스터 및 물류 허브",
      hubDesc:
        "인천은 세계 최대 규모의 바이오 의약품 생산 역량을 갖추고 있으며, 전략적 위치 덕분에 외국인 투자의 최적지입니다.",
    },
    daegu: {
      title: "대구",
      subTitle: "혁신 의료 및 미래 로봇 산업의 도시",
      industries: "로봇, 스마트 의료, 미래 자동차 부품, 디지털 섬유",
      stats: {
        pop: "2,375,306",
        comp: "250,000",
        empl: "1,050,000",
        prod: "55.8",
      },
      zoneTitle: "대구경북경제자유구역 (DGFEZ)",
      zoneDesc:
        "DGFEZ는 첨단 기술 산업 생태계를 조성하고 지역 최고의 고품질 의료 서비스 허브 구축에 집중하고 있습니다.",
      hubTitle: "로봇 및 헬스케어 산업의 중심지",
      hubDesc:
        "대구는 스마트 시티 솔루션 테스트베드로서 첨단 기술 중심의 경제 구조 전환을 선도하고 있습니다.",
    },
    daejeon: {
      title: "대전",
      subTitle: "대한민국 최고의 과학 기술 및 연구 도시",
      industries: "R&D, 항공우주, 바이오테크, 반도체, 나노 기술",
      stats: {
        pop: "1,442,213",
        comp: "125,000",
        empl: "650,000",
        prod: "42.3",
      },
      zoneTitle: "대덕연구개발특구",
      zoneDesc:
        "국가 연구소와 명문 대학이 밀집한 대전은 대한민국의 가장 중요한 기술 발명과 혁신이 시작되는 곳입니다.",
      hubTitle: "한국의 실리콘밸리",
      hubDesc:
        "대전은 혁신을 추구하는 기술 기업들에게 우수한 인적 자원과 독보적인 연구 인프라를 제공합니다.",
    },
    gwangju: {
      title: "광주",
      subTitle: "인공지능과 문화예술이 공존하는 도시",
      industries: "인공지능 (AI), 친환경 자동차, 스마트 에너지",
      stats: {
        pop: "1,417,716",
        comp: "115,000",
        empl: "600,000",
        prod: "38.9",
      },
      zoneTitle: "광주경제자유구역 (GJFEZ)",
      zoneDesc:
        "GJFEZ는 인공지능과 현대적인 자동차 제조 산업을 결합한 대한민국 유일의 AI 중심 산업 단지입니다.",
      hubTitle: "AI 혁신 및 문화 산업의 거점",
      hubDesc:
        "광주는 미래 기술과 호남 지역의 깊은 문화 예술적 자산이 결합되어 독특한 시너지를 창출합니다.",
    },
    ulsan: {
      title: "울산",
      subTitle: "대한민국의 산업 수도",
      industries: "자동차, 조선, 석유화학, 수소 에너지, 신소재",
      stats: {
        pop: "1,103,661",
        comp: "95,000",
        empl: "550,000",
        prod: "165.2",
      },
      zoneTitle: "울산경제자유구역 (UFEZ)",
      zoneDesc:
        "UFEZ는 세계 최대 규모의 산업 클러스터를 기반으로 신에너지 및 친환경 수소 경제 발전을 주도하고 있습니다.",
      hubTitle: "글로벌 제조 엔진",
      hubDesc:
        "현대자동차와 대형 조선소, 화학 단지가 위치한 울산은 글로벌 공급망에서 핵심적인 역할을 수행합니다.",
    },
  },
};
