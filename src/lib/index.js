// import TreeTable from './tree-table.vue';
// export default TreeTable;

import vueTreeTable from './tree-table.vue'

const TreeTable = {
  install: function (Vue) {
    Vue.component('TreeTable', vueTreeTable)
  }
};

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TreeTable)
}

export default TreeTable