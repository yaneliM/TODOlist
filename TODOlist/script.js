
const logo = document.getElementById('logo');


const menu = document.getElementsByClassName('menu');
console.log(menu);

const enlaces  =document.getElementsByTagName('a');
console.log(enlaces);


for(var i = 0; i<enlaces.length; i++){
    enlaces[i].setAttribute('target','_self');
}

//const entrances = document.querySelector('.sidebar');
//const entrances = document.querySelector('.sidebar h2');
const entrances = document.querySelectorAll('.sidebar ul li');
console.log(entrances);

var e1 = document.createElement('li');
var textNuevo = document.createTextNode('Hola Mundo');

e1.appendChild(textNuevo);
console.log(e1);

/*entrances[4].appendChild(e1);*/

const article = document.querySelector('main article');
/*article.parentElement.removeChild(article);*/

const home = document.querySelector('.navegacion nav ul li a');
console.log(home);

/*home.parentElement.replaceChild(e1,home);*/

var txtTarea = document.getElementById('taretxt');
txtTarea.value;

var elementos=[];
var num = 0;
var item ;
var txtValue;
var txt;
var  list = document.getElementById("lista");
function addItem(){
    //nuevo elemento en la lista
    var newElement = document.createElement("dt");
    //nuevo checkbox en el element
    var square = document.createElement("input");
    square.setAttribute("type","checkbox");
    square.setAttribute("class","box");
    //nuevo texto en el elemento

    txtValue = document.getElementById("txtinput").value;
    txt = document.createTextNode(txtValue);
   
    
    
    if(txtValue ===''){
        console.log("No new element");
        alert("Write something first");
    }else {
        //array de ID 
        document.getElementById("txtinput").value = "";
        elementos[num]= num;
        //id solo al checkBox y al nuevo elemento de la lista
        square.setAttribute("id",num);
        newElement.setAttribute("id","e"+num);
        txt.id = "t"+num;
       
        //meter el checkbox y el texto al elemento
        newElement.appendChild(square);
        newElement.setAttribute("value",txt);
        newElement.appendChild(txt);
 
        //meter el nuevo elemento a la lista
        document.getElementById("lista").appendChild(newElement);
        //incrementa contador
        num = num + 1;
    }

    
}

function remove(){
    var i=0;
    console.log("REMOVE");
    
    for(i=0; i<num;i++){
        if(document.getElementById(i) !== null){
        item = document.getElementById(i);
        if(item.checked){
            document.getElementById("e"+item.id).parentNode.removeChild(document.getElementById("e"+item.id));
            var index = elementos.indexOf(i);
            elementos.splice(index,1);
        }
    }        
    }
}

function modify(){
    console.log("MODIFY");
    
    var j=0;

    for(j=0; j<elementos.length; j++){
        if(document.getElementById(j) !== null){

        item = document.getElementById("e" + elementos[j]);
        if(document.getElementById(elementos[j]).checked){
            txtValue = document.getElementById("txtinput").value;
            var newTXT = document.createTextNode(txtValue);
            var gettxt = document.getElementById("e" + elementos[j]).childNodes[0];
            var oldTXT = document.getElementById("e" + elementos[j]).childNodes[1];
            item.replaceChild(newTXT,item.childNodes[1]);
     
        }

        }
    }
}




    

