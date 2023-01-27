//局部的应用 useModel
// useModel 有两个参数，namespace 和 updater。
// namespace - 就是 hooks model 文件的文件名，如上面例子里的 useAuthModel
// updater - 可选参数。在 hooks model 返回多个状态，但使用组件仅引用了其中部分状态，并且希望仅在这几个状态更新时 rerender 时使用（性能相关）。
import { useCallback, useState } from 'react';

export default function () {
  const [user, setUser] = useState<API.IUser>();
  const singin = useCallback((name: string, password: string) => {
    setUser({
      id: 1,
      name: name,
      password: password,
    });
  }, []);
  const singout = useCallback(() => {
    setUser({} as API.IUser);
  }, []);
  return {
    user,
    singin,
    singout,
  };
}
