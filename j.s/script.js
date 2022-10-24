// let data = [];

// const getPhotos = async (url) => {
//   let server = await fetch(url);
//   if (server.status !== 200) {
//     throw server.status;
//   }
//   let serverjson = await server.json();
//   return serverjson;
// };

// getPhotos("https://jsonplaceholder.typicode.com/photos")
//   .then( getSwrvwrJson => {
//     data = getSwrvwrJson;
//   })
//   .catch( error  => {
//     const span = document.createElement("span");
//     span.innerText = "error";
//     span.style.color = "red";
//     document.getElementById("photobox").appendChild(span);
//   });

// const p = document.createElement("p");

// const htmlTag = param => {
//   p.innerText = param;
//   document.getElementById("photobox").appendChild(p);
// };

// const form = document.getElementById("form");
// form.addEventListener("submit", (res) => {
//   const value = document.getElementById("text").value;
//   res.preventDefault();
//    const post = data.find(e => {
//        if( e.id == value){
//             return e;
//        }
//     });
//    htmlTag(post.title);
// });

let promis = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((server) => server.json())
      .then((serverjson) => {
        resolve(serverjson);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

promis().then((getServerJson) => {
  const div = document.getElementById("photobox");
  const p = document.createElement("p");
  const form = document.getElementById("form");
  getServerJson.find((element) => {
    form.addEventListener("submit", (res) => {
      res.preventDefault();
      let value = document.getElementById("text").value;
      if (value == element.id) {
        p.innerText = element.title;
        div.appendChild(p);
      }
    });
  });
});
