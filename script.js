const main = document.querySelector("#main");
const noteBlock = document.querySelector(".main__noteblock");
const heading = document.querySelector(".main__noteblock__heading");
const text = document.querySelector(".main__noteblock__text");
const div = document.createElement("div");
const input = document.createElement("input");
const textarea = document.createElement("textarea");

const randomNumber = () => Math.floor(Math.random() * 100);
// console.log(randomNumber());

let notes = [];

const note = {
  heading: "",
  text: "",
  id: ""
}

let storageNote = () => {
  const heading = document.querySelector("main__noteblock__heading--editable").value
  const text = document.querySelector(".main__noteblock__text--editable").value

  notes.push(
    let [randomNumber()] = Object.create(note)
  )
}


const createBlockNote = () => {
  if (document.querySelector("#button-type").getAttribute("src") == "img/plus.svg") {
    //Switch Button Type
    document
      .querySelector("#button-type")
      .setAttribute("src", "img/Delete.svg");
    //Create a Container
    main.
      appendChild(div)
      .classList
      .add("main__noteblock--expanded");

    //Create a Heading Editable
    document
      .querySelector(".main__noteblock--expanded")
      .appendChild(input)
      .classList
      .add("main__noteblock__heading--editable");

    //Create Placeholder for Title
    document
      .querySelector(".main__noteblock__heading--editable")
      .setAttribute("placeholder", "Title");

    //Create a Textarea
    document
      .querySelector(".main__noteblock--expanded")
      .appendChild(textarea)
      .classList
      .add("main__noteblock__text--editable");
  }
  else{
    //Clean Fields
    document
      .querySelector(".main__noteblock__heading--editable")
      .value = "";
    document
      .querySelector(".main__noteblock__text--editable")
      .value = "";

    //Delete the Note
    document
      .querySelector(".main__noteblock--expanded")
      .remove();

    //Switch Button Type
    document
    .querySelector("#button-type")
    .setAttribute("src", "img/plus.svg");
  }
};

