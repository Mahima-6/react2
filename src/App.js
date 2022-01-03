// export default function App() {
//   return (
//     <div>
//       <div style={{ color: "red", backgroundColor: "royalblue" }}>Mahima</div>
//     </div>
//   );
// }

let list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
export default function App() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light p-3">
        <div className="col h2">React</div>
      </div>
      {list.map((item) => (
        <div className="row">
          <div className="col-12 bg-info ">Mahima</div>
        </div>
      ))}
    </div>
  );
}
