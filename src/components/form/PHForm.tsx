const PHForm = ({ onSubmit, children }: { onSubmit: () => void; children: React.ReactNode }) => {
	return <form onSubmit={onSubmit}>{children}</form>;
};

export default PHForm;
