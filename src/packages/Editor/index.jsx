import { defineComponent } from 'vue'

import './index.scss'

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    return () => (
      <div class='editor-comp'>
        <div class="editor-left">物料区</div>
        <div class="editor-container">
          <div class="editor-container-top">菜单区</div>

          {/* 负责产生滚动条 */}
          <div class="editor-container-canvas">
            {/* 产生内容区域 */}
            <div class="editor-container-content">内容区</div>
          </div>
        </div>
        <div class="editor-right">属性控制栏目</div>
      </div>
    )
  }
})
