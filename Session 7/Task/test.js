var data = [
  {
    id: 1,
    title: "card title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    button: "delete",
  },
  {
    id: 2,
    title: "card title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    button: "delete",
  },
  {
    id: 3,
    title: "card title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    button: "delete",
  },
  {
    id: 4,
    title: "card title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    button: "delete",
  },
  {
    id: 5,
    title: "card title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    button: "delete",
  },
  {
    id: 6,
    title: "card title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    button: "delete",
  },
];

var template =
  '<div class="col-md-4"><div class="card flex-row justify-content-center align-items-center bg-primary text-white text-start p-4"><div class="card-body"><h4 class="card-title">{{title}}</h4><p class="card-text">{{text}}</p></div><button class="btn btn-danger">{{button}}</button></div></div>';

function bindData(item, template) {
  for (var property in item) {
    template = template.replace("{{" + property + "}}", item[property]);
  }
  return template;
}

for (let i = 0; i < 6; i++) {
  var item = bindData(data[i], template);
  var parent = document.getElementsByClassName("js-parent")[0];
  //   console.log(parent);
  parent.innerHTML += item;
}

var cards = document.getElementsByClassName("card");
var buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    e.target.parentElement.parentElement.remove();
  });
}

function colorize(color) {
  for (let i = 0; i < cards.length; i++) {
    if (color == "blue") {
      cards[i].className =
        "card flex-row justify-content-center align-items-center bg-primary text-white text-start p-4";
    }
    if (color == "yellow") {
      cards[i].className =
        "card flex-row justify-content-center align-items-center bg-warning text-white text-start p-4";
    }
  }
}

//   <div class="col-md-4">
//     <div class="card flex-row justify-content-center align-items-center bg-primary text-white text-start p-4">
//       <div class="card-body">
//         <h4 class="card-title">card title</h4>
//         <p class="card-text">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!
//         </p>
//       </div>
//       <button class="btn btn-danger">delete</button>
//     </div>
//   </div>
