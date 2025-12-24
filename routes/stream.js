import express from 'express';
import streamData from '../data/streamData.json' with { type: 'json' };

const router = express.Router();

router.get('/', (req, res) => {
    // Required SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Let client know stream is open
    res.write(': stream connected\n\n');

    const sendRandomItem = () => {
        const randomItem =
            streamData[Math.floor(Math.random() * streamData.length)];

        // Optional: tag type for frontend
        const eventType = randomItem.wbsCode ? 'wbs' : 'event';

        res.write(`event: ${eventType}\n`);
        res.write(`data: ${JSON.stringify(randomItem)}\n\n`);
    };

    // Send every 2–10 seconds
    const interval = setInterval(() => {
        sendRandomItem();
    }, Math.floor(Math.random() * 8000) + 2000);

    // Cleanup when client disconnects
    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
});

export default router;
