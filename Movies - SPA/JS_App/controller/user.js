import { setHeader } from './auth.js'
import commonPartial from './partials.js'

export function getLogin(ctx){
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/user/login.hbs');
}