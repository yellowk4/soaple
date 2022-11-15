import React from 'react';
import Comment from './Comment';

const comments = [
	{
		name: '홍길동',
		comment: '안녕하세요 길동입니다.',
	},
	{
		name: '심보',
		comment: '안녕하세요 심보입니다.',
	},
	{
		name: '바니',
		comment: '안녕하세요 바니입니다.',
	},
];

const CommentList = () => {
	return (
		<div>
			{/* <Comment name={'홍길동'} comment={'길동이의 말말말'} />
			<Comment name={'심보'} comment={'심보의 말말말'} /> */}
			{comments.map((comment) => {
				return (
					<Comment key={comment.name} name={comment.name} comment={comment.comment} />
				);
			})}
		</div>
	);
};

export default CommentList;