# Main Street Project Inventory System Frontend

## Technology

- React
- Jest
- React Testing Library
- Priceline Design System

## Prerequisites

- Install firebase tools: `npm install -g firebase-tools`

- Run `firebase login`

## Getting Started

- Run `npm install`
- Run `firebase use default` to set your default environment to QA.
- Run `cd functions && npm install && npm run build`
- While in the `functions` folder also run `firebase functions:config:get > .runtimeconfig.json` to set up authentication.

### Starting

- Run `npm start` to run with cloud emulation (requires Firebase Login)

- Run `npm run dev` to run with mocked api calls

### Storybook

- Run `npm run storybook`

### Testing

- Run `npm test`

### Deploy

Merging to master will deploy master to QA via Github Actions

Publishing a release will deploy master to Production via Github Actions
