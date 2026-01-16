// src/i18n/_regions.ts
export const regions = {
  vi: {
    "reg.title": "Thông tin địa phương",
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
    "reg.title": "지역별 정보",
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

export const regionData = {
  title: "Regions",
  subtitle:
    "Korea's 17 Local Regions provide specialized investment environments and services.",
  mapBaseImage: "/images/regions/map_base.png", // Ảnh bản đồ gốc
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
  kfez: {
    title: "KFEZ, where the success formula for businesses unfolds",
    description:
      "Korean Free Economic Zones (KFEZ) are designed to actively attract foreign investment by improving the business environment and living conditions of foreign-invested companies and by maximizing the autonomy and investment incentives of companies through deregulation.",
    items: [
      {
        id: "incheon",
        name: "Incheon",
        fullName: "Incheon Free Economic Zone (IFEZ)",
        desc: "Incheon has been reborn as a global business hub. Incheon boasts an ideal international business environment, including Incheon International Airport, which has attained first place at the Airport Service Quality Awards (ASQ) for twelve consecutive years; the rapidly-growing Incheon Port; five world-class foreign universities located in Songdo Global Campus, and an international business complex. The Incheon Free Economic Zone (IFEZ) is a place where everything from bio, logistics, medical care, education, and high-tech industries can be enjoyed.",
        link: "https://www.ifez.go.kr/world/translate/view.do",
      },
      {
        id: "gyeonggi",
        name: "Gyeonggi",
        fullName: "Gyeonggi Free Economic Zone (GGFEZ)",
        desc: "Gyeonggi Free Economic Zone (GGFEZ) is located in the center of the West Coast Economic Belt. GGFEZ consists of three zones:: Pyeongtaek Poseung (BIX) Zone and Hyeondeok Zone for high-tech, logistics, and distribution industries; and Siheung Baegot Zone for R&D of land, sea, and unmanned aerial vehicles.",
        link: "https://ggfez.gg.go.kr/en/",
      },
      {
        id: "gangwon",
        name: "Gangwon State",
        fullName: "Gangwon State Free Economic Zone (GSFEZ)",
        desc: "Gangwon State Free Economic Zone (GSFEZ) is a special economic zone that improves the business environment and living conditions of foreign-invested companies located in Gangwon State. Various tax benefits, deregulation for free economic activities, a good living environment, and convenient administrative services guarantee a free and wide range of corporate activities.",
        link: "https://www.gsfez.go.kr/en",
      },
      {
        id: "chungbuk",
        name: "Chungbuk",
        fullName: "Chungbuk Free Economic Zone (CBFEZ)",
        desc: "Chungbuk is located in the central inland region and offers the shortest accessibility in all directions. Chungbuk Free Economic Zone (CEBFEZ) is a new hub for growing global cities and fostering the bio industry and the Urban Air Mobility industry, connected with the rotary wing maintenance.",
        link: "https://www.chungbuk.go.kr/ecoeng/index.do",
      },
      {
        id: "gwangju",
        name: "Gwangju",
        fullName: "Gwangju Free Economic Zone (GJFEZ)",
        desc: "Gwangju Free Economic Zone (GJFEZ) is the only AI-focused free economic zone in Korea. GJFEZ is building a new hub for Korea’s innovative growth through convergence of cutting-edge technologies, such as next-generation eco-friendly vehicles, smart energy, and biomedical technologies.",
        link: "https://www.gjfez.go.kr/eng/",
      },
      {
        id: "gwangyang",
        name: "Gwangyang Bay",
        fullName: "Gwangyang Bay Area Free Economic Zone (GFEZ)",
        desc: "Gwangyang Bay Area Free Economic Zone (GFEZ) consists of six specialized zones and seventeen complexes that are perfectly prepared for your success. GFEZ is a new hub for logistics, tourism, and new industries in Northeast Asia, taking shape as a dynamic, international trade city.",
        link: "https://www.gfez.go.kr/eng/index.do",
      },
      {
        id: "daegu",
        name: "Daegu Gyeongbuk",
        fullName: "Daegu Gyeongbuk Free Economic Zone (DGFEZ)",
        desc: "Daegu and Gyeongbuk are equipped with knowledge-based industries and service infrastructure. Daegu Gyeongbuk Free Economic Zone (DGFEZ) offers business sites, R&D facilities, and stable commercial and residential conditions, with a focus on IT convergence, high-tech transportation machinery parts, and medical industries.",
        link: "https://www.dgfez.go.kr/en/main.htm",
      },
      {
        id: "ulsan",
        name: "Ulsan",
        fullName: "Ulsan Free Economic Zone (UFEZ)",
        desc: "Ulsan is a no. 1 industrial city with the highest GDP per capita in Korea. The city is a home to world-class automobile, shipbuilding, and petrochemical companies. Ulsan aims to focus on fostering future mobility, bio, chemical, new materials, hydrogen, and low carbon energy industries.",
        link: "https://www.ulsan.go.kr/s/ufezEng/main.ulsan",
      },
      {
        id: "busan",
        name: "Busan Jinhae",
        fullName: "Busan Jinhae Free Economic Zone (BJFEZ)",
        desc: "Busan Port is the best logistics hub in Northeast Asia, dealing with 75% of domestic cargo volume. Busan Jinhae Free Economic Zone (BJFEZ) is a global industrial cluster of shipbuilding, automobile, and machinery industries as well as a key region for next-generation digital technologies.",
        link: "https://www.bjfez.go.kr/eng/english.web",
      },
    ],
  },
  locationReports: {
    title: "Location Report",
    moreText: "More",
    moreLink: "/location-report", // Đường dẫn trang xem thêm
    items: [
      {
        title:
          "Sejong Smart National Industrial Complex: Poised to Emerge as a Core Hub for the Industries of the Future",
        date: "2025.12.05",
        image: "/images/regions/report_01.png",
        link: "#",
        tags: [], // Nếu có tag thì điền vào đây
      },
      {
        title:
          "Ochang Science Industrial Complex: ever-advancing global hub for secondary battery and advanced industries",
        date: "2025.11.11",
        image: "/images/regions/report_02.png",
        link: "#",
        tags: [],
      },
      // Bạn có thể thêm các item mẫu khác nếu muốn test grid 3 cột
      {
        title:
          "Gyeongnam National Aerospace Industrial Complex, Korea’s Biggest Aerospace Hub",
        date: "2024.02.05",
        image: "/images/regions/report_03.png",
        link: "#",
        tags: ["Gyeongnam"],
      },
    ],
  },
};
