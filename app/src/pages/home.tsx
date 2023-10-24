import "./home.css";
import { Button } from "common/ui/button";

export const HomePage = () => {
  return (
    <div>
      <div className="background-image"></div>
      <div className="main-content">
        <div className="heading">
          Empower Your Loan Application with AI Insights
        </div>

        <div>
          <p className="services">Comprehensive Data Analysis</p>
          <p className="services">Personalized Recommendations</p>
          <p className="services">Enhanced Security Measures</p>
          <p className="services"></p>
        </div>

        <Button variant="primary" to="/loan-form">
          Get Started
        </Button>
      </div>

      <footer className="footer"></footer>
    </div>
  );
};

export default HomePage;
