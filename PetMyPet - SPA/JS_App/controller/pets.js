import { create, get, update, close} from '../models/pets.js';
import { setHeader } from './auth.js'
import commonPartial from './partials.js'

export function getCreate(ctx) {
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/pets/create.hbs')
}
export function postCreate(ctx) {

    const { name, description, imageUrl, type } = ctx.params;
    const organizer = sessionStorage.getItem('user');

    const isLiker=false;

    create({name, description, imageUrl, type , organizer, isLiker, interestedIn: 0 })
        .then(res => {
            ctx.redirect('#/home')
        }).catch(e => console.log(e))

}

export function getDetail(ctx) {
    setHeader(ctx);
 
    const id = ctx.params.id;
    get(id)
        .then(res => {
            const pet = { ...res.data(), id: res.id };
            ctx.isOrganizer = pet.organizer === sessionStorage.getItem('user');
            ctx.pet = pet;
            ctx.loadPartials(commonPartial).partial('./view/pets/details.hbs')
        }).catch(e => console.log(e))
}

export function getEdit(ctx) {
    const id = ctx.params.id;
 
    get(id)
        .then(res => {
        
            const pet = { ...res.data(), id: res.id };
            ctx.pet = pet;
            ctx.loadPartials(commonPartial).partial('./view/pets/edit.hbs')
        }).catch(e => console.log(e))
}

export function postEdit(ctx) {
    const { name, description, imageUrl, type } = ctx.params;
    const id = ctx.params.id;
    update(id, { name, description, imageUrl, type })
        .then(res => {
            ctx.redirect(`#/details/${id}`);
        }).catch(e => console.log(e));
}

export function getClose(ctx) {
    const id = ctx.params.id;
    close(id).then(res => {
        console.log(res);
        ctx.redirect('#/home');
    }).catch(e => console.log(e));
}

export function getLike(ctx) {
    const id = ctx.params.id;
    get(id)
        .then(res => {
            const pet = res.data();
            
            const interestedIn=pet.interestedIn +1;

            update(id, {interestedIn})
                .then(() => {
                    ctx.redirect(`#/details/${id}`);
                }).catch(e => console.log(e));
        }).catch(e => console.log(e))
}