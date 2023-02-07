import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { closeAuthModal } from '../../../store/features/core/Core';
import { LoginFormData } from '../../../libs/apis/auth';

export default function useAuth() {
  const user = useAppSelector((state) => state.core.user);
  const dispatch = useAppDispatch();
  const onLogin: (form: LoginFormData) => void = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  return { user, onLogin };
}
