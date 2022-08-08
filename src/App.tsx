import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddTriviaAnswerPage } from "./components/add-trivia-answer-page";
import { AddTriviaPage } from "./components/add-trivia-page";
import { BuyResponsePage } from "./components/buy-response-page";
import { ConfigPage } from "./components/config-page";
import { CoursePage } from "./components/course-page";
import { CoursesPage } from "./components/courses-page";
import { ExerciseFlashcardExpressivePage } from "./components/exercise-flashcard-expressive-page";
import { ExerciseFlashcardPage } from "./components/exercise-flashcard-page";
import { ExerciseTriviaPage } from "./components/exercise-trivia-page";
import { ForgotPasswordPage } from "./components/forgot-password-page";
import { LandingPage } from "./components/landing-page";
import { LoginPage } from "./components/login-page";
import { PricingPage } from "./components/pricing-page";
import { RecoveryPasswordEmailLinkPage } from "./components/recovery-password-email-link-page";
import { RegisterPage } from "./components/register-page";
import { UnderConstructionPage } from "./components/under-construction-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/under-construction"
          component={UnderConstructionPage}
        />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
        <Route
          exact
          path="/recovery-password/:access_token"
          component={RecoveryPasswordEmailLinkPage}
        />
        <Route exact path="/pricing" component={PricingPage} />
        <Route exact path="/buy-response" component={BuyResponsePage} />
        <Route exact path="/config" component={ConfigPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/courses/:course_id" component={CoursePage} />
        <Route
          exact
          path="/courses/:course_id/exercise/:exam/trivia"
          component={ExerciseTriviaPage}
        />
        <Route
          exact
          path="/courses/:course_id/exercise/:exam/flashcard"
          component={ExerciseFlashcardPage}
        />
        <Route
          exact
          path="/courses/:course_id/exercise/:exam/flashcard-expressive"
          component={ExerciseFlashcardExpressivePage}
        />
        <Route exact path="/admin/create-trivia" component={AddTriviaPage} />
        <Route
          exact
          path="/admin/create-answer/:trivia_id"
          component={AddTriviaAnswerPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
