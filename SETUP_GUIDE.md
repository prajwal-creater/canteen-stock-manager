# Setup Guide - Canteen Stock Manager

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (or use MongoDB Atlas)
- Git

---

## 1. Backend Setup

### Step 1: Navigate to backend directory
```bash
cd backend
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Create `.env` file
```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB connection string:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/canteen-stock-manager
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

### Step 4: Start the backend server
```bash
npm run dev
```

Server will run on `http://localhost:5000`

---

## 2. Admin Dashboard Setup

### Step 1: Navigate to admin-dashboard directory
```bash
cd admin-dashboard
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start the development server
```bash
npm start
```

The admin dashboard will open at `http://localhost:3000`

**Features:**
- ✅ Add new canteen items
- ✅ Set quantity and price
- ✅ View all items in a table
- ✅ Real-time inventory tracking

---

## 3. Mobile App Setup

### Option A: Using Expo (Easiest)

#### Step 1: Install Expo CLI
```bash
npm install -g expo-cli
```

#### Step 2: Navigate to mobile-app directory
```bash
cd mobile-app
```

#### Step 3: Install dependencies
```bash
npm install
```

#### Step 4: Start the app
```bash
expo start
```

#### Step 5: Run on device
- **Android**: Press `a` to open Android Emulator or scan QR code with Expo Go app
- **iOS**: Press `i` to open iOS Simulator or scan QR code with Expo Go app
- **Web**: Press `w` to open in web browser

---

### Option B: Using React Native CLI

#### Step 1: Install React Native CLI
```bash
npm install -g react-native-cli
```

#### Step 2: Navigate to mobile-app directory
```bash
cd mobile-app
```

#### Step 3: Install dependencies
```bash
npm install
```

#### Step 4: Start Metro Bundler
```bash
npm start
```

#### Step 5: In another terminal, run on device
```bash
# For Android
npm run android

# For iOS (macOS only)
npm run ios
```

---

## API Endpoints

### Base URL: `http://localhost:5000/api`

#### Items Endpoints:
```
GET    /items              - Get all items
POST   /items              - Add new item
GET    /items/:id          - Get item by ID
PUT    /items/:id          - Update item
DELETE /items/:id          - Delete item
```

### Add Item Request Body:
```json
{
  "name": "Tea",
  "description": "Hot tea",
  "quantity": 50,
  "price": 10,
  "category": "Beverages"
}
```

---

## Project Architecture

```
Backend:
  - Express.js REST API
  - MongoDB database
  - Item CRUD operations

Admin Dashboard:
  - React web application
  - Real-time inventory management
  - Form to add/edit items

Mobile App:
  - React Native (iOS/Android)
  - Real-time stock checking
  - Item availability display
```

---

## Troubleshooting

### Backend won't start
- Check if port 5000 is already in use
- Verify MongoDB is running
- Check `.env` file configuration

### Admin Dashboard issues
- Clear browser cache: `Ctrl+Shift+Delete`
- Ensure backend is running on port 5000
- Check console for error messages

### Mobile App issues
- Clear node_modules: `rm -rf node_modules && npm install`
- For iOS: `pod install` in ios directory
- Use Expo Go app for quick testing

---

## Next Steps

1. ✅ Set up backend
2. ✅ Set up admin dashboard
3. ✅ Set up mobile app
4. 📝 Add authentication
5. 📝 Add edit/delete item features
6. 📝 Add inventory reports
7. 📝 Add notifications for low stock

---

## Support

For issues or questions, create an issue in the GitHub repository.

Happy coding! 🚀