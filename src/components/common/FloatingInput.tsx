import { useSpring, animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { UseFormRegister, Control, useWatch } from 'react-hook-form';
import useMeasure from 'react-use-measure';
import { FormData } from '../auth/LoginForm';

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FormData>;
  control: Control<FormData>;
  label: string;
  formDataType: keyof FormData;
  handleBlur?: React.FocusEventHandler<HTMLInputElement>;
  showErrorText?: boolean;
  errorText?: string;
  showRuleText?: boolean;
  ruleText?: string;
  containerClassName?: string;
  fullRounded?: boolean;
}

type InputValueState = 'valid' | 'invalid' | 'error' | 'empty';

function FloatingInput({
  register,
  control,
  label,
  formDataType,
  handleBlur,
  showErrorText = false,
  errorText = 'This field is required',
  showRuleText = false,
  ruleText = 'Can include letters, numbers and underscores',
  containerClassName = 'w-full',
  fullRounded = true,
  ...rest
}: FloatingLabelInputProps) {
  const [isFocused, setFocused] = useState(false);
  const [inputValueState, setInputValueState] = useState<InputValueState>('valid');
  const [isFirsted, setIsFirsted] = useState(true);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const inputValue = useWatch({
    control,
    name: formDataType,
  });

  useEffect(() => {
    if (!inputValue) {
      setInputValueState('empty');
    } else {
      setInputValueState('valid');
    }
  }, [inputValue]);

  const [labelRef, { height: viewHeight }] = useMeasure();
  const props = useSpring({ top: isFocused || (!isFocused && inputValue) ? -viewHeight / 2 : 0 });

  const handleFocus = () => {
    setFocused(true);
    setIsFirsted(false);
  };
  // const handleBlur = () => {
  //   setFocused(false);
  // };
  const activeFocus = () => {
    if (!isFocused) {
      inputRef.current?.focus();
    }
  };

  const mainBlur =
    'relative h-16 border-solid border-2 border-gray-200 flex items-center px-8' +
    ' ' +
    containerClassName +
    ' ' +
    `${fullRounded ? 'rounded-full' : 'rounded-md'}`;
  const mainFInvalid =
    'relative h-16 border-solid border-2 border-red-700 flex items-center px-8' +
    ' ' +
    containerClassName +
    ' ' +
    `${fullRounded ? 'rounded-full' : 'rounded-md'}`;
  const mainFValid =
    'relative h-16 border-solid border-2 border-blue-500 flex items-center px-8' +
    ' ' +
    containerClassName +
    ' ' +
    `${fullRounded ? 'rounded-full' : 'rounded-md'}`;

  const labelBlur = 'text-2xl';
  const lableFocusInvalid = 'text-base bg-white px-1 text-red-700';
  const labelFocusValid = 'text-base bg-white px-1 text-blue-500';
  const labelUnfocusValid = 'text-base bg-white px-1 text-black';

  return (
    <div>
      <div
        className={!isFocused ? mainBlur : inputValueState !== 'valid' ? mainFInvalid : mainFValid}
        ref={labelRef}
      >
        <animated.div
          className={`absolute h-full left-8 flex items-center justify-center ${
            isFocused ? 'text-md' : 'text-2xl'
          }`}
          style={props}
          onClick={activeFocus}
        >
          {isFocused ? (
            <label className={inputValueState !== 'valid' ? lableFocusInvalid : labelFocusValid}>
              {label}
            </label>
          ) : (
            <>
              {inputValue !== '' ? (
                <label className={labelUnfocusValid}>{label}</label>
              ) : (
                <label className={labelBlur}>{label}</label>
              )}
            </>
          )}
        </animated.div>
        <input
          // ref={inputRef}
          className="text-2xl h-full w-full focus:outline-none"
          onFocus={handleFocus}
          {...register(formDataType, { required: true })}
          {...rest}
        />
      </div>
      {!isFirsted ? (
        <>
          {inputValueState === 'empty' && showErrorText ? (
            <p className="text-red-700 pl-4">{errorText}</p>
          ) : null}
          {inputValueState !== 'empty' && showRuleText ? (
            <p className="text-black pl-4 opacity-50">{ruleText}</p>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default FloatingInput;
