export function registerUser(username, password){
    return firebaseConfig.auth().createUserWithEmailAndPassword(username,password);
}

export function login(username, password) {
    return firebase.auth().signInWithEmailAndPassword(username, password);
}

export function logout() {
    return firebase.auth().signOut();
}