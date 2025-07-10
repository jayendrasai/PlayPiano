Piano Web Application
Overview
This project is an interactive web-based piano that allows users to play musical notes by clicking on virtual piano keys or using their keyboard. The application features a responsive design, volume control, and an option to show or hide key labels, providing an engaging and customizable user experience.
Features

Virtual Piano Keyboard: A graphical piano interface with white and black keys representing musical notes (C4 to E5).
Keyboard Input: Play notes using corresponding keyboard keys (e.g., 'a' for C4, 'w' for Db4, etc.).
Volume Control: Adjust the audio volume using a slider, with values ranging from 0 to 1.
Show/Hide Key Labels: Toggle the visibility of key labels (e.g., 'a', 'w') using a checkbox for a cleaner interface.
Visual Feedback: Keys highlight briefly when played, with distinct active states for white and black keys.
Responsive Design: The piano is centered on the page with a clean, modern look, optimized for various screen sizes.

Technologies Used

HTML5: Structures the piano interface, including the keys, volume slider, and checkbox controls.
CSS3: Styles the piano with a sleek design, using flexbox for layout, linear gradients for key aesthetics, and transitions for interactive effects.
JavaScript: Handles interactivity, including playing audio files, responding to keyboard and mouse inputs, and managing volume and key label visibility.
Web Audio: Utilizes .wav audio files for each note, played dynamically based on user input.
GitHub: Hosts the project files for version control and public access.

File Structure

index.html: Contains the HTML structure for the piano interface, including the container, controls, and piano keys.
styles.css: Defines the visual styling, including the layout, colors, gradients, and animations for the piano keys and controls.
script.js: Manages the application's logic, including audio playback, event listeners for clicks and key presses, volume control, and key label toggling.

Setup and Usage

Clone the Repository:git clone <repository-url>


Navigate to the Project Directory:cd <repository-name>


Serve the Application:
Use a local web server (e.g., Live Server in VS Code, or Python's http.server):python -m http.server 8000


Open a browser and navigate to http://localhost:8000.


Play the Piano:
Click on the piano keys or press the corresponding keyboard keys (e.g., 'a', 'w', 's', etc.) to play notes.
Adjust the volume using the slider.
Toggle key labels using the "Show Keys" checkbox.



Notes

The application requires audio files (.wav) for each note, located in a tunes/ directory. Ensure these files are present and correctly named (e.g., a.wav, w.wav) for the application to function properly.
The project is designed to run in a browser environment and does not require additional dependencies beyond a standard web server for local testing.

Future Enhancements

Add support for more octaves or additional notes.
Implement different instrument sounds or waveforms.
Enhance accessibility with ARIA attributes for screen readers.
Add recording and playback functionality for user compositions.

License
This project is open-source and available under the MIT License.
