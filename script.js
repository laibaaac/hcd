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

const buttons = document.getElementsByTagName("button");
const textarea = document.getElementById("my-textarea");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", () => {
    const text = buttons[i].textContent;
    navigator.clipboard.writeText(text);
  });
  
  buttons[i].addEventListener("focus", () => {
    const text = buttons[i].textContent;
    navigator.clipboard.writeText(text);
  });
}




