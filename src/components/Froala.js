import React from "react"
import "froala-editor/js/plugins.pkgd.min.js"
import "froala-editor/css/froala_style.min.css"
import "froala-editor/css/froala_editor.pkgd.min.css"
import "froala-editor/css/third_party/image_tui.css"
import "froala-editor/js/third_party/image_tui.min.js"
import FroalaEditorComponent from "react-froala-wysiwyg"

function Froala() {
  return (
      <FroalaEditorComponent tag="textarea" />
  )
}

export default Froala
