import { useEffect } from 'react'
import corinthiansLogo from './assets/corinthians-paulista.svg'
import './App.css'

function App() {
  useEffect(() => {
    async function changeColor() {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const span1 = document.getElementById('span1')

      if (span1) {
        span1.style.color = '#cc2229'
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      const span2 = document.getElementById('span2')

      if (span2) {
        span2.style.color = '#000000'
      }
    }

    changeColor()
  }, [])

  return (
    <>
      <div>
        <a href="https://www.corinthians.com.br/" target="_blank">
          <img src={corinthiansLogo} className="logo" />
        </a>
      </div>
      <h1>
        <span id="span1">Para</span>
        <span id="span2">buains</span>
      </h1>
    </>
  )
}

export default App
