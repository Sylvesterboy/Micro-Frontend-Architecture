import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; 


const ChatApp = React.lazy(() => import("chat/Chat"));
const EmailApp = React.lazy(() => import("email/Email"));



const App = () => (
  <div>
    <h1>Main Host Application</h1>
    <Suspense fallback={<div>Loading Chat...</div>}>
      <ChatApp />
    </Suspense>
    <Suspense fallback={<div>Loading Email...</div>}>
      <EmailApp />
    </Suspense>
  </div>
);

// ✅ Use React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
