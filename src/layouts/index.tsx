import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}
const Index = (props: IProps) => {
  return (
    <>
      <div>abc</div>
      {props?.children}
    </>
  );
};

export default Index;
