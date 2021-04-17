export function create(data) {
    return firebase.firestore().collection('pets').add(data)
}
export function getAll() {
    return firebase.firestore().collection('pets').get()
}
export function get(id) {
    return firebase.firestore().collection('pets').doc(id).get()
}
export function close(id) {
    return firebase.firestore().collection('pets').doc(id).delete()
}
export function update(id, data) {
    return firebase.firestore().collection('pets').doc(id).update(data)
}