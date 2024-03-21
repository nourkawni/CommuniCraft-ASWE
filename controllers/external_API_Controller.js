
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});

const chatAPI = async (req, res) => {
  const messageChatgpt = req.body.messageChatgpt;
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ "role": "user", "content": messageChatgpt }],
      max_tokens: 100
    });
    console.log(response.choices[0].message.content);
    res.send(response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { chatAPI };

