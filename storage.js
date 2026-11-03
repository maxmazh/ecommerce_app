import {
    collection,
    getDocs
} from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js';

import { db } from './firebase.js';

const PRODUCTS_COLLECTION = 'product';

export async function getProducts() {
    const productsRef = collection(db, PRODUCTS_COLLECTION);

    const snapshot = await getDocs(productsRef);

    console.log('Количество документов:', snapshot.size);
    console.log('Данные из Firestore:', snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })));

    return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data()
    }));
}