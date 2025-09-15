# E-commerce React App (Deliverable)

This is a single-page e-commerce frontend built with **React + Vite** that fulfills the course requirements:
- Product listing and detail views
- ItemCount component with validation
- Cart state stored in Context (with localStorage persistence)
- Navigation with React Router (no full page reloads)
- Firestore integration (optional) — writes orders and reads products when configured
- Fallback mock data when Firestore is not configured
- Checkout form that creates an order (to Firestore if configured, otherwise simulates)

## How to use

1. Clone or unzip the project.
2. Install dependencies:
```bash
npm install
```
3. Create a Firebase project if you want Firestore integration and set environment variables.
Copy `.env.example` to `.env` and fill with your Firebase config (VITE_FIREBASE_...).

4. Run the dev server:
```bash
npm run dev
```

## Notes
- If `.env` is not present or incomplete, the app will use local mock data and simulate order creation.
- When using Firestore, make sure your rules allow read/write for testing or configure properly.
- The project follows the requested component structure and naming conventions.

