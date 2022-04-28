import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/storage';

export const getUser = () => {

  const user = firebase.auth().currentUser

  return user
}


export const logoutUser = () => {
  firebase.auth().signOut()
}

export const signUpUser = async ({ name, email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}


export const loginUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}


export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}


export const uploadPhotoAsync = async uri => {

  const path = `photos/${Date.now()}.jpg`

  return new Promise(async (res, rej) => {
      const response = await fetch(uri);
      const file = await response.blob();

      let upload = firebase
        .storage()
        .ref(path)
        .put(file);

      upload.on(
        "state_changed",
        snapshot => {},
        err => {
            rej(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        }
      );
  });
}

export const addPost = async ({ text, localUri, name }) => {

  const remoteUri = await uploadPhotoAsync(localUri)

  return new Promise( (res, rej) => {

    const db = firebase.firestore()

    db.collection("posts").add({text, timestamp: Date.now(), image: remoteUri, name: name}).then(ref => { res(ref) }).catch(error => { rej(error)} );

  })
}