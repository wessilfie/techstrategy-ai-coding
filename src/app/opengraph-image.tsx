import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CBS EMBA Bot Demo';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#003366',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 16 }}>CBS EMBA</div>
                <div style={{ fontSize: 32, opacity: 0.85 }}>Admissions Chatbot Demo</div>
            </div>
        ),
        { ...size }
    );
}
