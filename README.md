# 🎮 Gamehub — A Game Library

**Gamehub** is an engaging online library for discovering and supporting game developers. Users can browse indie games, see detailed information, and install or access them directly.  

---

## 🌐 Live Demo
[View Live Gamehub](https://your-live-client-link.com)  

---

## 🛠 Technologies Used
- **Frontend:** React, TailwindCSS, React Router, React Hot Toast  
- **Authentication:** Firebase (Email & Google)  
- **Animations:** Framer Motion / GSAP / React Spring  
- **Tools & Deployment:** Netlify, Firebase Hosting, Git & GitHub  

---

## 📸 Screenshots
![Home Page](./screenshots/home.png)  
![Game Details Page](./screenshots/game-details.png)  
![Profile Page](./screenshots/profile.png)  

---

## ⚡ Core Features
1. User Authentication with Email/Password + Google Login  
2. Dynamic homepage with Banner Slider and Popular Games section  
3. Newsletter subscription section  
4. Protected Game Details page — only accessible to logged-in users  
5. Dynamic routing with React Router  
6. Update user profile information (photo URL & name)  
7. Forgot Password functionality  
8. Fully responsive across mobile, tablet, and desktop  
9. 404 “Page Not Found”  
10. Smooth animations using Framer Motion / GSAP / React Spring  

---

## 🏡 Pages & Functionalities

### **Homepage**
- Banner slider with minimum 3 slides showcasing game images  
- Popular Games section: displays at least 3 games sorted by rating  
- Newsletter subscription section  

### **Authentication**
- **Login Page:** Email, Password, Google Login, link to Register  
- **Register Page:** Name, Email, Password, PhotoURL, Google Login, link to Login  
- **Password Validation:** Minimum 6 characters, 1 uppercase, 1 lowercase  

### **Game Details Page (Protected)**
- Displays all game details from JSON: title, category, description, developer, ratings, download link  
- Only accessible by logged-in users; redirects others to login page  

### **My Profile Page**
- View and update user info (Name & Photo URL)  
- Secure update route  

### **Additional Pages**
- 404 Page (Not Found)  
- One additional route based on website theme (e.g., “Top Developers” or “New Releases”)  

---

## 📝 JSON Data Example

```json
{
    "id": "1",
    "title": "Player Unknowns Battle Ground: PUBG",
    "coverPhoto": "https://example.com/images/pubg.png",
    "category": "FPS",
    "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
    "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
    "ratings": "4.5",
    "developer": "Krafton"
}
