# angulartest
Angular Test for Useful Government Service

# Implemented solution
The solution use Angular.js + Angular Material for the frontend and Node.js + Express.js + Mongodb for the backend

# How to run the app
- npm install
- mongod --dbpath=data
- npm run dev

# What's missing
Unfortunately, I didn't have enough time to write the tests. I would have done that by using Karma+Jasmine and the Angular.js $httpBackend service provider to mock the API request.

# What can be improved
- Validating data backend too
- Avoiding duplicated data (backend)
- Watchers in npm so both frontend and backend code can auto reload (faster development)
- Improved use of the npm builder (the folder 'dist' would need to be created runtime)
