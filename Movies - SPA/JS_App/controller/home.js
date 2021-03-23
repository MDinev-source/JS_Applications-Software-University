import { getAll } from "../models/movies.js";
import { setHeader } from "./auth.js";
import commonPartial from './partials.js'
export function getHome(ctx){
    setHeader(ctx);

    getAll()
    .then(res=>{
        const movies = res.docs.map(x=>x={...x.data(), id: x.id})
        ctx.movies=movies;
        ctx.loadPartials(commonPartial).partial('./view/home.hbs')
    })

}