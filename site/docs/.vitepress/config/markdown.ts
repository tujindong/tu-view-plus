import MarkdownItVitepressDemo from 'markdown-it-vitepress-demo';
import { ApiTableContainer } from '../plugins/api-table';
import tableWrapper from '../plugins/table-wrapper';
import tooltip from '../plugins/tooltip';
import tag from '../plugins/tag';

const markdown = {
  config: (md) => {
    md.use(MarkdownItVitepressDemo);
    md.use(ApiTableContainer);
    md.use(tableWrapper);
    md.use(tooltip);
    md.use(tag);
  }
};
export default markdown;
