import { getAll } from '../models/offers.js';
import { setHeader } from './auth.js';
import commonPartial from './partials.js';

export function getHome(ctx){
    setHeader(ctx);
    getAll()
    .then(res=>{
        const offers=res.docs.map(x=>x={...x.data(), id: x.id})
        ctx.offers=offers;
        ctx.loadPartials(commonPartial).partial('./view/home.hbs')
    });
};