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
    title: "10/27 연주회 <꽃구름속에, Caro nome> 가사",
    author: "김윤희",
    date: "2024.10.26",
    attachments: [
      "/images/uploads/caro_nome_lyrics/caro_1.jpg",
      "/images/uploads/caro_nome_lyrics/caro_2.jpg",
      "/images/uploads/caro_nome_lyrics/caro_3.jpg",
      "/images/uploads/caro_nome_lyrics/caro_4.jpg",
    ],
  },
  {
    id: "2",
    title: "10/6 2부예배 헌금송",
    author: "최윤경",
    date: "2024.10.03",
    content: `내용이 여기에 표시됩니다. (테스트용)`,
  },
];
