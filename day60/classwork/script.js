
  let toggle = false;


  function toggleText() {
      const texts = ["გამარჯობა", "ნახვამდის"];
      
      const paragraphs = document.getElementsByClassName("text");

      for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i].textContent = toggle ? texts[0] : texts[1];
      }

      toggle = !toggle;
  }
  //! 2
    // მივიღოთ ყველა ღილაკი კლასით "btn"
    const buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            console.log("button: " + (i + 1));
        });
    }
//? 3
 // მივიღოთ ყველა ელემენტი კლასთან "row"
 const rows = document.getElementsByClassName("row");

 let width = 50;

 for (let i = 0; i < rows.length; i++) {
     rows[i].style.width = width + "px"; // დავაყენოთ სიგანე
     rows[i].textContent = width + "px"; // გამოვიყენოთ სიგანის მნიშვნელობა ტექსტად
     width *= 2; // ორჯერ გავზარდოთ სიგანე
 }