import React from 'react';
import Card from './Card';

const ProfileCard = (props) => {
  return (
    <Card title="카드 제목" backgroundColor="#4ea04e">
      <p>안녕하세요 소플입니다.</p>
      <p>저는 리엑트를 사용해서 개발하고 있습니다.</p>
    </Card>
  );
};

export default ProfileCard;