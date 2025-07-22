export interface Resource {
  id: string;
  title: string;
  author: string;
  date: string;
  attachments?: string[]; // 첨부파일 경로 배열 (선택적)
  content?: string; // 게시글 내용 (선택적)
}

export const resourcesData: Resource[] = [
  {
    id: "1",
    title: "2025년 장학생 모집 공고",
    author: "장학위원회",
    date: "2025.06.01",
    content: "2025년도 주안중앙교회 장학생을 아래와 같이 모집합니다. 많은 관심과 지원 바랍니다.",
    attachments: ["/files/scholarship_application_2025.pdf"],
  },
  {
    id: "2",
    title: "2025년 공동의회 자료",
    author: "사무국",
    date: "2025.05.20",
    content: "2025년 공동의회 관련 자료입니다. 성도님들께서는 미리 확인해주시기 바랍니다.",
    attachments: ["/files/general_assembly_2025.pdf"],
  },
  {
    id: "3",
    title: "행사 평가 보고서 양식",
    author: "기획위원회",
    date: "2025.04.10",
    content: "교회 내 각종 행사 후 작성하여 제출해주시기 바랍니다.",
    attachments: ["/files/event_report_form.docx"],
  },
];
