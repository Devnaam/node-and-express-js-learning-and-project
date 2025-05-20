# Note-Taking Web Application

A stylish, responsive, and professional note-taking web application built with **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**. This application allows users to create, edit, archive, and delete notes with features like tagging, pinning, searching, and dark mode. It uses server-side rendering for a seamless experience and an in-memory store for simplicity, with a modular structure for easy extensibility.

## Features

### Core Functionality
- 📝 **Create Notes**: Add notes with a title, content, and optional comma-separated tags.
- 📖 **View Notes**: Display all notes in a responsive card grid on the homepage.
- 🛠️ **Edit Notes**: Update existing notes' title, content, and tags.
- 🗑️ **Soft Delete**: Move notes to a trash section with the option to restore.
- 🔍 **Search and Filter**: Search notes by title or content and filter by tags.
- 🏷️ **Tagging System**: Assign tags to notes and filter by specific tags.

### Additional Features
- 📅 **Timestamps**: Display creation and last-updated timestamps for each note.
- 📌 **Pinning**: Pin notes to appear at the top of the list.
- 🧹 **Archiving**: Move notes to an archive section with the option to restore.
- 🌙 **Dark Mode**: Toggle between light and dark themes, with preferences saved in `localStorage`.

### Design
- Clean, professional UI with a deep teal and neutral gray color scheme.
- Responsive card layout (1 column on mobile, 2 on tablet, 3 on desktop).
- Smooth transitions and hover effects using Tailwind CSS utility classes.
- Modern typography with the Inter font for a polished look.
- Gradient headers and footers for a sophisticated aesthetic.

## Tech Stack
- **Backend**: Node.js with Express.js for server-side logic and routing.
- **Frontend**: EJS for server-side templating, Tailwind CSS (via CDN) for styling.
- **JavaScript**: Client-side scripting for dark mode toggle.
- **Dependencies**: `express`, `ejs`, `uuid` for unique IDs, `nodemon` (dev).
- **Font**: Inter (via Google Fonts).

## Folder Structure
```
note-taking-app/
├── public/
│   ├── css/
│   │   └── styles.css        # Custom CSS for transitions and card styling
│   └── js/
│       └── script.js         # Client-side JavaScript for dark mode
├── views/
│   ├── partials/
│   │   ├── header.ejs        # Header with navigation and search bar
│   │   └── footer.ejs        # Footer with copyright
│   ├── home.ejs              # Homepage with note grid
│   ├── create.ejs            # Form for creating notes
│   ├── edit.ejs              # Form for editing notes
│   ├── archive.ejs           # Archived notes view
│   └── trash.ejs             # Trashed notes view
├── routes/
│   └── notes.js              # Route handlers for note operations
├── package.json              # Project metadata and dependencies
└── server.js                 # Main server file
```

## Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Installation
1. **Clone the Repository** (if applicable) or create the folder structure as shown above.
2. **Navigate to the Project Directory**:
   ```bash
   cd note-taking-app
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Ensure Folder Structure**:
   - Verify that all files are placed in the correct directories as per the structure above.

## Running the Application
1. **Start the Server**:
   - For production:
     ```bash
     npm start
     ```
   - For development (with auto-restart):
     ```bash
     npm run dev
     ```
2. **Access the App**:
   - Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Create a Note**: Click "New Note" in the header to access the note creation form. Enter a title, content, and optional tags.
- **View Notes**: The homepage (`/`) displays all active notes in a card grid. Pinned notes appear at the top.
- **Edit a Note**: Click "Edit" on a note card to modify its details.
- **Archive a Note**: Click "Archive" to move a note to the archive section (`/archive`).
- **Trash a Note**: Click "Trash" to move a note to the trash section (`/trash`). Restore from trash or archive as needed.
- **Search and Filter**: Use the search bar to find notes by title or content, or select a tag from the dropdown to filter.
- **Toggle Dark Mode**: Click the dark mode button in the header to switch themes.

## Notes
- **Data Storage**: The application uses an in-memory store. To persist data across server restarts, extend `server.js` to use a JSON file or database.
- **Customization**: The color scheme uses deep teal and neutral grays for a professional look. The note background color option is disabled but can be re-enabled by modifying `create.ejs` and `edit.ejs`.
- **Responsive Design**: The app is fully responsive, adapting to mobile, tablet, and desktop screens.

## Extending the Application
- **Persistent Storage**: Add `fs` module to `server.js` to save notes to a JSON file.
- **Authentication**: Integrate a user authentication system for personalized note management.
- **Database**: Replace the in-memory store with a database like MongoDB or SQLite.
- **Additional Features**: Add rich text editing, note categories, or export functionality.

## License
This project is for educational purposes and not licensed for commercial use. All rights reserved © 2025.

## Contributing
This is a standalone project, but feel free to fork and modify it for personal use. Suggestions for improvements are welcome!