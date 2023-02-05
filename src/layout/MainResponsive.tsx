import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClass?: string;
}

function MainResponsive({ children, containerClass = '', ...rest }: Props) {
  const className = 'ml-auto mr-auto px-8 sm:px-12 lg:px-24 2xl:px-36' + ' ' + containerClass;
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export default MainResponsive;
