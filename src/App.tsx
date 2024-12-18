import { AuroraBackground } from "./AceternityUI/aurora-background"
import MyConstrPage from "./components/MyConstrPage"



function App() {

  return (
    <> 
      <AuroraBackground showRadialGradient={true}>
        <MyConstrPage />
      </AuroraBackground>
    </>
  )
}

export default App
