const PHTitle = ({ title }: { title: string }) => {
	return (
		<h1 className='text-2xl font-semibold text-center mt-10 mb-5 border-b  py-4 inline-block border-gray-900 relative'>
			<span className='animate-ping w-2 h-4 bg-slate-900 rounded-full inline-block absolute -bottom-2 right-2'></span>
			<span className=' w-2 h-4 bg-slate-900 rounded-full inline-block absolute -bottom-2 right-2'></span>
			{title}
		</h1>
	);
};

export default PHTitle;
