const markdown = {
  config: (md) => {
    md.use((curMd) => {
      curMd.use(require('markdown-it-vitepress-demo'));
    });
  }
};
export default markdown;
