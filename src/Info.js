const stacks = [
  {
    name: "Front-End Engineering",
    list: "React, TypeScript, JavaScript, HTML/CSS",
  },
  {
    name: "Back-End Engineering",
    list: "JavaScript, TypeScript, JAVA, Spring, Servlet, Node.js, express.js",
  },
  {
    name: "Dev-Ops",
    list: "Nginx, AWS (EC2, S3, Lambda, Api GateWay, etc...)",
  },
  {
    name: "DataBase",
    list: "MYSQL, MariaDB",
  },
  {
    name: "Tool",
    list: "Git",
  },
  {
    name: "Etc",
    list: "React Native, Python",
  },
];

const project = {
  personal: [
    {
      id: 1,
      name: "VT-livechat",
      date: "2021.12 ~",
      description: "VRChat 서비스 기반 채팅 사이트",
      language: "node.js, typescript, express, socket.io",
      information: [
        "Github를 이용해 협업 및 이슈 관리",
        "Github Action을 이용해, TDD 개발론 적용",
        "yarn berry를 이용해 개발환경 의존성 제거",
      ],
      role: [
        "백엔드 개발 담당",
        "단위 테스트 기능 스터디",
        "supertest를 이용한 테스트 케이스 작성",
      ],
    },
    {
      id: 2,
      name: "Dev-lift(가제)",
      date: "2021.01 ~ (보류중)",
      description:
        "유튜브의 추천 강의를 유저들이 등록해서 보여줄 수 있는 사이트",
      github: "https://github.com/curriculum-of-coding/BackEnd-web",
      language: "node.js, typescript, express, mongoose, docker",
      information: ["Github를 이용해 협업 및 이슈 관리"],
      role: ["백엔드 개발 담당", "기본 템플릿 제작"],
    },
    {
      id: 3,
      name: "VRChat Together",
      date: "2020.06 ~ ",
      description: "VRChat OpenApi 기반 친구관리 앱",
      information: [
        "React Native를 이용한 하이브리드 앱",
        "Github를 이용해 협업 및 이슈 관리",
      ],
      language: "React Native",
      github: "https://github.com/Aboa123/VT-VrchatTogether-",
      playstore: "https://play.google.com/store/apps/details?id=com.vrct",
      role: [
        "Open Api 분석 및 연동 설계",
        "데이터 가공 및 화면 구성",
        "1만 이상 다운로드와. 별점 4점대 유지",
      ],
    },
    {
      id: 4,
      name: "Hermes",
      date: "2018.05 ~ 2018.06",
      description: "교내 자바 프로젝트 제출작 / 택배 보관함",
      language: "C#, PHP, Java",
      information: [
        "C#을 통한 기기 통제 관리 프로그램",
        "아두이노를 이용한 서버, 앱 연동 택배 보관함 제작",
      ],
      github: "https://github.com/0xlethe/project_hermes",
      role: ["아두이노 연동 및 C# 통제 프로그램 설계"],
    },
  ],
  nonPersonal: [
    {
      id: 1,
      name: "이지 롤 플러스",
      date: "2021.09 ~ 2022.02",
      description: "스마트 블라인드",
      language: "Spring boot, node.js, mqtt, ec2, aws lambda, nginx",
      information: [
        "mqtt를 이용한 기기간 통신",
        "nginx를 통한 실시간 배포 구성",
      ],
      role: [
        "비밀번호 찾기 개발",
        "mqtt 라이브러리 마이그레이션",
        "AWS 서버 환경 재구성",
      ],
    },
    {
      id: 2,
      name: "Motilink",
      date: "2020.02 ~ 2022.02",
      description: "멀티 플랫폼 기반 기업용 협업 서비스",
      language: "Java Servlet, AWS EC2, AWS RDS, Nginx, JSP, Angularjs",
      information: [
        "업무 관리, 일정관리 서비스 설계 및 개발",
        "기존 서비스 유지보수 및 리팩토링",
      ],
      role: [
        "프론트, 백엔드 개발",
        "서버 오류 발생률 전년 대비 40% 이상 감소",
        "서버 로깅 시스템 변경으로 오류 분석 최적화 진행",
      ],
    },
  ],
};

const interests = [
  {
    title: "Programming",
    contents: ["C#, Rust, Golang, Dart", "DevOps", "Game Programming", "3D"],
  },
  { title: "Music", contents: ["Piano"] },
];

const hobbys = [
  {
    title: "Game",
    contents: [
      "리그 오브 레전드",
      "메이플 스토리 (유니온 8100 이상, 252 비숍)",
      "크루세이더 퀘스트",
    ],
  },
  { title: "음악 듣기" },
  { title: "책 읽기" },
];

const timelines = [
  {
    date: "2017",
    list: ["수원대학교 정보보호학과 입학", "교내 소프트웨어 개발대회 은상"],
  },
  {
    date: "2018",
    list: ["서울시 공공데이터 공모전 참가상 수상"],
  },
  {
    date: "2020 ~ 2022",
    list: ["산업기능요원 복무"],
  },
];

const careers = [
  {
    company: "(주)포커스원",
    tenure: "2020.02 ~ 2022.02",
    position: "산업기능요원 / 백엔드 개발자",
  },
];

const prizes = [
  {
    name: "교내 소프트웨어 개발대회",
    date: "2017",
    prize: "은상",
    github: "https://github.com/0xlethe/The_ruin",
    description:
      "C언어만 이용하라는 조건이 있어, 여러가지 미니게임을 혼합한 콘솔게임을 만들었습니다.",
  },
  {
    name: "서울시 공공데이터 공모전",
    date: "2018.09",
    prize: "참가상",
    github: "https://github.com/0xlethe/SEOUL-2018-Help_ping",
    description:
      "서울시에서 급한 일이 생길 때 공공화장실을 찾기 힘들어, 사용자에게 공공화장실과, 내부 시설, 장애인 화장실 여부를 알려주는 어플리케이션입니다.",
  },
];

const introduction = {
  whoami: "SoftWare Programmer",
  profile: [
    "주도적으로 서비스를 효율적으로 개선하고 개편하고 싶어합니다.",
    "어제 짠 코드가 효율적으로 만들었는지 확인하고, 팀에 도움이 되는 개발을 지향합니다.",
  ],
  phone: "010-7551-1006",
  email: "lecheln00@gmail.com",
  github: "https://github.com/0xlethe",
  profileImage:
    "https://avatars.githubusercontent.com/u/37437842?s=400&u=6de10945209c715d72c9f3faf0c8939b521df93d&v=4",
};

export {
  timelines,
  careers,
  prizes,
  hobbys,
  interests,
  stacks,
  project,
  introduction,
};
