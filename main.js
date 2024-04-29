const { Plugin } = require('obsidian');

module.exports = class RustCodeBlockPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'wrap-rust-code-block',
      name: 'Wrap with Rust Code Block',
      editorCallback: (editor, view) => {
        const selectedText = editor.getSelection();
        if (selectedText) {
          const wrappedText = `\`\`\`rust\n${selectedText}\n\`\`\``;
          editor.replaceSelection(wrappedText);
        }
      },
    });
  }
};

