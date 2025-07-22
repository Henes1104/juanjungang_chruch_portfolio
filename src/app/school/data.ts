export interface BoardPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  attachments?: string[];
}

export const schoolBoardData: { [key: string]: BoardPost[] } = {
  infant: [
    {
      id: "infant-1",
      title: "영아부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 영아부 게시판입니다.",
    },
  ],
  kindergarten: [
    {
      id: "kindergarten-1",
      title: "유치부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 유치부 게시판입니다.",
    },
  ],
  yunyeon: [
    {
      id: "yunyeon-1",
      title: "유년부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 유년부 게시판입니다.",
    },
  ],
  elementary: [
    {
      id: "elementary-1",
      title: "초등부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 초등부 게시판입니다.",
    },
  ],
  middle: [
    {
      id: "middle-1",
      title: "중등부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 중등부 게시판입니다.",
    },
  ],
  high: [
    {
      id: "high-1",
      title: "고등부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 고등부 게시판입니다.",
    },
  ],
  english: [
    {
      id: "english-1",
      title: "영어예배부 게시판 첫 번째 글입니다.",
      author: "관리자",
      date: "2025.07.20",
      content: "여기는 영어예배부 게시판입니다.",
    },
  ],
};
