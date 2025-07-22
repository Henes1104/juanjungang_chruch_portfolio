export interface Bulletin {
  id: string;
  title: string;
  author: string;
  date: string;
  files: string[];
}

export const bulletinsData: Bulletin[] = [
  {
    id: "20250720",
    title: "2025년 7월 20일 주보",
    author: "박성현",
    date: "2025.07.19",
    files: ["20250720.jpg", "202507202.jpg"],
  },
  {
    id: "20250713",
    title: "2025년 7월 13일 주보",
    author: "박성현",
    date: "2025.07.11",
    files: ["20250713.jpg", "202507132.jpg"],
  },
  {
    id: "20250706",
    title: "2025년 7월 6일 주보",
    author: "박성현",
    date: "2025.07.04",
    files: ["20250706.jpg", "202507062.jpg"],
  },
  {
    id: "20250629",
    title: "2025년 6월 29일 주보",
    author: "박성현",
    date: "2025.06.28",
    files: ["20250629.jpg", "202506292.jpg"],
  },
  {
    id: "20250622",
    title: "2025년 6월 22일 주보",
    author: "박성현",
    date: "2025.06.21",
    files: ["20250622.jpg", "202506222.jpg"],
  },
  {
    id: "20250615",
    title: "2025년 6월 15일 주보",
    author: "박성현",
    date: "2025.06.14",
    files: ["20250615.jpg", "202506152.jpg"],
  },
  {
    id: "20250608",
    title: "2025년 6월 8일 주보",
    author: "박성현",
    date: "2025.06.07",
    files: ["20250608.jpg", "202506082.jpg"],
  },
];