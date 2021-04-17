import { getAll } from '../models/pets.js';
import { setHeader } from './auth.js'
import commonPartial from './partials.js'

export function getHome(ctx) {
    setHeader(ctx);

    getAll()
        .then(res => {
            const pets = res.docs.map(x => x = { ...x.data(), id: x.id })
            ctx.pets=pets;
            ctx.loadPartials(commonPartial).partial('./view/home.hbs')
        })
}