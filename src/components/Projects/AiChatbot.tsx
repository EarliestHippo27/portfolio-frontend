import { Stack } from "@mui/material";
import jarvis from "../../assets/aichatbot.jpg";

function AiChatbot() {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          paddingTop: 5,
          px: { xs: 10, md: 60 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            src={jarvis}
            style={{
              width: "50%",
              height: "auto",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <a href="https://github.com/EarliestHippo27/Jarvis-Bot">
            Jarvis Chatbot
          </a>
          <h5>Description: </h5>
          <p>Tech Stack: Java, PostgreSQL</p>
          <p className="text-wrap">
            Discord chatbot powered using Google Gemini 2.0 Flash-Lite. Stores
            and sends previous conversations into a local database and sends
            them into the prompt. Through use of a per user summary, token usage
            is reduced by instead sending a summary instead of every
            conversation.
          </p>
        </div>
      </Stack>
    </>
  );
}

export default AiChatbot;
