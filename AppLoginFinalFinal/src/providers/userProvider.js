const firebase = require('firebase');
const {firebaseConfig} = require('./config.js');

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const register = (email, password) => {
  return new Promise(async (resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
