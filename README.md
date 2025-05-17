# 🎬 Movie Review WebApp

A simple web application to **add, edit, sort, and delete movie reviews**, built using **HTML/CSS/JavaScript** and powered by **Firebase Firestore**.

---

## 🚀 Features

- 🔥 Real-time updates using Firestore
- 📩 Add new movie reviews
- ✏️ Edit existing reviews
- ❌ Delete reviews
- 🔃 Sort reviews by:
  - Movie Name
  - Rating
  - Release Date
  - Director Name
- 📅 Human-readable release date formatting

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS (Bootstrap), JavaScript (jQuery)
- **Backend**: Firebase Firestore (NoSQL Realtime Database)

---

## 📁 Project Structure
📦 Movie-Review-App/
```
├── src/
│   ├── index.html
│   ├── styles.css
│   └── config.js
├── .env              (needs to be created)
├── .gitignore       
├── config.js 
```
---

## 🔧 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/movie-review-app.git
   cd movie-review-app
   ```
   
2. **Set up Firebase**
- Go to [Firebase Console](https://console.firebase.google.com/)
- Click **Add Project** and follow the setup instructions
- In the left sidebar, click **Firestore Database** and enable it
- Navigate to **Project Settings > General > Your Apps**
- Add a Web App and copy your Firebase config object

3. **Configure Firebase in Your App**
   -In config.js, replace the firebaseConfig object with your project’s credentials:
      ```
      export const firebaseConfig = {
      apiKey:"YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      ...
      };
      ```

4. **Run the App**
Open index.html in your browser (no build step needed)

