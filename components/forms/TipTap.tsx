"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import { Bold, Italic, UnderlineIcon, List, ListOrdered, LinkIcon, Quote, Heading2 } from "lucide-react"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 hover:text-blue-800 underline",
        },
      }),
    ],
    content: "<p>Describe the role, responsibilities, and what you're looking for in a candidate...</p>",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[200px] px-3 py-2",
      },
    },
  })

  if (!editor) {
    return null
  }

  const toggleLink = () => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    if (url === null) {
      return
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  return (
    <div className="border rounded-md">
      <div className="border-b bg-gray-50 p-2 flex flex-wrap gap-1">
        <button
          onClick={() => editor.chain().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""}`}
          title="Heading"
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("bold") ? "bg-gray-200" : ""}`}
          title="Bold"
        >
          <Bold className="w-5 h-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("italic") ? "bg-gray-200" : ""}`}
          title="Italic"
        >
          <Italic className="w-5 h-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("underline") ? "bg-gray-200" : ""}`}
          title="Underline"
        >
          <UnderlineIcon className="w-5 h-5" />
        </button>

        <span className="w-px h-6 bg-gray-300 mx-1 self-center" />

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("bulletList") ? "bg-gray-200" : ""}`}
          title="Bullet List"
        >
          <List className="w-5 h-5" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("orderedList") ? "bg-gray-200" : ""}`}
          title="Numbered List"
        >
          <ListOrdered className="w-5 h-5" />
        </button>

        <span className="w-px h-6 bg-gray-300 mx-1 self-center" />

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("blockquote") ? "bg-gray-200" : ""}`}
          title="Quote"
        >
          <Quote className="w-5 h-5" />
        </button>

        <button
          onClick={toggleLink}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive("link") ? "bg-gray-200" : ""}`}
          title="Add Link"
        >
          <LinkIcon className="w-5 h-5" />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap

