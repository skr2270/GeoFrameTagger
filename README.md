Web application for extracting frames from drone-recorded videos and embedding EXIF data from corresponding .srt files, tailored for photogrammetry purposes.

### Overall Description and Goals
The application allows users to upload drone-recorded video files along with their .srt telemetry files. Users can select intervals for frame extraction, either through manual entry or from predefined options. Each extracted frame will have all available telemetry data from the .srt file embedded as EXIF data, facilitating subsequent photogrammetry analysis.

### Features
1. **Video and .srt File Upload:** Users can upload video files and the corresponding .srt files containing telemetry data.
2. **Interval Selection for Frame Extraction:** Users can specify the interval for frame extraction either by entering the value in seconds manually or by selecting from predefined intervals.
3. **Frame Extraction and EXIF Embedding:** The application extracts frames at the specified intervals and embeds telemetry data from the .srt file into the frames as EXIF data.
4. **Directory and Frame Naming:** Extracted frames are saved in a directory named after the video file, with each frame named based on its frame number and timestamp in the video.
5. **View EXIF Information:** Users can view the embedded EXIF information for any extracted frame within the application.

### Functional Specification

#### User Interaction
1. **Upload Section:**
   - Users start by uploading a video file and its corresponding .srt file.
   - The upload interface provides separate fields for each file type.
2. **Interval Selection:**
   - Post-upload, users are prompted to select the frame extraction interval.
   - They can either enter a custom interval in seconds or choose from predefined options (e.g., 1s, 5s, 10s).
3. **Extraction and Embedding Process:**
   - Upon confirming the interval, the application processes the video and .srt file.
   - Frames are extracted at the specified interval, and telemetry data is embedded as EXIF.
4. **Viewing Extracted Frames:**
   - After processing, users are directed to a gallery of extracted frames.
   - Selecting a frame allows users to view its embedded EXIF data.

#### Directory and Frame Naming
- **Directory Naming:** Named after the video file, excluding the extension. For "video1.mp4", the directory is "video1_frames".
- **Frame Naming:** "frame_[frame_number]_[timestamp].jpg", where the timestamp is in "00h01m23s" format.

### Technical Specification

#### Application Type and Technologies
- **Type:** Web application.
- **Backend:** Node.js with Express framework.
- **Database:** MongoDB with Mongoose ORM for managing user sessions and uploaded file metadata.
- **Frontend:** EJS for templating, Bootstrap for styling, and Vanilla JavaScript for client-side logic.

#### Architecture
1. **Backend Processing:**
   - Video and .srt file uploads are handled by Express routes.
   - Frame extraction and EXIF embedding are performed by server-side scripts.
   - Extracted frames are stored in directories on the server, following the specified naming conventions.
2. **Frontend:**
   - EJS templates render the upload interface, interval selection, and gallery view.
   - Bootstrap and Vanilla JavaScript enhance user interaction, particularly in the gallery view for examining EXIF data.

#### Integration with 3rd-Party Services
- No 3rd-party integrations specified. The focus is on processing uploaded files and embedding telemetry data.

### Conclusion
This specification outlines the development of a web application designed to facilitate the photogrammetry workflow by extracting frames from drone-recorded videos, embedding telemetry data as EXIF, and allowing users to review this data. The application simplifies the process of selecting extraction intervals and provides a user-friendly interface for accessing and viewing the extracted frames and their EXIF information.
