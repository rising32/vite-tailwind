import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { closeAuthModal } from '../../../store/features/core/Core';
import { LoginFormData, RegisterFormData } from '../../../libs/apis/auth';
import {
  isValidDigitsCasePassword,
  isValidEmail,
  isValidLowerCasePassword,
  isValidSpecialCharPassword,
  isValidUpperCasePassword,
} from '../../../utils';

export default function useAuth() {
  const user = useAppSelector((state) => state.core.user);
  const dispatch = useAppDispatch();
  const onLogin: () => void = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);
  const onLoginValidation = (form: LoginFormData) => {
    if (form.email === '') {
      return 'Email is empty!';
    }
    if (!isValidEmail(form.email)) {
      return 'Email is not valid';
    }
    if (form.password === '') {
      return 'Password is empty!';
    }
    if (form.password.length < 7) {
      return 'Password is at least minumum 8 characters!';
    }
    if (!isValidUpperCasePassword(form.password)) {
      return 'Password is at least one Uppercase';
    }
    if (!isValidLowerCasePassword(form.password)) {
      return 'Password is at least one Lowercase';
    }
    if (!isValidDigitsCasePassword(form.password)) {
      return 'Password is at least one digit';
    }
    if (!isValidSpecialCharPassword(form.password)) {
      return 'Password is at least one Special Characters';
    }
    return '';
  };
  const onSignUpValidation = (form: RegisterFormData) => {
    if (form.firstName === '') {
      return 'First Name is empty!';
    }
    if (form.lastName === '') {
      return 'Last Name is empty!';
    }
    if (form.email === '') {
      return 'Email is empty!';
    }
    if (!isValidEmail(form.email)) {
      return 'Email is not valid';
    }
    if (form.password === '') {
      return 'Password is empty!';
    }
    if (form.password.length < 7) {
      return 'Password is at least minumum 8 characters!';
    }
    if (!isValidUpperCasePassword(form.password)) {
      return 'Password is at least one Uppercase';
    }
    if (!isValidLowerCasePassword(form.password)) {
      return 'Password is at least one Lowercase';
    }
    if (!isValidDigitsCasePassword(form.password)) {
      return 'Password is at least one digit';
    }
    if (!isValidSpecialCharPassword(form.password)) {
      return 'Password is at least one Special Characters';
    }
    return '';
  };

  return { user, onLogin, onLoginValidation, onSignUpValidation };
}
