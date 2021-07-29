# Crypto Currency App

## Exchange to USD

A Big Real Estate company requires creating mobile application by obtain information about crypto currency in USD, because governance decided used by currency default to EEUU. this one need create a list crypto currency, show exchange to USD, filter list and show detail. 

**Acceptance Criteria (AC):**

- There must be a show a crypto currency list screen.
- There must be a show a detail of crypto currency screen.
- There must be a show a exchange to USD.
- The list must be a filter list.

- Get the data of crypto currency from Request.
- Get the detail of crypto currency from Request.

## Folder Structure

weelo_app - clean architecture

    ├── android
    ├── ios
    ├── android
    ├── src
    │   ├── data
    │   │   ├── controllers
    │   │   ├── redux
    │   │   ├── repositories
    │   │   ├── utils
    │   ├── domain
    │   │   ├── contracts
    │   │   ├── entity
    │   │   ├── usecases
    │   ├── presentation
    │   │   ├── components
    │   │   ├── navigation
    │   │   ├── screens
    │   │   ├── App.tsx
    ├── index.js
    ├── package.json
    └── README.md

## Installation
```
npm install or yarn
npx pod-install ios
```

## Start app
```
npx react-native run-android
npx react-native run-ios
```
## Run tests
```
npm run tests
yarn tests
```
---