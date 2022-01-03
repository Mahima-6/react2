// export default function App() {
//   return (
//     <div>
//       <div style={{ color: "red", backgroundColor: "royalblue" }}>Mahima</div>
//     </div>
//   );
// }

// let list = [1, 1, 1, 1, 1, 1, 1, 1, 1];
// export default function App() {
//   return (
//     <div className="container-fluid">
//       <div className="row bg-dark text-light p-3">
//         <div className="col h2">React</div>
//       </div>
//       {list.map((item) => (
//         <div className="row h-50">
//           <div className="col-12 bg-info py-2 ">Mahima</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import react from "react";

let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export default function App() {
  return (
    <div className="container-fluid">
      <div className="row bg-info">
        <div className="col-sm-2 bg-success text-center">Book</div>
      </div>
      {list.map(() => (
        <div className="row">
          <div className="col bg-primary text-center py-4 border border-dark m-0">
            Mahima
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
