const { useState } = require("react");

export default function App() {
  let [counter, setcounter] = useState(60);
  const incre = () => setcounter(counter + 1);

  const decre = () => setcounter(counter - 1);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <input type="button" value="incre" onClick={incre} />
        <input type="button" value="decre" onClick={decre} />
      </div>
    </div>
  );
}
