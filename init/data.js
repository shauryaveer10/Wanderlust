const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful retreat in the heart of the Rocky Mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "mountain-cabin"
    },
    price: 8500, // INR
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396]
    }
  },
  {
    title: "Luxury Castle Stay",
    description: "Experience royalty in this 15th century Scottish castle.",
    image: {
      url: "https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "scottish-castle"
    },
    price: 37500, // INR
    location: "Edinburgh",
    country: "Scotland",
    category: "Castle",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533]
    }
  },
  {
    title: "Beachfront Villa with Pool",
    description: "Wake up to ocean views and relax in your private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "beach-villa"
    },
    price: 22000, // INR
    location: "Goa",
    country: "India",
    category: "Amazing Pools",
    geometry: {
      type: "Point",
      coordinates: [73.8567, 15.2993]
    }
  },
  {
    title: "Houseboat Getaway",
    description: "Stay afloat in comfort with modern amenities and lake views.",
    image: {
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      filename: "houseboat"
    },
    price: 13000, // INR
    location: "Alleppey",
    country: "India",
    category: "Houseboat",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981]
    }
  },
  {
    title: "Modern City Apartment",
    description: "Located in the heart of Mumbai, with amazing city views.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "city-apartment"
    },
    price: 16000, // INR
    location: "Mumbai",
    country: "India",
    category: "Iconic Cities",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  }
];
module.exports = sampleListings;
