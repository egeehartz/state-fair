const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let tickets = 0

contentTarget.innerHTML = `   
               <div>Total tickets purchased: 0</div>
           `

export const totalTicketCounter = () => {
    eventHub.addEventListener("click", (clickEvent) => {
        if (clickEvent.target.id === "rideTicket" || "foodTicket" || "gamesTicket" || "sideshowTicket" || "fullPackageTicket") {
            tickets++
            contentTarget.innerHTML = `   
               <div>Total tickets purchased: ${tickets}</div>
           `
    }
    })    
}

    

