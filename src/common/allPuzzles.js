const allPuzzles = [
  {
    id: 0,
    name: "枋橋公學校",
    description:
      "大正10年(1921年) 4月1日, 因台灣行政區改制後枋橋改名為板橋，學校配合更名為板橋公學校。",
    location: {
      lat: 25.011834,
      lng: 121.458653
    },
    is_main: true,
    stages: [
      {
        order: 1,
        name: "枋橋公學校",
        description:
          "西元1899年，日人借用大觀義學，創設『枋橋公學校』，到西元1908年，學校不敷使用，林家捐地建設現在的板橋國小，讓子弟們有良好的讀書環境。",
        location: {
          lat: 25.011166,
          lng: 121.45549
        },
        question: "1+1=?",
        answer: "2",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 2,
        name: "枋橋建學碑",
        description:
          "日本總督親自書寫《枋橋建學碑》的標題，政務官大島久滿次撰寫碑文讚頌林家義行，並邀請日本書法家日下部東作書寫，現在列為三級古蹟，存放在板橋國小前門圍牆邊。",
        location: {
          lat: 25.010721,
          lng: 121.455233
        },
        question: "1+2=?",
        answer: "3",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 3,
        name: "枋橋公學校 關卡3",
        description: "枋橋公學校 關卡3",
        location: {
          lat: 25.010501,
          lng: 121.45562
        },
        question: "1+3=?",
        answer: "4",
        hints: ["hint1", "hint2", "hint3"]
      }
    ]
  },
  {
    id: 1,
    name: "板橋接雲寺",
    description:
      "板橋接雲寺，是位於臺灣新北市板橋區留侯里的觀音寺，為板橋、土城、中和的板橋十三莊漳州裔所供奉。板橋接雲寺，是位於臺灣新北市板橋區留侯里的觀音寺，為板橋、土城、中和的板橋十三莊漳州裔所供奉。",
    location: {
      lat: 25.009133,
      lng: 121.45485
    },
    is_main: true,
    stages: [
      {
        order: 1,
        name: "觀音媽廟",
        description:
          "板橋接雲寺。從中和慈雲寺接靈而來。因為中和觀音定期會來板橋，某天因故燒了中和慈雲寺，恰巧觀音移駕至板橋，從此定居於此。...",
        location: {
          lat: 25.011166,
          lng: 121.45549
        },
        question: "🤚1☁1 = ?",
        answer: "1",
        hints: ["接雲", "hint2", "hint3"]
      },
      {
        order: 2,
        name: "正殿將軍",
        description:
          "枋橋最早的觀音廟，是湳雅夜市附近的接雲寺，是西元1867年落成的。",
        location: {
          lat: 25.010721,
          lng: 121.455233
        },
        question: "👁🤚👂✋",
        answer: "1",
        hints: ["👁綠 | 👂紅", "hint2", "元寶"]
      },
      {
        order: 3,
        name: "想不到",
        description: "",
        location: {
          lat: 25.010501,
          lng: 121.45562
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      }
    ]
  },
  {
    id: 2,
    name: "板橋慈惠宮",
    description:
      "板橋慈惠宮，是位於臺灣新北市板橋區挹秀里的媽祖廟，其媽祖稱為「板橋媽」，鴻海集團創辦人郭台銘小時候曾住在此廟。",
    location: {
      lat: 25.009578,
      lng: 121.457537
    },
    is_main: true,
    stages: [
      {
        order: 1,
        name: "天上聖母",
        description:
          "一樓主要是奉祀的是天上聖母，天上聖母是台灣民間信仰中重要的神祇之一，其信仰者遍及海內外。",
        location: {
          lat: 25.011166,
          lng: 121.45549
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 2,
        name: "小郭的家",
        description:
          "慈惠宮改建，廟方從地理師口中得知郭家住所正是廟中的財位，就將廂房改建為五路財神殿。",
        location: {
          lat: 25.010721,
          lng: 121.455233
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 3,
        name: "圓通寶殿",
        description:
          "千手千眼觀世音菩薩的千手千眼乃為救度眾生，以四十手配四十眼，每手有一慈眼，各自攝護『二十五有界』合為『千手千眼』。",
        location: {
          lat: 25.010501,
          lng: 121.45562
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      }
    ]
  },
  {
    id: 3,
    name: "林家花園",
    description:
      "林本源園邸位於新北市板橋區，為板橋林本源家族興建的房舍，仿蘇州留園設計，是目前臺灣僅存最完整的園林建築。",
    location: {
      lat: 25.011285,
      lng: 121.454557
    },
    is_main: true,
    stages: [
      {
        order: 1,
        name: "月波水榭",
        description:
          "月波水榭為一賞月之所。海棠形的水池漂浮著一座雙菱形的水榭，...",
        location: {
          lat: 25.011166,
          lng: 121.45549
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 2,
        name: "觀稼樓",
        description:
          "觀稼樓本身為園中第二大的建築物，同時，為榕蔭大池主景建物與背景...",
        location: {
          lat: 25.010721,
          lng: 121.455233
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 3,
        name: "來青閣",
        description:
          "來青閣為昔日招待貴賓及貴賓下榻之處，亦為俯覽橫虹臥月的虹橋與定靜堂間植百花之所。",
        location: {
          lat: 25.010501,
          lng: 121.45562
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      }
    ]
  },
  {
    id: 4,
    name: "湳仔港",
    description:
      "過去，她承載著板橋文 明發展歷史的記憶，現今，她更是板橋市唯一僅存的露天河流。",
    location: {
      lat: 25.010036,
      lng: 121.451511
    },
    is_main: true,
    stages: [
      {
        order: 1,
        name: "板橋福興宮",
        description:
          "建立於乾隆四十五年（1780年）的土地公廟，早有二百多年的歷史，而廟前則是湳仔過去繁盛的渡船頭，這裡也是聚落居民的信仰中心。",
        location: {
          lat: 25.011166,
          lng: 121.45549
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 2,
        name: "江家古厝",
        description: "",
        location: {
          lat: 25.010721,
          lng: 121.455233
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 3,
        name: "消失的河",
        description:
          "整個湳仔溝溯源，從下游走到這裡，我們無法判定湳仔溝路跡，它已被大安圳取代，整條河流至此消逸無蹤...",
        location: {
          lat: 25.010501,
          lng: 121.45562
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      }
    ]
  },
  {
    id: 5,
    name: "枋橋城遺址",
    description:
      "五座城門(東西南北小東門)，四大古廟(迪義、接雲、慈、大眾)，三條水流(公館溝、大安圳、湳仔溪)，兩位財主(林本源、郭台銘)，兩種族群(漳州人- 板橋林家、泉州人- 新莊萬華)，一面城牆(古城牆遺跡)",
    location: {
      lat: 25.009959,
      lng: 121.454328
    },
    is_main: true,
    stages: [
      {
        order: 1,
        name: "想不到",
        description: "",
        location: {
          lat: 25.011166,
          lng: 121.45549
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 2,
        name: "真的想不到",
        description: "",
        location: {
          lat: 25.010721,
          lng: 121.455233
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      },
      {
        order: 3,
        name: "真的真的想不到",
        description: "",
        location: {
          lat: 25.010501,
          lng: 121.45562
        },
        question: "1=?",
        answer: "1",
        hints: ["hint1", "hint2", "hint3"]
      }
    ]
  }
];

export default allPuzzles;
