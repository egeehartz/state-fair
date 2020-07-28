const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "rideTicket") {
        const customEvent = new CustomEvent("rideTicketPurchase")
        eventHub.dispatchEvent(customEvent)
    }
    else if (clickEvent.target.id === "foodTicket") {
        const customEvent = new CustomEvent("foodTicketPurchase")
        eventHub.dispatchEvent(customEvent)
    }
    else if (clickEvent.target.id === "gamesTicket") {
        const customEvent = new CustomEvent("gamesTicketPurchase")
        eventHub.dispatchEvent(customEvent)
    }
    else if (clickEvent.target.id === "sideshowTicket") {
        const customEvent = new CustomEvent("sideshowTicketPurchase")
        eventHub.dispatchEvent(customEvent)
    }
    else if (clickEvent.target.id === "fullPackageTicket") {
        const customEvent = new CustomEvent("fullPackagePurchase")
        eventHub.dispatchEvent(customEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gamesTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

