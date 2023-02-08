import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { showAuthModal } from '../../../store/features/core/Core';

export default function useAccount() {
  const user = useAppSelector((state) => state.core.user);
  const dispatch = useAppDispatch();
  const onResigerClick: () => void = useCallback(() => {
    dispatch(showAuthModal('REGISTER'));
  }, [dispatch]);
  const onLoginClick: () => void = useCallback(() => {
    dispatch(showAuthModal('LOGIN'));
  }, [dispatch]);

  return { user, onResigerClick, onLoginClick };
}
