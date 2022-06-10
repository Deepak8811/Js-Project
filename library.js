console.log("This is library in javaScript");
//constructor
function Book(name,author,type){
    this.name = name;
    this.aurhor = author;
    this.type = type;


}
//Display constructor
function Display() {

}
//Add method to display prototype
Display.prototype.add = function(Book){
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody')
    let uiString = `<tr>
                       <th scope="row">1</th>
                       <td>${Book.name}</td>
                       <td>${Book.author}</td>
                       <td>${Book.type}</td>
                    </tr>  `;

    tableBody.innerHTML += uiString;
}
//Implement the clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
    
}
//Implement the valid  function
Display.prototype.validate = function(book){
  if(book.name.length<2 || book.author.length<2) {
      return false;

  }
  else{
      return true;
  }
    
}
Display.prototype.show = function(type, displayMessage){
   let message =  document.getElementById('message');
   message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>${displayMessage}</strong> You should check in on some of those fields below.
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>`

}

//Add submirt event listioner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e){
   
    console.log('You have submitted library form');
    e.preventDefault();
   
    
    let name = document.getElementById('bookName').value;

    let author = document.getElementById('author').value;
    let type;
    //development, programming, technology

    let development = document.getElementById('development');
    let programming = document.getElementById('programming');
    let technology = document.getElementById('technology');
    if(development.checked){
        type= development.value;
    }
    else if(programming.checked){
        type= programming.value;

    }
    else if(technology.checked){
        type= technology.value;
        
    }
    let book = new Book(name, author,type);
    console.log(Book);
let display = new Display();
if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('Success','Your book has been successfully added.');
}
else{
    //Show error to the user.
    display.show('Danger','Sorry you can not add this book.');
}

}