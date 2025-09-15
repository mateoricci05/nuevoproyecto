/**
 * Firebase initialization (modular v9).
 * Uses VITE_FIREBASE_ environment variables. If not configured, functions that depend on Firestore
 * will be available but will throw meaningful errors; components include a mock fallback.
 */
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let db = null
let initialized = false
try {
  if (firebaseConfig.apiKey) {
    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    initialized = true
  } else {
    console.warn('Firebase not configured. App will use mock data and simulate orders.')
  }
} catch (e) {
  console.warn('Firebase initialization failed:', e)
}

export { db, initialized }
