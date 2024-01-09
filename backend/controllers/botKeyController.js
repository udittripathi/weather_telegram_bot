const BotKey = require('../models/BotKeyModel');

const botKeyController = async (req, res) => {
    try {
        const { botkey } = req.body;

        if (!botkey) {
            return res.status(400).json({ error: 'Botkey is required in the request body' });
        }

       // console.log('Received botkey:', botkey);

        // Using findOneAndUpdate with upsert and new options
        const updatedBotKey = await BotKey.findOneAndUpdate(
            {},
            { $set: { key: botkey } },
            { upsert: true, new: true }
        );

        return res.status(200).json({ message: 'Botkey updated successfully', data: updatedBotKey });
    } catch (error) {
        console.error('Error in botKeyController:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = botKeyController;
