import express from 'express';

const app = express();
app.use(express.json());
const port = 3500;

interface TranslationRequest {
    text: string;
}

interface TranslationResponse {
    message: string;
}

/** listen: launch port **/
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

/** '/translate': api endpoint for receiving text input in English. Returns status code 200 if successful translation **/ 
app.post('/translate', (req: express.Request, res: express.Response) => {
    try {
        const { text } = req.body as TranslationRequest; 
        if(!text) {
            throw new Error('Missing text field');
        }

        // we are going to 'fake' translation. Actual translation would go here
        setTimeout(() => {
            res.status(200).json({ message: "Successful translation:" });
            console.log(text);
        }, 2000);
    } catch (error) {
        res.status(400).json({ error: "Invalid input" });
    }
});
