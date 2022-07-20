# Habit Tracker

### Features and Stack

### Features
* create an account with using email and password
* authenticate using Facebook, GitHub or Google
* login as a guest
* add, edit and delete habits
* mark the habits as `completed`, `failed` or `skipped`
* weekly performance is visualized in a bar chart
* brief summary of performance for last week, current week, current day and all time
* customize the app by changing `primary` and `secondary` color
* toggle dark mode
* choose your language: `ES | EN | PL`

### Stack

* React
* React Query
* React Router
* React Hook Form
* Material UI
* Firebase
  * Authentication
  * Realtime Database


```bash

# Install dependencies

yarn

```

### Connect Firebase

While you’re waiting for the dependencies to install, you can set up the Firebase.

1. Login to [Firebase](https://console.firebase.google.com/)
2. Create project
3. Create Realtime Database
   1. In step 2, check “Start in **test mode”**
4. Authentication > Sign-in method > Sign-in providers, and add the following:
   1. Email/Password
   2. Google
   3. Anonymous
   4. (Optional): If you want to add Facebook and/or GitHub, you’ll have to get Client IDs and secrets from these services
5. Go to Project Overview and add a web app
6. You don’t need to run `npm install firebase`, it’s already installed
7. You should see a `firebaseConfig` similar to this:

    ```bash
    const firebaseConfig = {
      apiKey: "<YOUR_API_KEY>",
      authDomain: "<YOUR_AUTH_DOMAIN>",
      databaseURL: "<YOUR_DATABASE_URL>",
      projectId: "<YOUR_PROJECT_ID>",
      storageBucket: "<YOUR_STORAGE_BUCKET>",
      messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
      appId: "<YOUR_APP_ID>",
      measurementId: "<YOUR_MEASUREMENT_ID>",
    };
    ```

8. Create `.env.local` file, by duplicating `.env.local.example`, and use config above to fill it out

### Start the app

```bash
# Start development server
yarn start
```
The app should be running at: [http://localhost:3000](http://localhost:3000/)

### Database and data structure

How should I store habit's completion state for each day? Should each habit have an array with the dates 
when it was performed or should I store dates and each date would keep track of the habits that where performed on that day? 

```json
{
    "habits": {
        "user-one": {
            "habit-one": {
                "name": "Reading",
                "description": "Read a book for at least 30 min in the morning",
                "frequency": [0,1,2,3,4]
            }
        }
    },
    "checkmarks": {
        "user-one": {
            "checkmark-id": {
                "habitId": "habit-one",
                "date": "2020-11-11",
                "value": "completed"
            }
        }
    },
    "users": {
        "user-one": {
            "locale": {
                "code": "en-GB"
            },
            "theme": {
                "primaryColor": "blue",
                "secondaryColor": "red",
                "dark": true
            },
            "performanceGoal": 80
        }
    }
}
```

