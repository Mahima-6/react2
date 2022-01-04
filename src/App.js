// export default function App() {
//   return (
//     <div>
//       <Home />
//       <Home />
//     </div>
//   );
// }

import { useState } from "react";

// export function Home() {
//   return (
//     <div>
//       <div className="bg-info">Mahima</div>
//     </div>
//   );
// }

// let list = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// export default function App() {
//   return (
//     <div className="container-fluid">
//       <Header />
//       <div className="row">
//         {list.map(() => (
//           <div className="col-12 col-md-4 ">
//             <Card />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div className="row bg-dark p-2">
//       <div className="col h3 text-light">React App</div>
//     </div>
//   );
// }

// function Card() {
//   return (
//     <div className="row">
//       <div className="col card">
//         <div className="card-body">
//           <div className="card-title">Card Title</div>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div className="bg-light">
//       <MyComponent />
//     </div>
//   );
// }
//interpollination
//careful while working with object use value
// function MyComponent() {
//   let username = "rohit";
//   let list = ["delhi", " kolkata"];
//   let obj = { age: 22 };
//   return (
//     <div>
//       <div>this is my component {"delhi".toUpperCase()}</div>
//       <h1>{list}</h1>
//       <p>
//         hiii hello how r uu {username}, {obj.age}
//       </p>
//     </div>
//   );
// }

//interpolation can alse used in an attibute
// function MyComponent() {
//   const id = 100;
//   const background = "bg-danger";
//   return (
//     <div>
//       <h1>interpolation {id}</h1>
//       <h1 className={background}>interpolation {id + 100}</h1>
//       <h1 id={id}>interpolation {id}</h1>
//     </div>
//   );
// }

// function MyComponent() {
//   const id = 100;
//   const background = "bg-info";
//   const [cardCss, setCardCss] = useState("bg-success text-light fs-2 p-4 mb-1");
//   const list = [1, 1, 1, 1, 1];
//   return (
//     <div>
//       {list.map(() => (
//         <div className={cardCss}>
//           Lorem sfffhjjk zdfgjk zddgfhjl hhkjlk;l;l dgjnklkc ssghvcxffs sfhbj
//           fhghb
//         </div>
//       ))}
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let [list, setlist] = useState(["hello"]);
  let Add = () => {
    const newList = [...list, "good afternoon"];
    setlist(newList);
  };

  let Del = () => {
    list.splice(0, 1);
    const newList = [...list];
    setlist(newList);
  };

  return (
    <div>
      <div>Input Application</div>
      <input type="button" value="Add" onClick={Add} />
      <input type="button" value="Del" onClick={Del} />
      <div>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}
