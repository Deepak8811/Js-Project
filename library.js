console.log("This is library in javaScript");
//constructor
function Book(name,author,type){
    this.name = name;
    this.aurhor = author;
    this.type = type;


}
//Display constructor
function Display(){

}
//Add method to display prototype
Display.prototype.add = function(Book){
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody')
    let uiString = `
    
    
    `

}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
    
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
display.add(book);
display.clear();


    

}