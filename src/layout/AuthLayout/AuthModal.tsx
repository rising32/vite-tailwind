import React from 'react';
import CrossSvg from '../../assets/svgs/cross.svg';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

function AuthModal({ visible, children, onClose }: Props) {
  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 modal-background">
      <div className="w-[600px] flex flex-col bg-white items-center justify-center p-12 rounded-2xl drop-shadow-2xl">
        <p className="text-2xl font-bold capitalize">Welcome Back</p>

        <div className="absolute top-6 right-6" onClick={onClose}>
          <img src={CrossSvg} className="w-8 h-8" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthModal;
