var salon={
    name:"The Fashion Pet",
    address:{
        street:"Main St.",
        number:"123",
    },
    hour:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}
var c=0;
class Pet{
    constructor(name,age,gender,breed,service,ownerName,contactPhone,payment){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.payment=payment;
        this.id=c++;
    }
}


function displayPet(){

    var tmp="";
    console.log(salon.pets.length);
    document.getElementById("info").innerHTML=`<h3 class="display-6">Our currently scheduled ${salon.pets.length} customers are:</h3>`;
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`
        <tr id="${salon.pets[i].id}">
        <td class="pet">Name: ${salon.pets[i].name} </td>
        <td class="pet">Age: ${salon.pets[i].age} </td>
        <td class="pet">Gender: ${salon.pets[i].gender} </td>
        <td class="pet">Breed: ${salon.pets[i].breed} </td>
        <td class="pet">Service: ${salon.pets[i].service} </td>
        <td class="pet"><button onclick=deletePet(${salon.pets[i].id});>Remove Pet</button> </td>
        </tr>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}

function deletePet(id){
    console.log("delete function",id);
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if(aPet.id==id){
            deleteIndex=i;
        }
    }
    salon.pets.splice(deleteIndex,1);

    div.remove();
    displayPet();
}

function validation(i1,i2,i3,i4,i5,i6,i7,i8){
    if(i1!="" &&
        i2!="" &&
        i3!="" &&
        i4!="" &&
        i5!="" &&
        i6!="" &&
        i7!="" &&
        i8!=""){
            var flag=true;
        }
        return flag;
}

function registerPet(){
    // get values and store values from form
    var inputName=document.getElementById("petName").value;
    var inputAge=document.getElementById("petAge").value;
    var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwnername=document.getElementById("petOwner").value;
    var inputPhone=document.getElementById("ownerPhone").value;
    var inputPayment=document.getElementById("payment").value;
    //console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnername,inputPhone);
    //validate
    if(validation(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnername,inputPhone,inputPayment)){
    // create generic pet object
    var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputService,inputOwnername,inputPhone,inputPayment);
    console.log(thePet);
    
    //push the object into array
    salon.pets.push(thePet);
    //clear the inputs
    clearInputs();
    displayPet();
    }else{
        alert("Please enter all information");
    }
}

function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petService").value="";
    document.getElementById("petOwner").value="";
    document.getElementById("ownerPhone").value="";
    document.getElementById("payment").value="";
}

function init(){
    console.log("init");
    
    var scooby=new Pet("Scooby",15,"Male","Dane","grooming","Shaggy","123-456-7890","Online");
    var scrappy= new Pet("Scrappy",4,"Male","Dane","nail clip","Shaggy","123-456-7890","Online");
    var speedy= new Pet("Speedy Gonzalez",70,"Male","Mouse","Bath","Bugs","321-098-3424","In Store");
    var tweety=new Pet("Tweety Bird",3,"Male","Canary","bird bath","Sylvester","238-245-3444","Online");
    
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(speedy);
    salon.pets.push(tweety);
    
    displayPet();
    //hook events
    document.querySelector(`#btn-register`).addEventListener("click", registerPet);
}
window.onload=init;

