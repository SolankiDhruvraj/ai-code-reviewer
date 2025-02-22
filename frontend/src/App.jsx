import './App.css'
import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor'
import prismjs from 'prismjs'
import "prismjs/components/prism-javascript" // Ensure JavaScript syntax is loaded
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css"
// import dotnev from 'dotenv'
function App() {
  // dotnev.config()
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [review, setReview] = useState('')
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  async function reviewCode() {
    // console.log("-------", import.meta.env.VITE_BACKEND_URL)
    // const response = await axios.post(`http://localhost:3000/ai/get-review`, { code })
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const apiUrl = new URL("/ai/get-review", backendUrl).href;
    console.log("--------", apiUrl)
    const response = await axios.post(`https:${apiUrl}`, { code })
    setReview(response.data)
  }
  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prismjs.highlight(code, prismjs.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 14,
              backgroundColor: "#282c34",
              color: "#ffffff",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className='review' onClick={reviewCode}>Review</div>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  )
}

export default App;
