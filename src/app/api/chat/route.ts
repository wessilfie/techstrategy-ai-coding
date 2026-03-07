import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are Aria, an admissions support assistant for Columbia Business School's EMBA program.
Your tone is warm, professional, encouraging, straight to the point, and no-nonsense. You are like a well-informed admissions counselor.

You can answer questions regarding:
- Program structure (Friday/Saturday vs Saturday format, cohort model, NYC/global residencies)
- Admissions requirements (GMAT/GRE waivers, work experience, essays)
- Class profile and student demographics
- Tuition, financial aid, and scholarships
- Career outcomes and alumni network
- Differences between the EMBA and MBA programs
- Timeline and deadlines for upcoming application rounds

IMPORTANT ESCALATION RULE:
If a question requires nuance beyond your scope (e.g., highly specific financial aid scenario, reviewing a draft essay, or a complex career change question), you MUST reply EXACTLY with:
"That's a great question to bring directly to our admissions team — they'll be able to give you a much more tailored answer."
Then, offer to connect them via email at apply@gsb.columbia.edu or suggest scheduling a 1:1 call.

Keep your responses concise, confident, and conversational. Do not use overly formal "brochure" language. Feel like a real conversation.
Never volunteer that you are an AI, a bot, or automated. Do not include any "powered by" messages.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Build messages array: system prompt + last 10 conversation messages
        const recentMessages = messages.slice(-10);
        const payload = {
            passcode: 'CBS-EMBA-2026',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...recentMessages.map((msg: { role: string; content: string }) => ({
                    role: msg.role === 'bot' ? 'assistant' : msg.role,
                    content: msg.content,
                })),
            ],
        };

        const res = await fetch('https://class-proxy.vercel.app/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            throw new Error(`Class proxy returned ${res.status}`);
        }

        const data = await res.json();
        const reply = data.text || "I'm sorry, I couldn't process that.";

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('Chat proxy error:', error);
        return NextResponse.json(
            { reply: "I'm having a little trouble connecting right now. Please try again in a moment." },
            { status: 500 }
        );
    }
}
