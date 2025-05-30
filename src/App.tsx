import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import { Header } from "./components/Header/Header"
import { WorkList } from "./components/WorkGym/WorkList"
import { WorkGymAll } from "./components/WorkGym/WorkGymAll"

function App() {


  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WorkGymAll showFormOnly={true} />} />
        <Route path="/results" element={<WorkList />} />
      </Routes>
      
    </Router>
    </>
  )
}

export default App
