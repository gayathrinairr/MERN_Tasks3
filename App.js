import "./App.css"
import WordCounter from "./components/WordCounter"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const WordCounterSpace = { width: "600px", height: "350px" }
  const AppSpace = { width: "100%", height: "100vh" }
  return (
    <div className="d-flex justify-content-center align-items-center" style={AppSpace}>
      <div style={WordCounterSpace}>
        <WordCounter />
      </div>
    </div>
  )
}

export default App
