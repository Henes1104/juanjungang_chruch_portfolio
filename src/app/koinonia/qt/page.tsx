'use client';

import React from 'react';
import Image from 'next/image';

const QTPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">QT (Quiet Time)</h1>
      <p className="text-lg text-gray-700 mb-8">
        'Quiet Time'의 약자인 큐티는 말씀과 기도를 통해 날마다 하나님의 음성에 귀 기울이고
        그 음성을 따라 살아가고자 하는 그리스도인을 위한 경건의 시간입니다.
      </p>

      <div className="relative flex justify-center mb-8">
        <Image
          src="/images/uploads/qt/qt.png" // Assuming qt.png is in public/images/uploads/qt/
          alt="QT 안내 이미지"
          width={800} // Adjust width as needed
          height={450} // Adjust height as needed
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-5xl font-extrabold drop-shadow-lg">주삶QT</span>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">찬양과 기도</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        모든 성경 읽기의 기본은 가장 먼저 본문을 묵상할 준비를 하는 것입니다. 본문을 묵상할 때, 여러 생각으로 마음이 복잡한 상대라면, 제대로 된 본문 묵상을 할 수 없습니다. 따라서 먼저 찬양을 하면서 마음을 정돈하고, 성령님의 도우심을 구하는 기도를 합니다. 차분해진 마음 가운데 세미한 음성으로 인도하시는 성령님의 인도하심을 기대함으로 묵상의 시간을 준비하시기 바랍니다.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">본문요약 읽기</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        본문을 정독하며 읽기에 앞서 큐티 교재에 쓰여진 본문 요약을 읽으면서, 오늘 정독하게 될 본문이 어떤 내용을 가지고 있는지 먼저 파악합니다. 전체의 내용이 먼저 파악이 되어야, 본문의 내용을 읽을 때 그 내용이 어떤 내용인지 좀 더 분명하게 읽을 수 있게 됩니다.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">성경본문 묵상하기</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        이제 본격적으로 본문을 읽으며 묵상할 시간입니다. 본문을 묵상하실 때는 모든 본문의 말씀을 하나도 빠짐 없이 읽는다는 마음으로 정독하셔야 합니다. 정독을 하셨을 시 내용이 이해가 가지 않는다면, 내용이 이해가 될 때까지 여러 번 반복해서 읽습니다. 만약 그래도 본문의 내용이 제대로 파악되지 않는다면, 교재 내에 기록된 쉬운성경을 읽어보거나, 영어로 된 성경을 읽으면서 본문이 지금 하고 있는 이야기가 어떤 이야기인지를 파악합니다. 필요에 따라 절별 해설의 도움을 받으실 수도 있습니다.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">묵상한 내용으로 메시지 찾기</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        본문을 묵상한 내용을 토대로, 본문이 내게 하고자 하는 이야기가 무엇인지 찾습니다. 혹은 본문에서 인상 깊게 느껴졌던 단어나 표현, 핵심 주제가 있다면 그것이 무엇인지 찾습니다. 그리고 그것을 찾았다면 그것을 지금 내 삶의 정황이 비추어 어떤 메시지를 던져주는지를 생각해 봅니다. 메시지를 찾는 일이 어려울 경우 교재에 수록된 저자의 메시지를 읽어보며, 절별 해설 집필자가 찾은 메시지는 무엇인지 확인해보고, 다시 자신에게 주는 메시지가 무엇인지 생각해볼 수도 있습니다.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">적용과 기도</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        묵상이 완료되고 메시지가 분명해졌다면, 이제 그 메시지를 삶에 적용하고, 그 메시지대로 살아내야 합니다. 우리가 묵상한 메시지에 따라 하루를 살아가려고 하는 노력을 통해 변화되는 스스로의 삶을 경험해 보세요! "하나님의 말씀은 살아 있고 활력이 있어 좌주에 날선 어떤 검보다도 예리하여 혼과 영과 및 관절과 골수를 찔러 쪼개기까지 하며 또 마음의 생각과 뜻을 판단하나니-히4:12" 하나님의 말씀 앞에 순복하며 하나님의 뜻 가운데 거하시는 주안중앙교회 성도님들의 삶이 되시기 바랍니다.
      </p>
    </div>
  );
};

export default QTPage;
