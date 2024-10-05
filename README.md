# GT Journal Bot

The **GT Journal Bot** is an innovative proof-of-concept project designed to auto-transcribe phone calls and summarize them using ChatGPT. The bot then journals the conversation data directly into an Applicant Tracking System (ATS), creating records on both candidate and client profiles.

> **Note**: This project is about 90% functional. It was abandoned due to encryption issues with our phone service provider, as WebRTC (needed for capturing two-way call data) was not supported. However, the application remains viable for use with unencrypted voice streams.

## Key Features

- **Real-time Speech Transcription**: Captures and transcribes two-way phone conversations in real-time.
- **One-Click Summarization**: Leverages ChatGPT to generate concise summaries of conversations with a single click.
- **Automated ATS Journaling**: Integrates with ATS to automatically journal the summarized conversations in both client and candidate profiles.
- **Input Menu**: Allows users to record essential client and candidate data during the call for easier tracking and organization.

## Technologies Used

- **JavaScript**
- **Groovy Script**
- **CSS (Bootstrap)**
- **HTML**
- **Teneo.AI SDK**
- **Deepgram.AI SDK**
- **ChatGPT API**

## SDKs and Resources

### Transcription SDK
- **DeepGram**: Handles the real-time transcription of phone conversations.
  - [DeepGram Documentation](https://developers.deepgram.com/docs/introduction?_gl=1*1itnlbl*_ga*ODE3OTE3MTkzLjE3MDUwODcwNzc.*_ga_TYPC1TBCKT*MTcwODk2ODI2OC4zNy4wLjE3MDg5NjgyNjguNjAuMC4w)

### Chatbot SDK
- **Teneo.AI**: Powers the conversational AI and natural language understanding.
  - [Teneo.AI Documentation](https://developers.teneo.ai/article/build)

### Phone System SDK
- **Mitel**: Used for phone call integration and managing call data.
  - [Mitel Developer Resources](https://developer.mitel.io/guides-resources)

### ATS System SDK
- **CTM ClearConnect**: API integration for ATS journaling of call summaries.
  - ![CTM ClearConnect API Guide](/assets/ClearConnectUserGuide2-19-2024.pdf)

## Contributing
Feel free to download code and suggest changes!

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/gt-journal-bot.git
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Ensure the appropriate API keys and credentials for DeepGram, ChatGPT, Teneo.AI, and CTM are added to your `.env` file.

4. **Run the application**:
    ```bash
    npm start
    ```

## Deployed Site

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
