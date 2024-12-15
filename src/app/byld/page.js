import { Suspense } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
const Page_container = dynamic(() => import("./Page_sup/Page_container"), {
  ssr: false,
});

export const metadata = {
  title: "BYLD",
  description:
    "BYLD is an advanced tool for engineers, offering instant access to a comprehensive database and seamless compliance with the Saudi Building Code. It ensures accurate, reliable answers through its powerful AI search, while adhering to strict security standards, including Saudi regulations, with advanced encryption for data protection.",
  keywords:[
    "BYLD", "byld ai", "midjourney ai", "generative ai", "chatbots", "ai website", 
    "nvidia h100", "conversational ai", "dall e", "ai painting", "ai assistant", 
    "ai ops", "murf ai", "ai trading", "artificial intelligence and machine learning", 
    "best chat gpt app", "ai robot", "best ai chatbot", "imagen ai", "chatbot online free", 
    "ai and machine learning", "chatbot free online", "tome ai", "ai learning", "ibm ai", 
    "nvidia dgx", "best chatgpt app", "ai machine learning", "artificial intelligence website", 
    "ai programming", "chatbot customer service", "drawing ai", "ai chat bots", "best chatbot", 
    "ai services", "nvidia dgx a100", "ai automation", "artificial intelligence a modern approach", 
    "chat ai online", "best ai websites", "ai in finance", "voicebot", "python ai", "ai robots", 
    "websites like chatgpt", "artificial intelligence and data science", "best free ai chatbot", 
    "chatgpt app free", "free chatbot ai", "ai in business", "ai and ml", "data centric ai", 
    "chat gpt iphone", "chatbot ai online", "machine learning andrew ng", "ai sites", "best ai chat", 
    "ai chat app", "ai speaker", "ai like chat gpt", "use chat gpt", "best ai chatbot app", 
    "app chat gpt", "best free chat gpt app", "machine learning in finance", "introduction to ai", 
    "talk to a chatbot", "introduction to artificial intelligence", "online ai chatbot", 
    "artificial intelligence in business", "talk to chatgpt", "similar to chat gpt", "ai for everyone", 
    "llm machine learning", "machine learning in healthcare", "artificial intelligence drawing", 
    "talk to ai online", "best chat gpt", "ai drawing website", "ai site", "best ai chatbot free", 
    "ai chatbot free online", "dall e ai", "artificial intelligence machine learning", 
    "ai and data science", "best chatgpt", "ai powered chatbot", "gpt 3 ai chat", "ai bot chat gpt", 
    "chatgpt free app", "official chat gpt app", "talk to chat gpt", "websites like chat gpt", 
    "chatgpt on iphone", "free chat gpt app", "gpt chat app", "conversational chatbot", 
    "ai similar to chatgpt", "chat gpt bot", "ai drawing online", "website like chat gpt", 
    "most advanced ai", "ask google ai a question", "chatgpt whatsapp bot", "ai data", 
    "top ai chatbots", "dalle ai", "open source ai chatbot", "chat gpt like websites", "ai to chat with", 
    "openai gpt chat", "ai voice chatbot", "ai live chat", "voice chat ai", "new ai chatbot", 
    "the best ai chatbot", "advanced ai chatbot", "chat with ai free", "chat gpt free download", 
    "ask a ai", "openai website", "ai 2041", "smartest ai chat", "chatgpt like ai", "intelligent chatbot", 
    "talk to ai app", "original chat gpt app", "like chatgpt", "best free ai chat", "emo the robot", 
    "best ai chats", "talking ai app", "jasper ai chat", "human compatible", "like chat gpt", 
    "website like chatgpt", "chat gpt similar websites", "chatbot with ai", "smart chat bot", 
    "voice chat with ai", "chat with ai bots", "app like chat gpt", "lamda ai chatbot", "chat gpt voice", 
    "conversational artificial intelligence", "ask the ai", "smartest ai chatbot", "openai dall e", 
    "chat gpt best app", "ask ai website", "python ai chatbot", "emo ai robot", "using chat gpt", 
    "alexa ai", "personal ai chatbot", "deep learning chatbot", "astria ai", "free ai like chat gpt", 
    "chat gpt similar ai", "learning ai chatbot", "chatbot girlfriend", "voice chat gpt", 
    "talk with chat gpt", "chatgpt and plagiarism", "use chat gpt online", "talk to gpt", 
    "chatbot ai python", "ais like chat gpt", "asking a ai", "robot chat app", "gpt 3 ai chatbot", 
    "voice ai chatbot", "meta chatbot ai", "free prashna kundali instant answer", "ai ask question", 
    "chatterbot ai", "ai dalle", "openai com chatgpt", "open ai dall e", "chat gpt ai detector", 
    "chatgpt talk", "chatbots and conversational ai", "open source ai chat", "ai talk app", 
    "chat ai chat", "chat gpt audio", "ai portal", "robot talking app", "chatbot 18", "emo ai", 
    "asking the ai", "chat gpt sites", "dall e 2 openai", "chat gpt with voice", "download chat gpt for pc", 
    "chatgpt from openai", "chat gpt v4", "chat gpt text detector", "asking ai website", 
    "18 chat bot", "advanced chat gpt", "bentley software for civil engineering", "chat gpt dall e", 
    "chat gpt dalle", "chat gpt for pc download", "chat gpt linkedin", "chat gpt opensource", 
    "chatai online", "chatbot with deep learning", "https chat gpt", "https chat openai com chat", 
    "ot engineering solutions", "question answer generator from text", "free answer generator"
  ]
  
  ,
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Page_container />
    </Suspense>
  );
}
