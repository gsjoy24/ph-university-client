const PHTitle = ({ title }: { title: string }) => {
	return (
		<h1
			style={{
				marginBottom: '10px',
				padding: '5px 0',
				fontSize: '1.5rem',
				width: '100%',
				textAlign: 'center',
				background: '#001529',
				color: 'white'
			}}
		>
			{title}
		</h1>
	);
};

export default PHTitle;
