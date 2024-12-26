import { Configuration, OpenAIApi } from "openai";

const API_KEY = '';

const main = async (surveyResult) => {

    try {
        const configuration = new Configuration({
            apiKey: API_KEY
        });
        const openai = new OpenAIApi(configuration);

        const jsonResult = `
    {origin:[{
        "parameter": "age",
        "inference": "middle_age",
    }],
    analysis:[{
        "parameter": "age",
        "inference": ["middle_age"],
        "probability": 65
    }]}`;

        const prompt = `Given the survey data ${surveyResult}, analyze and divide the respondent's profile attributes into 'origin' and 'analysis' categories. For 'origin', include all personal profile attributes that the respondent explicitly chose. These could be choices that reflect their personal characteristics or habits, like loving a book named 'Old man and sea' or enjoying a 'Sunny Summer Day'.In 'analysis', infer at least five attributes not directly stated or obviously derived from the survey answers. Exclude explicit inferences, such as music preferences. If the respondent, for example, prefers leisure activities alone, infer that they may be single. Use your understanding of human behavior, preferences, and lifestyles to make educated guesses about the respondent's profile. The analysis must be returned in English and formatted as a JSON object, following this pattern: \n\n${jsonResult}\n\n. Note: The output must be in English, excluding anything else or any Chinese language, and it must strictly follow the provided JSON format.
`;


        const resp = await openai.createChatCompletion({
            model: "",
            messages: [
                { "role": "user", content: prompt }
            ],
            max_tokens: 2000,
            temperature: 0.9
        });

        //console.log(resp.data.choices[0].message.content);

        const result = resp.data.choices[0].message.content;

        //console.log(result);
        return result;
    } catch (e) {
        console.log(e.response.data);
        return null;
    }
}

export const handler = async (event) => {
    try {
        const surveyReault = JSON.stringify(JSON.parse(event.body).surveyResult);

        const resp = await main(surveyReault);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*", // Or the specific origin you want to allow
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: resp
        };
    } catch (e) {
        console.log(e);
    }
};