class services {
  getUserList(i: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
  }
  postUserList(i: string) {
    return {
      url: `${i}`,
      method: 'post',
    };
  }
}
export default new services();
