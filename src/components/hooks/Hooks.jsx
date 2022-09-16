/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./hooks.css";
import { BsPatchCheckFill } from "react-icons/bs";
import state from "../../assets/state.jpg";
import effect from "../../assets/effect.jpg";

const Hooks = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div class="container experience__container">
        <div class="experience__fronted">
          <h3> Hooks</h3>
          <div class="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useState</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useEffect</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useMemo</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useContext</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useReducer</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useLayoutEffect</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>useId</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>custom-hooks</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <br></br>
        <div>
          <h1>UseState</h1>
          <p className="useState">
            𝘞𝘩𝘦𝘯 𝘸𝘦 𝘤𝘳𝘦𝘢𝘵𝘦 𝘢 𝘙𝘦𝘢𝘤𝘵 𝘢𝘱𝘱𝘭𝘪𝘤𝘢𝘵𝘪𝘰𝘯, 𝘸𝘦 𝘸𝘪𝘭𝘭 𝘯𝘦𝘦𝘥 𝘢 𝘸𝘢𝘺 𝘵𝘰 𝘴𝘵𝘰𝘳𝘦 𝘢
            𝘴𝘵𝘢𝘵𝘦 𝘸𝘪𝘵𝘩𝘪𝘯 𝘰𝘶𝘳 𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴 - 𝘶𝘴𝘦𝘚𝘵𝘢𝘵𝘦 𝘢𝘭𝘭𝘰𝘸𝘴 𝘶𝘴 𝘵𝘰 𝘥𝘰 𝘵𝘩𝘪𝘴 𝘪𝘯 𝘵𝘩𝘦
            𝘣𝘦𝘴𝘵 𝘸𝘢𝘺.
            <br />
            ⚡ 𝘚𝘵𝘰𝘳𝘦 𝘷𝘢𝘳𝘪𝘢𝘣𝘭𝘦𝘴 𝘰𝘧 𝘵𝘩𝘦 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯.
            <br />
            ⚡ 𝘶𝘴𝘦𝘚𝘵𝘢𝘵𝘦 𝘢𝘤𝘤𝘦𝘱𝘵𝘴 𝘢𝘯 𝘪𝘯𝘪𝘵𝘪𝘢𝘭 𝘴𝘵𝘢𝘵𝘦 𝘢𝘯𝘥 𝘳𝘦𝘵𝘶𝘳𝘯𝘴 2 𝘷𝘢𝘭𝘶𝘦𝘴:
            <br />
            💎 𝘛𝘩𝘦 𝘤𝘶𝘳𝘳𝘦𝘯𝘵 𝘷𝘢𝘭𝘶𝘦.
            <br />
            💎 𝘈 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 𝘵𝘰 𝘶𝘱𝘥𝘢𝘵𝘦 𝘵𝘩𝘦 𝘴𝘵𝘢𝘵𝘦. 𝗕𝗮𝘀𝗶𝗰 𝗮𝗰𝘁𝗶𝗼𝗻𝘀:
            <br />
            ① import.
            <br />
            ➋ init the state.
            <br />
            ③ show the state value to the DOM.
            <br />
            ➍ Update the state using the function set.
            <br />
            ✅𝑆𝑡𝑎𝑡𝑒 𝑐𝑎𝑛 𝑏𝑒 𝑓𝑟𝑜𝑚 𝑎𝑛𝑦 𝑣𝑎𝑙𝑢𝑒: 𝑠𝑡𝑟𝑖𝑛𝑔, 𝑛𝑢𝑚𝑏𝑒𝑟, 𝑏𝑜𝑜𝑙𝑒𝑎𝑛 , 𝑜𝑏𝑗𝑒𝑐𝑡
            ,𝑎𝑟𝑟𝑎𝑦 , 𝑚𝑎𝑡𝑟𝑖𝑥.
          </p>
          <img src={state} width="100%" />
        </div>
        <div>
          <h1>UseEffect</h1>
          <p className="useEffect">
            The Effect Hook allows you to perform side effects on function
            components: Some examples of side effects are data retrieval, direct
            DOM update, and timers.
            <br />
            useEffect accepts two arguments.
            <br />
            ⚡function
            <br />
            ⚡Dependence (optional).
            <br />
            🔸By default useEffect runs as componentDidMount () +
            componentDidUpdate () together. But we can change the behavior by
            default and run the function only when certain values ​​have
            changed. This is done by entering an array in the dependencies list
            in the second argument.
            <br />
            💎 Simple timer in useEffect hook - will update the variable counter
            each second in 1:
            <br />
            ⚡There is no calling for the function - runs automatically.
            <br />
            ⚡Without dependencies - runs on every render.
            <br />
            ⚡With dependencies - runs only on the first render, and when the
            dependency changes.
          </p>
          <img src={effect} width="100%" />
        </div>
        <div className="useMemo">
          <h1>UseMemo</h1>
          <p>
            The Effect Hook allows you to perform side effects on function
            components: Some examples of side effects are data retrieval, direct
            DOM update, and timers.
            <br />
            useEffect accepts two arguments. ⚡function ⚡Dependence (optional)
            <br />
            🔸By default useEffect runs as componentDidMount () +
            componentDidUpdate () together. But we can change the behavior by
            default and run the function only when certain values ​​have
            changed. This is done by entering an array in the dependencies list
            in the second argument.
            <br />
            💎 Simple timer in useEffect hook - will update the variable counter
            each second in 1:
            <br />
            ⚡There is no calling for the function - runs automatically.
            <br />
            ⚡Without dependencies - runs on every render.
            <br />
            ⚡With dependencies - runs only on the first render, and when the
            dependency changes.
          </p>
          <img src={effect} width="100%" />
        </div>
        <div className="useEffet">
          <h1>UseEffect</h1>
          <p>
            The Effect Hook allows you to perform side effects on function
            components: Some examples of side effects are data retrieval, direct
            DOM update, and timers. useEffect accepts two arguments.
            <br />
            ⚡function
            <br />
            ⚡Dependence (optional).
            <br />
            🔸By default useEffect runs as componentDidMount () +
            componentDidUpdate () together. But we can change the behavior by
            default and run the function only when certain values ​​have
            changed. This is done by entering an array in the dependencies list
            in the second argument.
            <br />
            💎 Simple timer in useEffect hook - will update the variable counter
            each second in 1:
            <br />
            ⚡There is no calling for the function - runs automatically.
            <br />
            ⚡Without dependencies - runs on every render.
            <br />
            ⚡With dependencies - runs only on the first render, and when the
            dependency changes.
          </p>
          <img src={effect} width="100%" />
        </div>
      </div>
    </section>
  );
};

export default Hooks;
