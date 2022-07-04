const Data = document.querySelector(".ques-card");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");

const ans = ["Chandigarh" , "Pratibha Patil" , "Goa" , "about mid-June to early October" , "Tamil Nadu"];
let checking = () => {
    let index = 0;
    let score = 0;
//FormData return a object of {Key => Value pair}
// Store in it formreults variable

    const formresults = new FormData(Data);

//formresults.values() : access value attribute in formresults

    for(let value of formresults.values()){
        if(value === ans[index]){
            score+=1;
        }
        index+=1;
    }
    result.innerText = `Your Score is : ${score}`;
};

btn.addEventListener("click",checking,false);

