import generateContent from "../services/ai.service.js";

const getReview = async (req, res) => {

    const code = req.body.code;
    if (!code) {
        return res.status(400).send("Code is required")
    }

    const response = await generateContent(code);
    res.send(response)
}

export default getReview