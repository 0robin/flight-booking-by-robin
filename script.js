// total ticket
function handleTicketChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let priceTotal = 0;
    if (ticket == 'firstClass') {
        priceTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        priceTotal = ticketNewCount * 100;
    }
    calculateTotal();
}

// total calculation

function calculateTotal(){
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subtotal-price').innerText = totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat-amount').innerText = vat;

    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket +'-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// bonus section

const bookingButton = document.getElementById('booking-btn');
bookingButton.addEventListener("click", function(){
    const inputForm = document.getElementById('input-form');
    inputForm.style.display = "none";

    const paymentMethod = document.getElementById('payment-method');
    paymentMethod.style.display = "block";
})