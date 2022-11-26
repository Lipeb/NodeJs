const HttpError = require('../error/http/HttpError');

function ErrorHandler(err, req, res, next) {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({
      message: err.name,
      ...err.body
    });
    next();
  } else {
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}

module.exports = ErrorHandler;
