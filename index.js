// create the three arrays
const numberBank = [];
const oddNumbers = [];
const evenNumbers = [];

const application = document.querySelector("#app")

//function to create title at top of the page
function addTitle() {
    const title = document.createElement("h1");
    title.textContent = "Odds and Events"

    return title;
}

// function to create the top form
function numberForm() {
    const form = document.createElement("form");

    const label = document.createElement("label");
    label.textContent = "Add a number to the bank:";

    const input = document.createElement("input");
    input.type = "number";

    //add number button
    const addButton = document.createElement("button");
    addButton.textContent = "Add Number";
    addButton.type = "submit";

    //sort 1 button
    const sortOneButton = document.createElement("button");
    sortOneButton.textContent = "Sort 1";
    sortOneButton.type = "button";
    
    //sort all button
    const sortAllButton = document.createElement("button");
    sortAllButton.textContent = "Sort All";
    sortAllButton.type = "button";

    form.addEventListener("submit", (click) => {
        event.preventDefault();
        numberBank.push(Number(input.value));

        render();
    });

    sortOneButton.addEventListener("click", () => {
        event.preventDefault();
        const evalNumber = numberBank.shift();
        if (evalNumber % 2 === 0) {
            evenNumbers.push(evalNumber);
        } else oddNumbers.push(evalNumber);

        render();
    })

    sortAllButton.addEventListener("click", () => {
        
        while (numberBank.length > 0) {
            const evalNumber = numberBank.shift();

            if (evalNumber % 2 === 0) {
                evenNumbers.push(evalNumber);
            } else {
                oddNumbers.push(evalNumber);
            }
        }

        render();
    });

    form.append(label, input, addButton, sortOneButton, sortAllButton);

    return form;
}
;
//function to add the bank
function bank () {

    const bankSection = document.createElement("section");

    const bankTitle = document.createElement("h2");
    bankTitle.textContent = "Bank";

    const inBank = document.createElement("p");
    inBank.textContent = numberBank.join(", ");

    bankSection.append(bankTitle, inBank);

    return bankSection;
}

function evens() {

    const evensSection = document.createElement("section");

    const evensTitle = document.createElement("h2");
    evensTitle.textContent = "Evens";

    const inEvens = document.createElement("p");
    inEvens.textContent = evenNumbers.join(", ");

    evensSection.append(evensTitle, inEvens);

    return evensSection;
}

function odds() {

    const oddsSection = document.createElement("section");

    const oddsTitle = document.createElement("h2");
    oddsTitle.textContent = "Odds";

    const inOdds = document.createElement("p");
    inOdds.textContent = oddNumbers.join(", ");

    oddsSection.append(oddsTitle, inOdds);

    return oddsSection;
}

function render() {
    application.innerHTML = "";
    application.append(addTitle());
    application.append(numberForm());
    application.append(bank());
    application.append(evens());
    application.append(odds());
}

render();