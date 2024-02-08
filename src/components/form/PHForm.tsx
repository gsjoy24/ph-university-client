import { Form } from 'antd';
import { FormProvider, useForm } from 'react-hook-form';
type TPHFormProps = {
	onSubmit: (data: any) => void;
	children: React.ReactNode;
} & TFormConfig;

type TFormConfig = {
	defaultValues?: Record<string, any>;
};

const PHForm = ({ onSubmit, children, defaultValues }: TPHFormProps) => {
	const formConfig: TFormConfig = {};
	if (defaultValues) {
		formConfig.defaultValues = defaultValues;
	}
	const methods = useForm(formConfig);
	return (
		<FormProvider {...methods}>
			<Form onFinish={methods.handleSubmit(onSubmit)} style={{ margin: 'auto', padding: '40px' }}>
				{children}
			</Form>
		</FormProvider>
	);
};

export default PHForm;
