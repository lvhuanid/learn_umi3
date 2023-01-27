import { useModel } from 'umi';
import { Space, Button } from 'antd';

const Index = () => {
  const { initialState } = useModel('@@initialState');
  const { user, singin, singout } = useModel('user');
  return (
    <>
      {initialState?.id}
      <br />
      {initialState?.name}
      <br />
      {user?.name}
      <br />
      {user?.id}
      <Space>
        <Button
          type="primary"
          onClick={() => {
            singin('abc', '123');
          }}
        >
          Login
        </Button>
        <Button
          type="primary"
          onClick={() => {
            singout();
          }}
        >
          LogOut
        </Button>
      </Space>
      <div>test</div>
    </>
  );
};
export default Index;
