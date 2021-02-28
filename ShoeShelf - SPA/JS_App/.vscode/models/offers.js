export function create(data){
    return firebase.firestore().collection('offers').add(data)
}

export function getAll(){
    return firebase.firestore().collection('offers').get()
}

export function get(id){
    return firebase.firestore().collection('offers').doc(id).get()
}

export function close(id){
    return firebase.firestore().collection('offers').doc(id).delete()
}

export function update(id, data){
    return firebase.firestore().collection('offers').doc(id).update(data)
}