# Simple styled login form with ReactJS


In this practical tutorial, we will create a login form using ReactJS.

This form will contain:

✓ Username input with label


✓ Password input with label


✓ Inputs have two CSS on focus animations


✓ Button with two CSS on hover animations


✓ Responsive size for small screens


✓ To keep the project simple we will only add logics to make the form functional


The project contain two components and one style.css :

## App


```
import Login from "./Login";
export default function App() {
return ( <Login> )
}
```
a simple App.js file with the <Login> component.

## Login

```
import “./styles.css”;
import { useEffect, useRef, useState } from “react”;
export default function Login() {
const usernameRef = useRef();
const [username, setUsername] = useState(“”);
const [password, setPassword] = useState(“”);
const handleSubmit = async (e) => {
e.preventDefault();
console.log(“handle submit”);
};
useEffect(() => {
//usernameRef.current.focus();
}, []);
return (
<div className=”App”>
  <h1>Login</h1>
  <form onSubmit={handleSubmit} className=”form__container”>
    <div className=”form__controls”>
      <label htmlFor=”username”>Username</label>
      <input
      ref={usernameRef}
      type=”text”
      id=”username”
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
    </div>
   <div className=”form__controls”>
    <label htmlFor=”password”>Password</label>
    <input
    id=”password”
    type=”password”
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className=”form__controls”>
   <button className=”button”>Login</button>
  </div>
</form>
</div>
);
}
```
We will explain the CSS styling

### for the form

```
<form onSubmit={handleSubmit} className=”form__container”>
```
Form contain onSubmit function with a className “form__container”

```
.form__container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #ccc;
border-radius: 5px;
margin: auto;
padding: 10px;
width: 450px;
}
@media only screen and (max-width: 480px) {
.form__container {
width: 290px;
}
....
}
```
In the first part .form__container {}

. Center the form (margin:auto)

. Center all the controls with Flex CSS

. Give a nice rounded border

. A fixed width of 450px


In the second part @media only screen and (max-width: 480px) {}

.Will adjust the width of the form (to 290px) for small screens ( under 480px)

```
<div className=”form__controls”>
```

Form controls
With act like a container for the form controls: input, label, button

```
.form__controls {
margin: 10px;
padding: 2px;
}
```

```
.form__controls {}
```
contain margin and padding

### Inputs

```
.form__controls > input{}
```

>The “>” Sign in CSS :

>It means target elements which are DIRECT children of a particular >element.

. Gives styling to the input with a fixed width and height

. A nice rounded gray border

. And the line “transition: 0.1s ease-in-out;” with determine the duration of the CSS animation (transition) with is 0.1s with “ease-in-out” effect (you can find more information here)


This CSS class change to a smaller width on small screens

```
@media only screen and (max-width: 480px) {
  .form__controls > input {
    width: 150px;
  }
}
```

The on focus animation effect in inputs:

```
.form__controls > input:focus {
  outline: 2px solid #84c586;
  outline-offset: 1px;
  transform: scale(1.05);
}
```
The two lines with “outline” will give a nice green border to the inputs when selected.

the transform line will grow up the input when focussed using scale() CSS function

### Labels

```
.form__controls > label {
margin-right: 10px;
width: 100px;
height: 30px;
}
```
contain the styling of the label

### Buttons

```
.button {
height: 40px;
width: 100px;
font-size: 1.2rem;
border-radius: 5px;
cursor: pointer;
transition: 0.1s ease-in-out;
}
.button:hover {
background-color: #84c586;
color: whitesmoke;
border-color: gray;
transform: scale(1.05);
}
```

We have the class:

```
.button {}
```
with gives the button a fixed width and height with a nice rounded border

and the “transition” will animate the button with a duration of 0.1s and with an “ease-in-out” effect

```
.button:hover {}
```
will give the background of the button a green color and a grow animation effect with scale() CSS function.

For the logics on this form
### inputs

```
<input
id=”password”
type=”password”
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
```
For each input we created a separated state using react useState

and associate it the the value and onChange properties of the input

For the username input we use a “ref” to put the focus on it when the component render.

```
const usernameRef = useRef();
....
useEffect(() => {
usernameRef.current.focus();
}, []);
```
We added onClick function to submit the form with a simple console.log function.
