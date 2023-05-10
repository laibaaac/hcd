// const copyPasteBtn = document.getElementById('copy-paste-btn');
// const myParagraph = document.getElementById('my-paragraph');
// const myTextArea = document.getElementById('my-textarea');
// const copyOnlyBtn = document.getElementById('copy-only');
// const button = document.getElementById("copy-only");

// copyPasteBtn.addEventListener('click', () => {
//   // Get the text from the paragraph
//   const textToCopy = myParagraph.innerText;

//   // Set the text of the text area to the copied text
//   myTextArea.value = textToCopy;
// });

// // 
// button.addEventListener("click", () => {
//   const text = document.getElementById("my-paragraph").textContent;
//   navigator.clipboard.writeText(text);
// });


// const buttons = document.getElementsByTagName("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseover", () => {
//     const text = buttons[i].textContent;
//     navigator.clipboard.writeText(text);
//   });
// }

// const buttons = document.getElementsByTagName("button");
// const textarea = document.getElementById("my-textarea");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseover", () => {
//     const text = buttons[i].textContent;
//     navigator.clipboard.writeText(text);
//   });
  
//   buttons[i].addEventListener("focus", () => {
//     const text = buttons[i].textContent;
//     navigator.clipboard.writeText(text);
//   });
// }
// textarea.addEventListener("paste", async (event) => {
//   event.preventDefault();
//   const text = await navigator.clipboard.readText();
//   textarea.value = text;
// });


// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mouseover", () => {
//     const text = buttons[i].textContent;
//     navigator.clipboard.writeText(text);
//   });
  
//   buttons[i].addEventListener("focus", () => {
//     const text = buttons[i].textContent;
//     navigator.clipboard.writeText(text);
//   });
// }

// textarea.addEventListener("click", async () => {
//   const text = await navigator.clipboard.readText();
//   textarea.value = text;
// });


const copyButton = document.getElementById("copy-only");
const pasteButton = document.getElementById("paste-only");
const textarea = document.getElementById("my-textarea");
const message = document.getElementById("message");
let copiedText = "";

function showMessage(text) {
  message.innerText = text;
  setTimeout(function() {
    message.innerText = "";
  }, 4000); // hide the message after 4 seconds
}

function showExplosion() {
  const explosion = document.createElement("div");
  explosion.classList.add("explosion");
  explosion.innerHTML = '<span class="emoji">👍👍👍</span>';
  document.body.appendChild(explosion);
  setTimeout(function() {
    explosion.remove();
  }, 1000); // remove the explosion after 2 seconds
}

// Copy using "c" key
document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    copiedText = document.querySelector("article").textContent;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector("article"));
    selection.removeAllRanges();
    selection.addRange(range);
    showMessage("De tekst is gekopieerd!");
  }
});

// Paste using "v" key
document.addEventListener("keydown", function (event) {
  if (event.key === "v") {
    textarea.value = copiedText;
    showMessage("De tekst is geplakt!");
    setTimeout(showExplosion, 2000); // show the explosion after 2 seconds
  }
});

copyButton.addEventListener("click", function () {
  copiedText = document.querySelector("article").textContent;
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(document.querySelector("article"));
  selection.removeAllRanges();
  selection.addRange(range);
  showMessage("De tekst is gekopieerd!");
});

pasteButton.addEventListener("click", function () {
  if (copiedText !== "") {
    textarea.value = copiedText;
    showMessage("De tekst is geplakt!");
    setTimeout(showExplosion, 1000); // show the explosion after 2 seconds
  } else {
    showMessage("Er is geen tekst gekopieerd om te plakken.");
  }
});
