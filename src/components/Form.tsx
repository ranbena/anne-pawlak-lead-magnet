import React from 'react';
import {
  useShortAnswerInput,
  useGoogleForm,
  GoogleFormProvider,
  useCheckboxInput,
} from 'react-google-forms-hooks';
import { Form as AntForm, Button } from 'antd';
import formData from '../data/GoogleForm.json';
import { CheckOutlined, SendOutlined } from '@ant-design/icons';
import './Form.css';

const errorMessages: Record<string, { required?: string; pattern?: string }> = {
  '872857641': {
    required: 'Please provide your full name',
  },
  '1215295443': {
    required: 'Please provide your email address',
    pattern: 'Email address invalid',
  },
  '1918354548': {
    required: 'Please check the registration agreement',
  },
};

type IFormInputs = {
  id: string;
  type?: 'email' | 'text';
  placeholder: string;
  disabled?: boolean;
};

const ShortAnswerInput = ({
  id,
  type = 'text',
  placeholder,
  disabled,
}: IFormInputs) => {
  const { register } = useShortAnswerInput(id);

  return (
    <AntForm.Item className="antFormItem">
      <input
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        autoComplete="off"
        {...register({
          required: true,
          pattern:
            type === 'email'
              ? /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              : undefined,
        })}
      />
    </AntForm.Item>
  );
};

const CheckboxInput = ({
  id,
  disabled,
}: Pick<IFormInputs, 'id' | 'disabled'>) => {
  const options = useCheckboxInput(id).options[0];

  return (
    <AntForm.Item className="antFormItem">
      <div className="checkbox">
        <input
          type="checkbox"
          id={options.id}
          {...options.registerOption()}
          disabled={disabled}
        />
        <label htmlFor={options.id}>{options.label}</label>
      </div>
    </AntForm.Item>
  );
};

const Form = () => {
  // @ts-ignore
  const methods = useGoogleForm({ form: formData });
  const { formState } = methods;
  const success = formState.isSubmitSuccessful;

  const onSubmit = React.useCallback(
    async (data: any) => {
      await methods.submitToGoogleForms(data);
    },
    [methods]
  );

  const errorMessage = React.useMemo(() => {
    if (!formState.errors) return undefined;

    const arr = Object.entries(
      formState.errors as Record<
        string,
        {
          type: 'required' | 'pattern';
        }
      >
    );
    if (arr.length) {
      const [id, { type }] = arr[0];
      return errorMessages[id][type];
    }
  }, [formState]);

  return (
    <GoogleFormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={success ? 'success' : undefined}
      >
        <fieldset>
          <legend>
            Fill out this form and you'll receive this pdf by email
          </legend>
          <ShortAnswerInput
            id="872857641"
            placeholder="Full name"
            disabled={success}
          />
          <ShortAnswerInput
            id="1215295443"
            type="email"
            placeholder="Email address"
            disabled={success}
          />
          <CheckboxInput id="1918354548" disabled={success} />
          {errorMessage ? <div className="error">{errorMessage}</div> : null}
          <Button
            className="button"
            size="large"
            type="primary"
            htmlType="submit"
            loading={formState.isSubmitting}
            icon={success ? <CheckOutlined /> : <SendOutlined />}
          >
            {success ? 'Sent!' : 'Send me the PDF'}
          </Button>
        </fieldset>
      </form>
    </GoogleFormProvider>
  );
};

export { Form };
