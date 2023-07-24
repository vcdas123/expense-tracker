// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactJs is a library of javaScript which help to build all types of user interfaces using something called COMPONENTS which are building blocks of React.
// COMPONENTS - These are resuable building blocks,and are the combination of HTML, CSS and JavaScript. It help us to avoid repitative codes.These are made using declarative codes.

//  We can skip extension while importing third party modules or our owns. Otherwise for css files we must add.
// .render method on ReactDom takes two argument , the first one is the component which it need to render and another is the location where it has to add that component. This "root" is the id of a div present in the index.html of public folder.

// ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
