import React from "react"
import Loadable from "react-loadable"
import { Helmet } from "react-helmet"

const LoadableEditor = Loadable({
  loader: () => import("../components/Froala"),
  loading() {
    return <div>Loading...</div>
  },
})

export default () => (
  <div>
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/tui-image-editor.css"
        />
        <link
          rel="stylesheet"
          href="https://uicdn.toast.com/tui-color-picker/latest/tui-color-picker.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.min.css"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/tui-code-snippet@1.4.0/dist/tui-code-snippet.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/tui-image-editor.js"
        ></script>
      </Helmet>
    </React.Fragment>
    <LoadableEditor />
  </div>
)
