# TimeCycle Notifier

The TimeCycle Notifier is a JavaScript project that provides audio notifications of the current time at regular intervals within an hour. It utilizes the VoiceRSS Text-to-Speech (TTS) API to convert the time information into spoken audio.

## Features

- Notifies you of the current time at regular intervals within an hour.
- Customizable voice for audio notifications.
- Visual indicator of the notifier status (red when inactive, green when active, yellow when stopped).

## Setup and Usage

1. Clone or download the project files to your local machine.

2. Open the HTML file in a web browser to interact with the TimeCycle Notifier.

3. The web page provides a visual indicator (colored light) of the notifier's status:
   - Red: Inactive or stopped
   - Green: Active and notifying time
   - Yellow: Stopped

4. Use the provided buttons to control the notifier:
   - "Start Notifier": Activates the notifier to provide audio notifications of the time cycle.
   - "Stop Notifier": Deactivates the notifier, stopping the audio notifications.
   - "Test Voice": Generates a test audio notification for a set of example times.

5. Customize the voice for the audio notifications by selecting the desired language from the dropdown list.

## Code Explanation

The main components of the project include:

- **`timeaware()` function**: Calculates the time until the next time cycle interval and triggers the TTS audio notification. It also manages the visual indicator based on the notifier's status.

- **`hournmin()` function**: Formats the current time (hour and minute) for display.

- **`getTime()` function**: Retrieves the current time using the JavaScript `Date` object.

- **`ttsi(content)` function**: Utilizes the VoiceRSS API to generate audio from the provided text. It plays the audio twice to ensure audibility.

- **`sleep(ms)` function**: A utility function to create a delay using `setTimeout`.

- **`sleepwhile(s)` function**: Waits for a specified number of seconds, periodically checking if the notifier's status has changed.

## Customization

- Adjust the time cycle intervals (e.g., change from 15, 30, 45, and 60 minutes).
- Alter the visual indicators or colors to match your preferences.
- Add more test times to the `tryvoice()` function for testing different scenarios.

## Compatibility

The project uses JavaScript and HTML, making it compatible with most modern web browsers.

## Conclusion

The TimeCycle Notifier project provides a simple and customizable solution to receive periodic audio notifications of the current time based on predefined time intervals. This can be especially useful for maintaining a sense of time passing while focused on tasks or activities.

## Author

* *Bonaventura Gonzalo*  - [Linkedin](https://www.linkedin.com/in/gonzalo-bonaventura) -  [GitHub](https://github.com/GonzaloBonaventura)
