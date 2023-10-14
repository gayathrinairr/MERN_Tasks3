import { useState } from "react"
import "./WordCounter.css"

export function WordCounter() {
  const WordCounterStyle = { width: "100%", height: "100%" }
  const textStyle = { width: "100%", height: "150px" }
  const noOfWords = (sentence) => {
    let words = sentence.trim().split(" ")
    let count = words.length
    if (count === 1 && words[0] === "") {
      count = 0
    }
    return count
  }
  const [word, setWord] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const handleChange = (event) => {
    setWord(event.target.value)
    setWordCount(noOfWords(event.target.value))
  }
  return (
    <div
      className="shadow p-3 d-flex flex-column rounded"
      style={WordCounterStyle}
    >
      <h1 className="text-center">Responsive Paragraph Word Counter REACT Task</h1>
      <textarea
        className="rounded border-solid"
        style={textStyle}
        onChange={(event) => handleChange(event)}
        value={word}
      ></textarea>
      <br />
      <div>Word Count: {wordCount}</div>
    
    <div> Deepakram Bettarayan </div>
    </div>
  )
}

export default WordCounter
