# 🌍 Wanderlust – Airbnb Clone  

Wanderlust is a **full-stack web application** inspired by Airbnb, where users can create accounts, add property listings, leave reviews, and explore stays across different categories.  

This project was built with a focus on **scalability, cloud integration, and multi-user support**.  

---

## ✨ Features  

- 🔑 **Authentication & Authorization**  
  Users can sign up, log in, and manage their listings securely.  

- 🏡 **Property Listings**  
  Add, edit, and delete listings with image uploads (stored in the cloud).  

- ⭐ **Reviews & Ratings**  
  Users can leave reviews and ratings on listings.  

- 🗺 **Interactive Maps**  
  Property locations displayed using **Mapbox API**.  

- 🗂 **Categories**  
  Filter listings by categories (Trending, Mountains, Castles, Farms, etc.).  

- ☁ **Cloud Storage**  
  Images are uploaded and stored using **Cloudinary**.  

- 👥 **Multi-User Support**  
  Different users can simultaneously add/manage listings and reviews.  

---

## 🛠 Tech Stack  

- **Frontend**: EJS, Bootstrap, Custom CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Cloud Services**: Cloudinary (images), Mapbox (geolocation)  
- **Authentication**: Passport.js  
- **Hosting**: Render  

---

## 🚀 Live Demo  

🔗 [Wanderlust on Render](https://wanderlust-fmec.onrender.com)  

---

## 📸 Screenshots  
<img width="1888" height="866" alt="Screenshot 2025-09-03 at 8 09 49 PM" src="https://github.com/user-attachments/assets/48a1673d-dd70-42c3-9974-d499b3ef9ef3" />

---

## ⚙️ Installation & Setup  

Clone the repository:
```
git clone https://github.com/shauryaveer10/Wanderlust.git
cd Wanderlust
```

Install dependencies:
```
npm install
```


Set up environment variables in a .env file:
```
MAP_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
SESSION_SECRET=your_secret
MONGO_URI=your_mongodb_uri
```

Go to the init folder and run the index.js file
This will initialise the database with the sample data.
```
node index.js
```

Run the server:
```
node app.js
```
The app should now be running at:
```
http://localhost:8080
```


## 🧑‍💻 Contributing
Contributions are welcome! If you’d like to improve this project, please fork the repo and create a pull request.


## 👤 Author
Shaurya Veer Singh Patial


