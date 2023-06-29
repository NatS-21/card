function updateCardThumbnail() {
    const bankName = document.getElementById("bank-name").value;
    const paymentSystem = document.getElementById("payment-system").value;
    const cardNumber = document.getElementById("card-number").value;
    const cardHolderName = document.getElementById("card-holder-name").value;
    const expiryMonth = document.getElementById("expiry-month").value;
    const expiryYear = document.getElementById("expiry-year").value;

    document.getElementById("expiry").innerText = expiryMonth + '/' + expiryYear

    if (cardHolderName !== "") {
        document.getElementById("card-holder").innerText = cardHolderName
    } else {
        document.getElementById("card-holder").innerText = "Ivanov Ivan"
    }
    if (cardNumber !== "") {
        document.getElementById("preview-card-number").innerText = addSpacesAfterFourChars(cardNumber)
    } else {
        document.getElementById("preview-card-number").innerText = "0000 0000 0000 0000"
    }
    if (expiryYear !== "") {
        document.getElementById("expiry").innerText = expiryMonth + '/' + expiryYear
    } else {
        document.getElementById("expiry").innerText = "06/25"
    }

    if (bankName.toLowerCase() === 'tinkoff') {
        document.getElementById("preview-bank-logo").setAttribute("src", "./images/tinkoff.png")
    }
    if (bankName.toLowerCase() === 'sber') {
        document.getElementById("preview-bank-logo").setAttribute("src", "./images/sber.png")
    }
    if (paymentSystem.toLowerCase() === 'visa') {
        document.getElementById("payment-logo").setAttribute("src", "./images/visa.png")
    }
    if (paymentSystem.toLowerCase() === 'mastercard') {
        document.getElementById("payment-logo").setAttribute("src", "./images/mastercard.png")
    }
}

function addSpacesAfterFourChars(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += text.charAt(i);
        if ((i + 1) % 4 === 0) {
            result += ' ';
        }
    }
    return result;
}


function clearForm() {
    document.getElementById("bank-name").value = "";
    document.getElementById("payment-system").value = "";
    document.getElementById("card-number").value = "";
    document.getElementById("card-holder-name").value = "";
    document.getElementById("expiry-month").value = "";
    document.getElementById("expiry-year").value = "";
}

function addCardToList() {
    const cardsTable = document.getElementById("cards-table");

    const row = document.createElement("tr");
    const bank_name = document.createElement("td");
    bank_name.innerText = document.getElementById("bank-name").value;
    const payment_system = document.createElement("td");
    payment_system.innerText = document.getElementById("payment-system").value;
    const card_number = document.createElement("td");
    card_number.innerText = addSpacesAfterFourChars(document.getElementById("card-number").value);
    const holder = document.createElement("td");
    holder.innerText = document.getElementById("card-holder-name").value;
    const expiry = document.createElement("td");
    expiry.innerText = document.getElementById("expiry-month").value + '/' + document.getElementById("expiry-year").value;

    row.appendChild(bank_name);
    row.appendChild(payment_system);
    row.appendChild(card_number);
    row.appendChild(holder);
    row.appendChild(expiry);
    cardsTable.appendChild(row);
    clearForm();
}