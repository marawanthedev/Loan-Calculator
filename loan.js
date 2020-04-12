// const calc = document.querySelector("#loan-form");
const calc = document.querySelector(".calculate");
const results=document.querySelector("#results");
const loading = document.querySelector("img");
let isThere=false;

calc.addEventListener("click", startLoading);


function startLoading(e) {
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");
    const prinicpal = parseFloat(amount.value);
    // this to get the amount of loan in float
    const calcualtedInterest = parseFloat(interest.value) / 100 / 12;

    // parse float is used to convert the value into float

    const calcualtedPayemnt = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calcualtedInterest, calcualtedPayemnt);
    const monthly = (prinicpal * x * calcualtedInterest) / (x - 1);
    if (isFinite(monthly)) {


        
        loading.classList.remove("hide");


    setTimeout(showResults,2000);

      

        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcualtedPayemnt).toFixed(2);
        totalInterest.value = ((monthly * calcualtedPayemnt) - prinicpal).toFixed(2);

        

    }
    else {

        //     console.log("Please check your Numbers");
        // const message="Please check your numbers";
        monthlyPayment.value="";
        totalPayment.value="";
        totalInterest.value="";
        showEror("Please check your numbers");


    }

    // loading.classList.remove("hide");
    e.preventDefault();

}

function showEror(error) {

    const erorDiv = document.createElement("div");

    // getelements

    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");


    erorDiv.className = "alert alert-danger";
    // bootstrap classes for alerts
    erorDiv.appendChild(document.createTextNode(error));
    // so this is appending a text node displaying the eror messaage to the div that we have created to 
    // display the eror message nad we gave it the alert classes for bootstrap to make it better looking ui


    // insert eror above heading

    card.insertBefore(erorDiv, heading);



    // insert before does what it sounds like which is inserting before the element which
    // is the parent for the heading

    //clear eror 

    setTimeout(clearEror,3000);


}

function clearEror(){

document.querySelector(".alert").remove();
// removing the div which we gave a class of alert to use bootstrap ui


}

function showResults(e){
    loading.classList.add("hide");
    results.classList.remove("hide");
}