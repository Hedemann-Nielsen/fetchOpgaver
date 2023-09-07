/* Opgave 1*/
// din kode her
const myDataFileUrl = "../../opgavefiler/data/story.json";
const myStoryElement = document.getElementById("theStory");

let storyData = null;

fetch(myDataFileUrl)

.then((response) => {
if (response.ok){
    //console.log(response.json);

return response.json();
}})
.then((data) => {
    console.log(data);
    storyData = data;
    setUpStory('DK');
})

.catch((error) => {
    console.log(error);
});

function setUpStory(mylanguage) {
   let myStory = "";

    switch (mylanguage) {
        case "DK":
            myStory = storyData.DK;
            break;

        case "UK":
            myStory = storyData.UK;
            break;
        
        case "FI":
            myStory = storyData.FI;
            break;
        
        case "SE":
            myStory = storyData.SE;
            break;
        default:
            myStory = "Kunne ikke finde story";
            break;
    }
//console.log(storyData.DK.text);
createStory(myStory);
addButtons();

}

function createStory(myStory) {

    clearApp();

let headline = document.createElement("h1");
let codeCatImg = document.createElement("img");
let text = document.createElement("p");


headline.innerText = myStory.headline
myStoryElement.appendChild(headline);

codeCatImg.src = '../../opgavefiler/img/felix.jpg';
myStoryElement.appendChild(codeCatImg);

text.innerHTML = myStory.text
myStoryElement.appendChild(text);


}


/* Opgave 2 - skriv videre på koden her: */
//const myDataFileUrl = "../../opgavefiler/data/story.json";
//const myStoryElement = document.getElementById("theStory");

function addButtons() {

let DKButton = document.createElement("button");
let UKButton = document.createElement("button");
let SEButton = document.createElement("button");
let FIButton = document.createElement("button");

DKButton.innerText = "Dansk";
DKButton.addEventListener("click", (e) => {
    setUpStory("DK");
});
UKButton.innerText = "English";
UKButton.addEventListener("click", (e) => {
    setUpStory("UK");
});
SEButton.innerText = "Svensk";
SEButton.addEventListener("click", (e) => {
    setUpStory("SE");
});
FIButton.innerText = "Suomalainen";
FIButton.addEventListener("click", (e) => {
    setUpStory("FI");

});

myStoryElement.appendChild(DKButton);
myStoryElement.appendChild(UKButton);
myStoryElement.appendChild(SEButton);
myStoryElement.appendChild(FIButton);

}

function clearApp() {
    myStoryElement.innerHTML = ""; 

}




/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");

fetch(userURI)
.then((response) => {
   return response.json();
})
.then ((data) => {
    clearApp2();
    //console.log(data);
data.forEach(myUser => {
    let myUserHTML=`<h2>${myUser.name}</h2>
    <p>Adresse: ${myUser.address.street}  ${myUser.address.suite}</br>
    post nummer: ${myUser.address.zipcode}</br>
    by: ${myUser.address.city}</p>`;   
    
    myUserlistElement.innerHTML += myUserHTML;
});
})

function clearApp2() {
    myUserlistElement.innerHTML = ""; 

}

// .then(data) => 
//     data.forEach(user) => {
//         console.log("navn: " + user.name);
//     };
// catch((error) => {
//     console.log("Der opstod en fejl");
// });
 


/* Opgave 4*/
// din kode her

const dogURI = "https://dog.ceo/api/breeds/image/random";
const dogElement = document.getElementById("theDog");

fetch(dogURI)
.then((response) => {
    if (response.ok){
    return response.json();
}})
.then((data) => {
dogElement.src = data.message;
})

.catch((error) => {
    console.log(error);
});













// let headline = document.createElement("h1");
// let codeCatImg = document.createElement("img");
// let text = document.createElement("p");


// headline.innerText = myStory.headline
// myStoryElement.appendChild(headline);

// codeCatImg.src = '../../opgavefiler/img/felix.jpg';
// myStoryElement.appendChild(codeCatImg);

// text.innerHTML = myStory.text
// myStoryElement.appendChild(text);
