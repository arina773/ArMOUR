import firebase from 'firebase';

require('firebase/firestore');

class Fire {
    constructor() {
        firebase.initializeApp({
            apiKey: "AIzaSyBTYmEx7zug0u_EtVZ8l-DPQD53IlUek2o",
            authDomain: "armour-54152.firebaseapp.com",
            databaseURL: "https://armour-54152.firebaseio.com",
            projectId: "armour-54152",
            storageBucket: "armour-54152.appspot.com",
            messagingSenderId: "430173835829",
            appId: "1:430173835829:web:038870542ecdf6e37f177c"
        });
    }
    addPost = async ({ text, localUri }) => {
        const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${this.uid}/${Date.now()}`);

        return new Promise((res, rej) => {
            this.firestore
                .collection('posts')
                .add({
                    text,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    uploadPhotoAsync = async (uri, filename) => {
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(filename)
                .put(file);
            upload.on(
                'state_changed',
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const uri = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    createUser = async user => {
        let remoteUri = null

        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)

            let db = this.firestore.collection('users').doc(this.uid)

            db.set({
                name: user.name,
                email: user.email,
                avatar: null
            })

            if (user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`)

                db.set({ avatar: remoteUri}, {merge: true})
            }
        } catch (error) {
            alert('Error: ', error)
        }
    }

    get firebase() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Data.now();
    }
}

Fire.shared = new Fire();
export default Fire;
