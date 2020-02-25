export const createList = (flat) => {
       return(dispatch, getState, { getFirebase, getFirestore} ) => {
              const firestore = getFirestore();
              const profile = getState().firebase.profile;
              const userId = getState().firebase.auth.uid; 
              const flatEmail = getState().firebase.auth.email;
              firestore.collection('flats').add({
                     ...flat,
                     userFirstName: profile.firstName,
                     userLastName: profile.lastName,
                     userId: userId,
                     flatEmail: flatEmail,
                     info: flat.bedroom+" Bds - "+flat.bathroom+" Ba - "+flat.carpetArea+" sq.ft",
                     rent:"₹ "+flat.rent,
                     maintainence:"₹ "+flat.maintainence,
                     createdAt: new Date()
              }).then(() => {
                     dispatch({type:'CREATE_LIST',flat});
              }).catch((err) => {
                     dispatch({type:'CREATE_LIST_ERROR', err})
              })       
       }
}