import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <FeedbackProvider>
       <Router>
      <Header />
      <div className="container">
        <Routes>
        <Route exact path="/" element={
          <>
          <FeedbackForm />
          <FeedbackStat />
          <FeedbackList />
          <AboutIconLink />
          </>
        }>  
        </Route>

        <Route path="/about" element={<AboutPage/>} />
        </Routes>
        
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
