module.exports.app = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'sample :)'
    })
  };
}