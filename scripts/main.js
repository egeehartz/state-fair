// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import {GamesTicketHolders} from "./games/GameTicketHolder.js"
import {SideshowTicketHolders} from "./sideshows/SideshowTicketHolders.js"
import { BigSpenders } from "./BigSpender.js"


TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GamesTicketHolders()
SideshowTicketHolders()
BigSpenders()