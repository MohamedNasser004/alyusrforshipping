// src/components/CKEditorWrapper.js
'use client';

import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function CKEditorWrapper({ data, onChange }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function MyUploadAdapter(loader) {
    this.loader = loader;
  }

  MyUploadAdapter.prototype.upload = function() {
    return this.loader.file.then(file => {
      const data = new FormData();
      data.append("upload", file);
      data.append("type", "ckeditor");

      return fetch("https://api.alyusrforshipping.com/photo/upload", {
        method: 'POST',
        body: data
      })
      .then(response => response.json())
      .then(response => {
        if (!response.url) throw new Error("No URL returned");
        return { default: response.url };
      });
    });
  };

  MyUploadAdapter.prototype.abort = function() {};

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  }

  if (!isMounted) {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '1rem',
        minHeight: '300px',
        backgroundColor: '#f5f5f5'
      }}>
        Loading editor...
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        config={{
          extraPlugins: [uploadPlugin],
          height: 500,
          language: 'ar',
          image: {
            toolbar: [
              'imageTextAlternative',
              'toggleImageCaption',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              'imageStyle:alignLeft',
              'imageStyle:alignCenter',
              'imageStyle:alignRight'
            ],
            styles: ['alignLeft', 'alignCenter', 'alignRight']
          },
          toolbar: [
            'heading', '|',
            'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
            'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify', '|',
            'uploadImage', 'blockQuote', 'insertTable', '|',
            'undo', 'redo', '|',
            'textDirection:ltr', 'textDirection:rtl'
          ],
          alignment: {
            options: ['left', 'center', 'right', 'justify']
          },
          contentsLangDirection: 'rtl'
        }}
        onChange={(event, editor) => {
          onChange(editor.getData());
        }}
      />
    </div>
  );
}