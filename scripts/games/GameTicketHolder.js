const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GamesTicketHolders = () => {
    eventHub.addEventListener("gamesTicketPurchase", (customEvent) => {
        contentTarget.innerHTML += `
        <div class="person player"></div>
        `  
    })
}