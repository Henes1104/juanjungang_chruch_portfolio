export interface BoardPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  attachments?: string[];
}

export const departmentBoardData: { [key: string]: BoardPost[] } = {
  gyogu1: [
    {
      id: "gyogu1-1",
      title: "1교구 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 1교구 게시판입니다.",
    },
  ],
  gyogu2: [
    {
      id: "gyogu2-1",
      title: "2교구 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 2교구 게시판입니다.",
    },
  ],
  gyogu3: [
    {
      id: "gyogu3-1",
      title: "3교구 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 3교구 게시판입니다.",
    },
  ],
  gyogu4: [
    {
      id: "gyogu4-1",
      title: "4교구 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 4교구 게시판입니다.",
    },
  ],
  gyogu5: [
    {
      id: "gyogu5-1",
      title: "5교구 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 5교구 게시판입니다.",
    },
  ],
  youth: [
    {
      id: "youth-1",
      title: "청년부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 청년부 게시판입니다. 청년부는 6교구입니다.",
    },
  ],
  education: [
    {
      id: "education-1",
      title: "교육위원회 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 교육위원회 게시판입니다.",
    },
  ],
};
