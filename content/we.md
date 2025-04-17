---
title: "They Wanted to Monitor Us—So I Gave Them Nothing to See, WE"
date: "2024-12-15"
time: "01:53"
---

# III We
---

We is an anonymous social platform designed exclusively for campus students to share their thoughts, experiences, and connect with others on campus. This app ensures privacy and encourages free expression by allowing students to post anonymously, interact with others, and stay updated on campus news.

---

> 🏆 **Award Recognition**: III We  won the Best Project Award for Fall 2024, showcasing excellence in software development and innovation.

---

## Features
---

- **Anonymous Posting**: Students can share posts anonymously, allowing open and honest communication.
- **Campus-Only Access**: Access restricted to students through campus authentication.
- **Discussion Threads**: Engage in conversations under posts.
- **Onboarding Flow**: Smooth onboarding experience for new users.
- **Post Previews**: Users can view previews of posts in the feed.
- **Account Settings**: Users can manage their preferences and app settings.

## Technology Stack
---

- **Front-End**: SwiftUI for seamless UI/UX.
- **Back-End**: Node.js with Express.js for RESTful API development.
- **Database**: MongoDB for storing posts and user data.
  
# Instruction Manual
---

## Prerequisites
---

### 1. Hardware Requirements
- A Mac with macOS 15.1 or later

### 2. Software Requirements
- **Xcode 16**
  - Download Xcode 16 from the [App Store](https://apps.apple.com/us/app/xcode/id497799835)
- **VS Code or Similar Code Editors**
  - Install Visual Studio Code or any code editor that supports JavaScript and Node.js
- **Node.js**
  - Install Node.js from [Node.js Official Website](https://nodejs.org/)
  - Follow the on-screen installation steps
- **Redis**
  - Install Redis using the package manager appropriate for your operating system:
    - For macOS: Install via Homebrew with `brew install redis`
    - For Linux: Use `sudo apt install redis-server` (Debian/Ubuntu) or equivalent for other distributions
    - For Windows: Download from the [Redis GitHub](https://github.com/microsoftarchive/redis/releases)
  - Note: No need to update environment variables, as the testing environment provides default configurations

### 3. iOS Platform Support
- iOS 18 or 18.1 support
  - After installing Xcode, ensure the required iOS platform support is downloaded

## Setup Instructions
---

### 1. Install Xcode
- Download and install Xcode 16 from the [App Store](https://apps.apple.com/us/app/xcode/id497799835)
- Launch Xcode after installation

### 2. Download iOS 18 Platform Support
- If prompted after launching Xcode, download the iOS 18 or 18.1 platform support
- If no prompt appears:
  - Click Xcode in the menu bar
  - Select Settings > Components
  - Locate iOS 18.1 (or the latest available version) and download it
  - Close the Settings window after downloading

### 3. Install Node.js and Redis
- Install Node.js from the [Node.js Website](https://nodejs.org/)
- Install Redis as described above

### 4. Install Visual Studio Code
- Download VS Code from [VS Code website](https://code.visualstudio.com/)
- Install extensions such as Node.js Tools, Next.js Snippets, and Redis Management for additional support

## Running the Node.js Backend
---

**Note:** You don't need to follow this section to run the application, as the Backend API can be directly accessed via [https://we-backend-gtkw.onrender.com](https://we-backend-gtkw.onrender.com) and is added directly to the BaseService.swift in SwiftUI app "We".

If you prefer to run the backend locally:

1. **Navigate to the Backend Folder**
   ```bash
   cd path/to/we-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Redis Server**
   ```bash
   redis-server
   ```

4. **Run the Backend Server**
   ```bash
   npm start
   ```
   The server will start on the configured port (default: [http://localhost:5500](http://localhost:5500))

## Running the SwiftUI App
---

1. **Open the Project**
   - In Xcode, click File in the menu bar and select Open
   - Navigate to the folder containing the project folder "We"

2. **Load the Project**
   - Open the folder, and Xcode will load the project files
   - Wait for the loading process to complete

3. **Select the Simulator**
   - From the dropdown menu at the top of Xcode, choose an iPhone/iPad/Mac model (e.g., iPhone 16 Pro Max or similar)

4. **Run the App**
   - Click the Run button (play icon) in the top-left corner of Xcode
   - The iOS simulator will open and load iOS 18 or 18.1
   - Wait for the app to build and deploy to the simulator

## Running the We-Web (Next.js Application)
---

**Note:** You don't need to follow this section as the application can be directly accessed via [https://we-web-beta.vercel.app/](https://we-web-beta.vercel.app/)

If you prefer to run the web application locally:

1. **Navigate to the Web Folder**
   ```bash
   cd path/to/we-web
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   By default, the development server will start on [http://localhost:3000](http://localhost:3000)

4. **Access the Application**
   - Open a browser and navigate to [http://localhost:3000](http://localhost:3000)

## Testing the SwiftUI App
---

### 1. Onboarding
- Navigate through the onboarding process
- At the end of onboarding, click Get Started to dismiss the onboarding view

### 2. Authentication
- **Sign Up**
  - Click Verify and Sign Up to create a new account
- **Login**
  - Click Login to proceed with existing credentials

### 3. Admin Access (Optional)
- Use the following admin credentials for elevated privileges:
  - Email: admin@islander.tamucc.edu
  - Username: tamuccAdmin
  - Password: Password@123
- Login with these credentials to access admin functionalities

^_^
---

