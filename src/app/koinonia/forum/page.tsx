
'use client';

import React from 'react';
import { forumPosts, BoardPost } from './data'; // Import data

const ForumPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-bold mb-4">자유게시판</h1>
      <p className="text-lg text-gray-700 mb-8">
        성도님들의 자유로운 소통을 위한 공간입니다.
      </p>

      <div className="space-y-6">
        {forumPosts.map((post: BoardPost, index: number) => (
          <div key={post.id} className={`border rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg ${
            index % 2 === 0 ? 'bg-white' : 'bg-blue-50'
          }`}>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">{post.title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="mr-4"><span className="font-semibold">작성자:</span> {post.author}</span>
              <span><span className="font-semibold">등록일:</span> {post.date}</span>
            </div>
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>
            {/* 첨부파일은 추후 구현 예정 */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
