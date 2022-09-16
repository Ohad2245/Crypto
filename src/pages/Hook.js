import React from "react";
import hooks from "../assets/hooksjpg.jpg";
import Hooks from '../components/hooks/Hooks.jsx';

function Hook() {
  return (
    <div>
      <img src={hooks} alt="hooks" width="70%" />
      <h2>Rules of Hooks</h2>
      <p>
        <div>
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </div>
        <div>Hooks are JavaScript functions, but you need to follow two rules when
        using them.</div>
        <div>We provide a linter plugin to enforce these rules
        automatically:<br/> Only Call Hooks at the Top Level Don’t call Hooks inside
        loops, conditions, or nested functions. 
        </div><div>Instead, always use Hooks at the
        top level of your React function, before any early returns.
        </div><div>By following
        this rule, you ensure that Hooks are called in the same order each time
        a component renders.</div>
        That’s what allows React to correctly preserve the
        state of Hooks between multiple useState and useEffect calls. (If you’re
        curious, we’ll explain this in depth below.).
        <br></br> Only Call Hooks from React
        Functions Don’t call Hooks from regular JavaScript functions. Instead,
        <br></br>
        you can: 
        <br></br> ✅ Call Hooks from React function components.
        <br></br> ✅ Call Hooks
      </p>
      <Hooks/>
    </div>
  );
}

export default Hook;
