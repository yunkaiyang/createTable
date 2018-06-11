// import TreeTable from './tree-table.vue';
// export default TreeTable;

import vueTreeTable from './tree-table.vue'

const vTreeTable = {
  install: function (Vue) {
    Vue.component('TreeTable', vueTreeTable)
  }
};

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vTreeTable)
}

export default vTreeTable