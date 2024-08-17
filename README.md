# Product_list
Running the App
Start the Metro Bundler:

npx react-native start
Explanation: Starts the Metro Bundler, which is required for React Native to bundle your JavaScript code.
Run the App on an Android Emulator or iOS Simulator:

For Android:
npx react-native run-android
Explanation: Builds and runs the app on an Android emulator or connected Android device.

For iOS:
npx react-native run-ios
Explanation: Builds and runs the app on an iOS simulator or connected iOS device.



//Component
Product List Screen:
Project Structure and Components
Components
ProductListScreen.js: Displays a list of products.
ProductDetailsScreen.js: Shows detailed information about a selected product.
ProductCard.js: Represents a single product card within the list.

API Integration:
Fetch product data from the provided API: https://dummyjson.com/products.
Retrieve detailed product information by appending the product ID to the base URL (e.g., https://dummyjson.com/products/1).
User Interaction:

Install Node.js and npm:

Download and install Node.js from nodejs.org. npm comes bundled with Node.js.
Install React Native CLI:

npm install -g react-native-cli
Explanation: Installs the React Native command-line interface globally on your system.
Create a New React Native Project:

npx react-native init ProductDisplayApp
Explanation: Initializes a new React Native project named ProductDisplayApp.

cd Appname

Development
Install Required Libraries:

React Navigation:
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context

Axios (for API requests):
npm install axios

React Native Elements (UI components):
npm install react-native-elements

Implement Components:

ProductListScreen.js: Fetches and displays a list of products. Each product is represented as a card using ProductCard.js.
ProductDetailsScreen.js: Fetches and displays details of the selected product.
ProductCard.js: A reusable component to display product information in a card format

Running the App
Start the Metro Bundler:
npx react-native start

Run the App on an Android Emulator or iOS Simulator:
For Android:
npx react-native run-android

For iOS:
npx react-native run-ios

Deployment
Push Your Code to GitHub:
Initialize a Git repository if not already done:
git init
Add remote repository:
git remote add origin https://github.com/surajbaride/Product_list

Add, commit, and push your code:
git add .
git commit -m "Initial commit"
git push -u origin main
