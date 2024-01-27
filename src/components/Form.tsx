import {
  useShortAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
} from 'react-google-forms-hooks';

import form from '../data/GoogleForm.json';

type IFormInputs = {
  id: string;
  type: 'text' | 'email' | 'tel';
};

const ShortAnswerInput = ({ id, type }: IFormInputs) => {
  const { register, label } = useShortAnswerInput(id);

  return (
    <>
      <input type={type} {...register()} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

const Form = () => {
  // @ts-ignore
  const methods = useGoogleForm({ form });

  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data).then((blah) => {
      // eslint-disable-next-line no-alert
      alert('Form submitted with success!');
    });
  };
  return (
    <GoogleFormProvider {...methods}>
      <form id="ContactForm" onSubmit={methods.handleSubmit(onSubmit)}>
        <ShortAnswerInput id="1215295443" type="email" />
        <button type="submit">Submit</button>
      </form>
    </GoogleFormProvider>
  );
};

export { Form };
