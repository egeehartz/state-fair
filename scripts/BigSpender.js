const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")

export const BigSpenders = () => {
    eventHub.addEventListener("fullPackagePurchase", (customEvent) => {
        contentTarget.forEach(
            element => {
                element.innerHTML += `<div class="person bigSpender"></div>`
            }
        )  
    })
}