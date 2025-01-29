const admin = require("firebase-admin");

// Firebase Admin SDK 초기화
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mentors-app-fb958.firebaseio.com",
});

console.log("Firebase Admin SDK initialized!");

const firestore = admin.firestore();

const categoriesWithQuestions = [
  {
    cate_name: "IT/전문기술",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "it_mentee_q1",
            questionText: "당신이 배우고 싶은 분야는 무엇입니까?",
            hintText:
              "예: 웹개발(Frontend: React, Vue / Backend: Node.js, Spring), 데이터 분석(Python, R), 클라우드 인프라(AWS, Azure), 보안, 네트워크 등",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "it_mentee_q2",
            questionText: "해당 분야에서 무엇을 배우고 싶으십니까?",
            hintText:
              "예: 프로젝트 실무 적용 방법, 프레임워크 사용법(Spring Boot, Django), 데이터 시각화, 머신러닝 모델 구현, DB ERD 설계 등",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "it_mentee_q3",
            questionText: "어떤 도움을 바랍니까?",
            hintText: "예: 실제 프로젝트 사례 공유, 코드 리뷰, 면접 대비 팁 등",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "it_mentor_q1",
            questionText:
              "어떤 IT 분야에서 전문성을 가지고 있습니까? 혹은 어떤 기술 스택을 가지고 있습니까?",
            hintText:
              "예: 웹개발(front-end, back-end), 모바일 앱, 클라우드, python, java 등등",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "it_mentor_q2",
            questionText:
              "멘티에게 제공할 수 있는 구체적인 멘토링 내용은 무엇입니까?",
            hintText:
              "예: 프로젝트 실무 적용 방법, 프레임워크 사용법(Spring Boot, Django), 데이터 시각화, 머신러닝 모델 구현, DB ERD 설계 등",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "it_mentor_q3",
            questionText: "해당 분야에서 어떤 도움을 줄 수 있습니까?",
            hintText: "예: 실제 프로젝트 사례 공유, 코드 리뷰, 면접 대비 팁 등",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
  // 다른 카테고리들도 비슷한 방식으로 추가 가능
  {
    cate_name: "예술",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "art_mentee_q1",
            questionText: "당신이 배우고 싶은 분야는 무엇입니까?",
            hintText: "예: 성악, 만화/웹툰, 피아노, 노래 등 ",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "art_mentee_q2",
            questionText: "해당 분야에서 무엇을 배우고 싶으십니까?",
            hintText: "예: 색채 이론, 발성 테크닉, 무대 연출, 작품 분석 등",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "art_mentee_q3",
            questionText: "어떤 도움을 바랍니까?",
            hintText:
              "예: 작품 피드백, 오디션 노하우, 재료 선택, 창의성 개발 등",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "art_mentor_q1",
            questionText: "어떤 분야에 경력 또는 경험이 있습니까? ",
            hintText: "예: 일러스트레이터, 뮤지컬 트레이너, 캘리그래퍼 등",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "art_mentor_q2",
            questionText: "해당 분야에서 무엇을 가르칠 수 있습니까?",
            hintText: "예: 색채 이론, 발성 테크닉, 공연 기획, 작품 비평 등",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "art_mentor_q3",
            questionText: "해당 분야에서 어떤 도움을 줄 수 있습니까?",
            hintText: "작품 피드백, 오디션 멘토링, 재료 선택, 창의성 개발 등",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
  {
    cate_name: "학업/교육",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "edu_mentee_q1",
            questionText: "당신이 배우고 싶은 분야는 무엇입니까?",
            hintText: "예: 언어, 과학, 수학, 역사 등",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "edu_mentee_q2",
            questionText: "해당 분야에서 무엇을 배우고 싶으십니까?",
            hintText: "예: 핵심 개념 정리, 문제 풀이 스킬, 논술·작문기법 등",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "edu_mentee_q3",
            questionText: "어떤 도움을 바랍니까?",
            hintText: "예: 공부법, 시험 대비 팁, 동기부여, 진학·진로상담 등",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "edu_mentor_q1",
            questionText: "어떤 분야에 경력 또는 경험이 있습니까?",
            hintText: "예: 중·고교 과학 교사, 언어학 석사, 수학 과외 경험 등",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "edu_mentor_q2",
            questionText: "해당 분야에서 무엇을 가르칠 수 있습니까?",
            hintText:
              "예: 효율적 문제 풀이, 학습 계획 수립, 요약·정리 노하우 등",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "edu_mentor_q3",
            questionText: "해당 분야에서 어떤 도움을 줄 수 있습니까?",
            hintText: "예: 시험 대비 문제은행, 공부법 코칭, 진로상담 등",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },

  {
    cate_name: "마케팅",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "marketing_mentee_q1",
            questionText: "현재 관심 있는 마케팅 분야와 그 이유는 무엇인가요?",
            hintText:
              "예: 디지털 마케팅, 콘텐츠 마케팅, SNS 마케팅, 브랜드 마케팅 등 구체적인 분야와 관심 이유를 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "marketing_mentee_q2",
            questionText:
              "마케팅 역량 강화를 위해 구체적으로 어떤 스킬을 배우고 싶으신가요?",
            hintText:
              "예: SEO, 소셜미디어 광고, 데이터 분석, 콘텐츠 기획, 브랜드 전략 등 배우고 싶은 구체적인 마케팅 스킬을 적어주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "marketing_mentee_q3",
            questionText:
              "마케팅 분야에서 가장 큰 도전과 극복하고 싶은 과제는 무엇인가요?",
            hintText:
              "예: 타겟 고객 발굴, 효과적인 마케팅 전략 수립, 마케팅 성과 측정, 트렌드 대응 등 현재 느끼는 마케팅 관련 도전 과제를 설명해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "marketing_mentor_q1",
            questionText:
              "본인이 전문으로 하는 마케팅 분야와 그 전문성의 근거는 무엇인가요?",
            hintText:
              "예: 특정 마케팅 분야(예: B2B 마케팅, 소셜미디어 마케팅)에서의 경력, 성과, 자격증, 프로젝트 경험 등을 구체적으로 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "marketing_mentor_q2",
            questionText:
              "마케팅 스킬 향상을 위해 멘티에게 구체적으로 어떤 조언을 제공할 수 있나요?",
            hintText:
              "예: 마케팅 툴 활용법, 효과적인 콘텐츠 전략, 데이터 기반 의사결정, 개인 브랜딩 등 멘티의 성장을 위한 실질적인 조언을 적어주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "marketing_mentor_q3",
            questionText:
              "마케팅 분야에서 성공을 위해 극복해야 할 주요 챌린지는 무엇이라고 생각하시나요?",
            hintText:
              "예: 빠르게 변화하는 디지털 마케팅 트렌드, 경쟁 심화, 고객 니즈 파악, 마케팅 ROI 측정 등 마케팅 분야의 핵심 도전 과제를 설명해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
  {
    cate_name: "자기개발",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "self_dev_mentee_q1",
            questionText:
              "현재 관심 있는 자기개발 분야와 그 분야에서 구체적으로 성장하고 싶은 개인적/전문적 능력은 무엇인가요?",
            hintText:
              "예: 감성 지능 개발, 리더십 역량 강화, 시간 관리 및 생산성 향상, 창의적 문제 해결 능력, 감정 조절 및 스트레스 관리 등 구체적인 자기개발 목표와 발전 방향을 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "self_dev_mentee_q2",
            questionText:
              "자기개발 과정에서 현재 가장 큰 도전은 무엇이며, 이를 극복하기 위한 구체적인 학습 전략은 무엇인가요?",
            hintText:
              "예: 자기주도적 학습 능력 부족 → 포모도로 기법 활용, 주간 학습 계획 수립 및 추적, 온라인 자기계발 강좌 정기적 수강, 멘토링 프로그램 참여, 주 15시간 집중 자기개발 시간 할애 등 구체적인 도전과 개선 방법을 기술해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "self_dev_mentee_q3",
            questionText:
              "자기개발 분야에서 3년 후 본인의 구체적인 목표와 성장 계획은 무엇인가요?",
            hintText:
              "예: 감성 지능 평가 점수 20% 향상, 개인 브랜딩 콘텐츠 창작 및 온라인 플랫폼 구축, 전문 코칭 자격증 취득, 연간 3권의 자기계발 서적 독서 및 실천 계획, 개인 성장 블로그 운영 등 측정 가능한 목표를 작성해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "self_dev_mentor_q1",
            questionText:
              "본인의 자기개발 분야에서 가장 의미 있는 개인적 성장 경험, 주요 성과, 그리고 전문적인 자기개발 접근 방식은 무엇인가요?",
            hintText:
              "예: 스트레스 관리 및 회복력 개발을 통한 번아웃 극복, 감성 지능 워크숍 개발 및 진행, 개인 브랜딩을 통한 커리어 전환 성공, 자기주도적 학습 방법론 개발 등 구체적인 자기개발 성과를 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "self_dev_mentor_q2",
            questionText:
              "자기개발 분야에서 지속적인 개인적 성장과 전문성 개발을 위해 실천하는 구체적인 방법은 무엇인가요?",
            hintText:
              "예: 월 1회 자기계발 워크샵 참석, 개인 성장 저널링, 멘토링 네트워크 구축, 분기별 개인 목표 성과 평가, 연 2회 자기개발 관련 컨퍼런스 참여, 다양한 자기개발 방법론 실험 등 구체적인 성장 전략을 기술해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "self_dev_mentor_q3",
            questionText:
              "멘티들이 자기개발 분야에서 성장하기 위해 갖추어야 할 핵심적인 개인적, 전문적 역량은 무엇이라고 생각하시나요?",
            hintText:
              "예: 개인적 역량(자기인식, 감정 조절, 회복력), 전문적 역량(지속적 학습, 목표 설정 및 추적), 성장 마인드셋(실패를 통한 학습, 개방성, 자기 동기부여) 등 구체적이고 실천 가능한 성장 전략을 제시해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],

        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
  {
    cate_name: "취업&커리어",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "career_mentee_q1",
            questionText:
              "현재 관심 있는 직무/산업 분야와 그 분야에서 구체적으로 성장하고 싶은 전문적 역량은 무엇인가요?",
            hintText:
              "예: 관심 있는 직무(개발, 디자인, 마케팅 등)와 산업 분야(IT, 금융, 교육 등)를 선택한 개인적/전문적 동기를 상세히 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "career_mentee_q2",
            questionText:
              "취업 또는 커리어 전환을 위해 현재 준비하고 있거나 개선해야 할 핵심 역량은 무엇인가요?",
            hintText:
              "예: 기술적 역량(프로그래밍, 디자인 툴 등), 소프트 스킬(의사소통, 팀워크 등), 산업 지식 등 구체적으로 개선이 필요한 역량을 말씀해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "career_mentee_q3",
            questionText:
              "이상적인 커리어 성장 경로와 그 과정에서 예상되는 도전 과제는 무엇인가요?",
            hintText:
              "예: 단기/장기 커리어 목표, 희망하는 직급/역할, 예상되는 어려움(경쟁, 기술 변화, 워크라이프 밸런스",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "career_mentor_q1",
            questionText:
              "본인의 커리어 성공 스토리와 그 과정에서 얻은 핵심 인사이트는 무엇인가요?",
            hintText:
              "예: 커리어 성장 과정의 주요 전환점, 성공의 핵심 요인, 극복한 어려움과 그 과정에서 배운 중요한 교훈을 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "career_mentor_q2",
            questionText:
              "취업 시장에서 경쟁력 있는 인재가 되기 위해 필요한 핵심 역량은 무엇이라고 생각하시나요?",
            hintText:
              "예: 기술적 역량, 소프트 스킬, 네트워킹 능력, 지속적 학습 능력 등 현재 취업 시장에서 중요하다고 생각하는 핵심 역량을 설명해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "career_mentor_q3",
            questionText:
              "커리어 개발과 성장을 위해 멘티에게 제공할 수 있는 구체적인 조언과 멘토링 방식은 무엇인가요?",
            hintText:
              "예: 커리어 로드맵 설계, 네트워킹 전략, 면접 준비, 포트폴리오 피드백, 실무 인사이트 공유 등 구체적인 멘토링 방식을 설명해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],

        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
  {
    cate_name: "금융/경제",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "finance_mentee_q1",
            questionText:
              "현재 관심 있는 금융/경제 분야와 그 분야에서 구체적으로 성장하고 싶은 전문적 역량은 무엇인가요?",
            hintText:
              "예: 주식 투자의 가치투자 전략, 부동산 투자의 리스크 관리 능력, 핀테크 산업의 데이터 기반 재무 분석, 스타트업 펀딩의 투자 의사결정 능력 등 구체적인 금융/경제 목표와 발전 방향을 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "finance_mentee_q2",
            questionText:
              "금융/경제 분야에서 현재 가장 큰 도전은 무엇이며, 이를 극복하기 위한 구체적인 학습 전략은 무엇인가요? ",
            hintText:
              "예: 투자 심리 관리 및 감정 컨트롤 부족 → 행동경제학 서적 스터디, 투자 심리 워크샵 참여, 투자 일지 작성, 주 10시간 재무 분석 및 투자 전략 연구, 멘토링 프로그램 참여 등 구체적인 도전과 개선 방법을 기술해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "finance_mentee_q3",
            questionText:
              "금융/경제 분야에서 3년 후 본인의 구체적인 재무/투자 목표와 성장 계획은 무엇인가요? ",
            hintText:
              "예: 연간 투자 수익률 15% 달성, 부동산 투자 포트폴리오 구축, 재무설계사 자격증 취득, 개인 재무 블로그 운영, 패시브 인컴 월 100만원 창출 등 측정 가능한 목표를 작성해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "finance_mentor_q1",
            questionText:
              "본인의 금융/경제 분야에서 가장 의미 있는 투자 경험, 주요 성과, 그리고 전문적인 재무 접근 방식은 무엇인가요? ",
            hintText:
              "예: 금융 위기 극복을 위한 포트폴리오 재구성, 성공적인 스타트업 투자, 장기 가치투자 전략 개발, 리스크 관리를 통한 안정적 수익 창출 등 구체적인 금융/경제 성과를 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "finance_mentor_q2",
            questionText:
              "금융/경제 분야에서 지속적인 전문성과 투자 역량 개발을 위해 실천하는 구체적인 방법은 무엇인가요? ",
            hintText:
              "예: 월 1회 경제 세미나 참석, 분기별 투자 포트폴리오 리밸런싱, 연 2회 금융 컨퍼런스 참여, 경제 전문 저널 정기 구독, 글로벌 경제 트렌드 분석, 투자 네트워크 확장 등 구체적인 성장 전략을 기술해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "finance_mentor_q3",
            questionText:
              "멘티들이 금융/경제 분야에서 성장하기 위해 갖추어야 할 핵심적인 재무/투자 역량은 무엇이라고 생각하시나요? ",
            hintText:
              "예: 분석적 역량(재무제표 분석, 경제 지표 해석), 리스크 관리 능력, 장기적 관점, 지속적 학습 의지, 감정 컨트롤, 데이터 기반 의사결정 등 구체적이고 실천 가능한 성장 전략을 제시해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],

        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
  {
    cate_name: "취미",
    questions: [
      {
        position: "mentee",
        questionnaire: [
          {
            questionId: "hobby_mentee_q1",
            questionText:
              "현재 관심 있는 취미와 그 취미를 선택한 동기는 무엇인가요?",
            hintText:
              "예: 음악, 그림, 요리, 사진, 등산, 악기, 보드게임, 댄스 등 현재 즐기고 있거나 배우고 싶은 취미와 그 취미에 매력을 느끼는 이유를 구체적으로 설명해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "hobby_mentee_q2",
            questionText:
              "해당 취미 분야에서 구체적으로 배우고 싶거나 개선하고 싶은 부분은 무엇인가요?",
            hintText:
              "예: 기술적 향상, 전문성 개발, 창의성 확장, 심화 학습 등 취미와 관련하여 현재 도전하고 싶은 구체적인 목표나 개선하고 싶은 영역을 설명해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "hobby_mentee_q3",
            questionText:
              "취미 활동을 통해 얻고 싶은 개인적/사회적 가치는 무엇인가요? ",
            hintText:
              "예: 스트레스 해소, 자아실현, 새로운 커뮤니티 형성, 창의성 발휘, 재능 개발, 심리적 만족감 등 취미 활동을 통해 달성하고 싶은 개인적, 사회적 가치를 구체적으로 설명해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
      {
        position: "mentor",
        questionnaire: [
          {
            questionId: "hobby_mentor_q1",
            questionText:
              "본인이 전문적으로 또는 깊이 있게 즐기는 취미 분야와 그 경험은 무엇인가요? ",
            hintText:
              "예: 취미와 관련된 구체적인 활동 경력, 성과, 전문성, 특별한 경험 등을 상세히 설명해주세요. 예를 들어 photography, 요리, 악기 연주 등에서의 전문성을 공유해주세요.",
            maxLength: 150,
            order: 1,
          },
          {
            questionId: "hobby_mentor_q2",
            questionText:
              "취미 활동에서 성장하고 발전하기 위해 본인이 실천하는 구체적인 방법은 무엇인가요? ",
            hintText:
              "예: 지속적인 학습, 워크샵 참여, 커뮤니티 활동, 전문가와의 네트워킹, 개인 프로젝트 진행 등 취미 분야에서 성장하기 위해 실천하는 구체적인 방법을 설명해주세요.",
            maxLength: 150,
            order: 2,
          },
          {
            questionId: "hobby_mentor_q3",
            questionText:
              "취미 활동을 통해 얻은 가장 의미 있는 인사이트나 개인적 성장은 무엇인가요? ",
            hintText:
              "예: 자기 발견, 창의성 개발, 인간관계 확장, 스트레스 관리, 새로운 도전 정신 등 취미 활동을 통해 얻은 개인적, 정신적 성장과 의미 있는 경험을 구체적으로 공유해주세요.",
            maxLength: 150,
            order: 3,
          },
        ],

        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        isDeleted: false,
      },
    ],
  },
];

const addQuestions = async () => {
  try {
    for (const categoryData of categoriesWithQuestions) {
      console.log(`Processing category: ${categoryData.cate_name}`);

      const categorySnapshot = await firestore
        .collection("categories")
        .where("cate_name", "==", categoryData.cate_name)
        .where("what_for", "==", "main")
        .limit(1)
        .get();

      if (categorySnapshot.empty) {
        console.log(`Category not found: ${categoryData.cate_name}`);
        continue;
      }

      const categoryDoc = categorySnapshot.docs[0];
      const batch = firestore.batch();

      // 기존 questions 컬렉션의 문서들을 삭제
      const existingQuestions = await categoryDoc.ref
        .collection("questions")
        .get();
      existingQuestions.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      // 새로운 questions 추가
      for (const questionSet of categoryData.questions) {
        const questionRef = categoryDoc.ref.collection("questions").doc();
        batch.set(questionRef, questionSet);
      }

      await batch.commit();
      console.log(
        `Successfully processed questions for ${categoryData.cate_name}`
      );
    }

    console.log("All questions added successfully!");
  } catch (error) {
    console.error("Error adding questions:", error);
    throw error;
  }
};

// 실행
addQuestions()
  .then(() => {
    console.log("Questions creation completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error: ", err);
    process.exit(1);
  });
