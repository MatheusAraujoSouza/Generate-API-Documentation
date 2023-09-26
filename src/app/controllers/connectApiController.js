const connectionAPiService = require('../services/connectionAPiService');

// GET /connect-to-other-api
const getConnection = async (req, res) => {
  try {
    const generatedDocumentation = await connectionAPiService.generateDocumentation();

    res.json({ documentation: generatedDocumentation });
  } catch (error) {
    console.error('Error connecting to the other API:', error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while connecting to the other API.' });
  }
};

module.exports = {
  getConnection,
};
