import React, { useCallback } from 'react';
import SignUpForm from '../../components/auth/SignUpForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeAuthModal } from '../../store/features/core/Core';
import AuthModal from './AuthModal';
import LoginForm from '../../components/auth/LoginForm';

function AuthModalContainer() {
  const dispatch = useAppDispatch();
  const visible = useAppSelector((state) => state.core.auth.visible);
  const mode = useAppSelector((state) => state.core.auth.mode);

  const onClose = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);
  return (
    <AuthModal visible={visible} onClose={onClose}>
      {mode === 'LOGIN' ? <LoginForm /> : <SignUpForm />}
    </AuthModal>
  );
}

export default AuthModalContainer;
