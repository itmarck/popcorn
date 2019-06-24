import firestore from "./config";

export async function getCarteleraFrom(coleccion) {
  let data = [];
  let cartelera = await firestore
    .collection(coleccion)
    .orderBy("titulo")
    .get();
  cartelera.forEach(doc => {
    data.push({
      id: doc.id,
      coleccion: coleccion,
      titulo: doc.data().titulo,
      anio: doc.data().anio,
      ruta: doc.data().ruta
    });
  });
  return data;
}

export async function getDocFrom(coleccion, id) {
  let doc = await firestore
    .collection(coleccion)
    .doc(id)
    .get();
  return {
    id: doc.id,
    ...doc.data()
  };
}
