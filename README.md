React Native Movie List App

This is a React Native application that fetches movie data from the TMDB (The Movie Database) API. The app allows users to browse a list of movies, search for specific titles, and view detailed information about each movie.

Table of Contents

#Overview
#Requirements Covered
#Requirements Pending
#Installation
#Usage
#Technologies Used
#Contributing
#License


@-Overview

The Movie List App is built using React Native, utilizing functional components and React Hooks for state management. It fetches movie data from the TMDB API, displays a scrollable list of movies, provides a search functionality, and allows users to view detailed information about each movie. Navigation between screens is implemented using React Navigation.

@-Requirements Covered

The following requirements from the assignment have been implemented:

Movie List Screen: Displays a scrollable list of movies with titles, release dates, and overviews.
"Load More" button for pagination to fetch additional movies.
Movie Details Screen: Shows movie details such as poster, genre, runtime, and overview.
Search Functionality: Includes a search bar to search movies by title.
TMDB API Integration: Fetches movie data using the TMDB API.
State Management: Utilizes React Native state management (useState and useEffect).
Navigation: Implements React Navigation for screen navigation.
Functional components and React Hooks usage.
Axios for making API requests.
Error handling during API requests.
Styled using React Native stylesheets.


@-Requirements Pending

The following optional or unimplemented features remain:

Pagination: Implementing a paginated approach instead of a "Load More" button.
Filtering: Adding the ability to filter movies by genre.
Animated Transitions: Using React Native Animated API for smooth screen transitions.
Offline Mode: Mechanism to handle offline mode gracefully.


@-Installation

Clone the repository: git clone https://github.com/your-username/react-native-movie-list-app.git
Navigate to the project directory: cd react-native-movie-list-app
Install dependencies: npm install


@-Usage

To run the application:

For Android: npx react-native run-android
For iOS: npx react-native run-ios
Technologies Used

React Native
React Navigation
Axios
TMDB API
Note on Implementation

#####During the initial development and machine test, time constraints limited the complete implementation of all specified functionalities. Some points were not covered due to time limitations, such as pagination, filtering by genre, animated transitions, and offline mode handling.

##Future Enhancements:

Implement pagination to efficiently load large sets of data with a paginated approach.
Add filtering functionality to allow users to filter movies by genre for a refined search experience.
Enhance user experience by incorporating animated transitions between screens using React Native's Animated API.
Implement offline mode handling for graceful behavior when the user is not connected to the internet.
Further Improvements:

The current version provides basic styling. Enhancements in the UI/UX and overall design are intended for future updates to improve user engagement and aesthetics.
Please note that the application's functionality will be continuously improved upon, focusing on delivering a more comprehensive and polished user experience.



@-Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any enhancements or fixes.

@-License

This project is licensed under the MIT License.
