const main = document.querySelector("#main");
const noteBlock = document.querySelector(".main__noteblock");
const heading = document.querySelector(".main__noteblock__heading");
const text = document.querySelector(".main__noteblock__text");
const div = document.createElement("div");
const header = document.createElement("header"); 
const input = document.createElement("input");
const textarea = document.createElement("textarea");
const img = document.createElement("img");
const button = document.createElement("button");
const randomNumber = () => Math.floor(Math.random() * 100);
const resizeDisable = () => document.querySelector(".main__noteblock__text--editable").setAttribute("style", "resize: none");
let notes = [];

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

    //creating e header
    document
      .querySelector(".main__noteblock--expanded")
      .appendChild(header)
      .classList
      .add("main__noteblock-header");

    //Create a Heading Editable
    document
      .querySelector(".main__noteblock-header")
      .appendChild(input)
      .classList
      .add("main__noteblock__heading--editable");

    //Create Placeholder for Title
    document
      .querySelector(".main__noteblock__heading--editable")
      .setAttribute("placeholder", "Title");

    //Create Save Button
    document
      .querySelector(".main__noteblock-header")
      .appendChild(button)
      .classList
      .add("save-button");
    
    //Append img to save-button
    document
      .querySelector(".save-button")
      .appendChild(img)
      .classList
      .add("save-button-img");

    //create save icon
    document
      .querySelector(".save-button-img")
      .setAttribute("src","img/bookmark.svg")

    //Create the save function
    document
      .querySelector(".save-button")
      .setAttribute("onclick", "storageNote()")

    //Create a Textarea
    document
      .querySelector(".main__noteblock--expanded")
      .appendChild(textarea)
      .classList
      .add("main__noteblock__text--editable") 
      resizeDisable();

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

let storageNote = () => {
  const heading = document.querySelector(".main__noteblock__heading--editable").value
  const text = document.querySelector(".main__noteblock__text--editable").value
  const note = {
    heading,
    text,
    id: randomNumber()
  }
  notes.push(note)
  console.log(notes)
}
