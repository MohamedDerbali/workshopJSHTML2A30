const loadWebPage = () => {
  console.log("loading ...");
};
const btn = document.querySelector("#btn");
btn.addEventListener("mouseover", () => {
  console.log("Hello sur vol ok!");
});
btn.addEventListener("click", () => {
  console.log("you clicked on the button!");
});
btn.addEventListener("dbclick", () => {
  console.log("you double clicked the button!");
});
const validate = (input) => {
  let print = document.getElementById("checkData");
  if (input.name === "nom") {
    if (input.value.length > 7) {
      print.innerHTML =
        "<h6 style='color:red'>you must give a lastname < 7 </h6>";
    } else {
      print.innerHTML = "<h6 style='color:green'>ok lastname!</h6>";
    }
  } else if (input.name === "prenom") {
    if (input.value.length > 7) {
      print.innerHTML =
        "<h6 style='color:red'>you must give a firstname < 7 </h6>";
    } else {
      print.innerHTML = "<h6 style='color:green'>ok firstname!</h6>";
    }
  } else {
    let age = input.value;
    let ageNumber = parseInt(age);
    console.log(Number.isInteger(ageNumber));
    if (!Number.isInteger(ageNumber)) {
      print.innerHTML = "<h6 style='color:red'>age must be a number</h6>";
    } else {
      print.innerHTML = "<h6 style='color:green'>ok age!</h6>";
    }
  }
};
