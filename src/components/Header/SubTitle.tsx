import React from 'react';

type Props = {
  mainTitle: string;
  subTitle?: string;
};
function SubTitle({ mainTitle, subTitle }: Props) {
  return (
    <>
      <p className="text-5xl font-bold capitalize">{mainTitle}</p>
      {subTitle ? <p className="text-lg font-bold capitalize mt-6 mb-4">{subTitle}</p> : null}
    </>
  );
}

export default SubTitle;
