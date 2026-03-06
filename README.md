# Columbia Business School EMBA Interactive Chat Prototype

This project is a high-fidelity frontend prototype built with Next.js, React, and CSS Modules. It meticulously replicates the look and feel of the Columbia Business School Executive MBA (EMBA) admissions website, complete with interactive "simulated" chat experiences.

## Features

- **Pixel-Perfect Replica**: The homepage accurately reflects the Columbia Business School EMBA's online layout, including the hero area and "Columbia Advantage" cards using high-quality Unsplash placeholders that match the original thematic intent.
- **Embedded Chat Widget**: An interactive, Intercom-style chatbot widget integrated smoothly into the bottom right of the screen. 
- **Simulated Chat Logic**: A realistic frontend chat simulation layer built into `src/components/chat/ChatWindow.tsx` that mimics human typing delays and processes keywords (e.g., "cost", "location", "GMAT") to offer intelligent, conversational responses from "Aria," a member of the CBS Admissions team.
- **AI Hand-off Support**: Built-in architecture to connect a live LLM (like OpenAI) via an API endpoint in the future (the `/withAI` route concept). 
- **Responsive Design**: Polished, fixed-overlay mobile responsiveness ensures the Chat Window occupies the entire screen on mobile, optimizing usability without breaking the replica homepage beneath.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript / React
- **Styling**: Vanilla CSS Modules (`.module.css`) for predictable scoping, with variables mapped to Columbia's official brand palette (Columbia Blue).

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wessilfie/techstrategy-ai-coding.git
   cd techstrategy-ai-coding
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can interact with the pulsing chat widget in the bottom right corner.

## Future Enhancements
- Hook up the `apiKey` parsing to the Next.js API routes (`src/app/api/chat/route.ts`) to enable the GPT-4.1 nano backend logic. 
- Build out the `/withAI` protected route for A/B testing live LLMs. 
- Expand the Simulated keyword bank to cover more extensive edge cases or specialized EMBA tracks.
