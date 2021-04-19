import { getAll } from "../models/destinations.js";
import { setHeader } from "./auth.js";
import commonPartial from './partials.js'

export function getHome(ctx) {
    setHeader(ctx);
    getAll()
        .then(res => {
            const destinations = res.docs.map(x => x = { ...x.data(), id: x.id })
            ctx.destinations=destinations;
            ctx.loadPartials(commonPartial).partial('./view/home.hbs')
        })
}