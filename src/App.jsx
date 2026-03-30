import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import LandingPage from './components/landing-page'
import ContactPage from './components/contact-page'
import LeaderboardPage from './components/leaderboard-page'
import ProblemStatement from './components/problem-statement'
import ProblemStatementSpecific from './components/ps_specific'
import Team from './components/team'


function ProblemStatementSpecificWrapper() {
  const { tierIndex } = useParams()
  return <ProblemStatementSpecific tierIndex={Number(tierIndex)} />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/problems" element={<ProblemStatement />} />
        <Route path="/problems/:tierIndex" element={<ProblemStatementSpecificWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App