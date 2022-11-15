import React from 'react';
import file from './img/file.jfif';

const styles = {
	wrapper: {
		margin: 8,
		padding: 8,
		display: 'flex',
		flexDirection: 'row',
		border: '1px solid gray',
		borderRadius: 16, 
	},
	imageContainer: {
		marginRight: 20,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	contentContainer: {
		marginLeft: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	nameText: {
		color: 'black',
		fontSize: '16',
		fontWeight: 'bold',
	},
	commentText: {
		color: 'black',
		fontSize: 16
	}
};

const Comment = (props) => {
	return (
		<div>
			{/* wrapper */}
			<div style={styles.wrapper}>
				<div style={styles.imageContainer}>
					<img src={file} alt='프로필 사진' style={styles.image} />
				</div>
				<div style={styles.contentContainer}>
					<span style={styles.nameText}>{props.name}</span>
					<span style={styles.commentText}>{props.comment}</span>
				</div>
			</div>
		</div>
	);
};

export default Comment;