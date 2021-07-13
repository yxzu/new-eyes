import AuthorityPlugin from './authority-plugin'
import TabsPagePlugin from './tabs-page-plugin'

const Plugins = {
  install: function (Vue) {
    Vue.use(AuthorityPlugin)
    Vue.use(TabsPagePlugin)
  }
}
export default Plugins
