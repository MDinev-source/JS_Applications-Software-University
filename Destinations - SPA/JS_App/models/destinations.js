export function create(data) {
    return firebase.firestore().collection('destinations').add(data)
}
export function getAll() {
    return firebase.firestore().collection('destinations').get()
}
export function get(id) {
    return firebase.firestore().collection('destinations').doc(id).get()
}
export function close(id) {
    return firebase.firestore().collection('destinations').doc(id).delete()
}
export function update(id, data) {
    return firebase.firestore().collection('destinations').doc(id).update(data)
}