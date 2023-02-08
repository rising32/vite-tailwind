import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';

export interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChangeInputValue?: (name: string, value: string) => void;
  showErrorText?: boolean;
  errorText?: string;
  showRuleText?: boolean;
  ruleText?: string;
  containerClassName?: string;
  fullRounded?: boolean;
}

type InputValueState = 'valid' | 'invalid' | 'error' | 'empty';

function FloatingLabelInput({
  label,
  value = '',
  onChangeInputValue,
  showErrorText = false,
  errorText = 'This field is required',
  showRuleText = false,
  ruleText = 'Can include letters, numbers and underscores',
  containerClassName = 'w-full',
  fullRounded = true,
  ...rest
}: FloatingLabelInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [inputValueState, setInputValueState] = useState<InputValueState>('valid');
  const [isFirsted, setIsFirsted] = useState(true);
  const [isFocused, setFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [ref, { height: viewHeight }] = useMeasure();

  const props = useSpring({ top: isFocused || (!isFocused && inputValue) ? -viewHeight / 2 : 0 });

  useEffect(() => {
    setInputValue(value);
    if (!value) {
      setInputValueState('empty');
    } else {
      setInputValueState('valid');
    }
  }, [value]);

  const handleFocus = () => {
    setFocused(true);
    setIsFirsted(false);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  const activeFocus = () => {
    if (!isFocused) {
      inputRef.current?.focus();
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    onChangeInputValue && onChangeInputValue(event.target.name, event.target.value);
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
  const lableFocusInvalid = 'text-base bg-white rounded-full px-2 text-red-700';
  const labelFocusValid = 'text-base bg-white rounded-full px-2 text-blue-500';
  const labelUnfocusValid = 'text-base bg-white rounded-full px-2 text-black';

  return (
    <div>
      <div
        className={!isFocused ? mainBlur : inputValueState !== 'valid' ? mainFInvalid : mainFValid}
        ref={ref}
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
          ref={inputRef}
          className="text-2xl h-full w-full focus:outline-none bg-transparent"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleChange}
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

export default FloatingLabelInput;
