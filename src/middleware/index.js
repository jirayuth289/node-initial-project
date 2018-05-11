class Middleware {
  logsBody(req, res, next) {
    console.log('Body', req.body, 'Query', req.query, 'Params', req.params);
    next();
  }

  endpointNotfound(req, res, next) {
    res.status(404).json({ error: "Endpoint not found" });
    next();
  }

  handleError(error, req, res, next) {
    console.log(error.err);
    const message =
      error.status === 400
        ? "เกิดข้อผิดพลาดบางอย่างไม่สามารถดำเนินการได้ กรุณาลองใหม่ภายหลัง"
        : `Unexpected error: ${error}`;
    res.status(error.status).send({
      message,
      success: false
    });

    // if (process.env.NODE_ENV === "production") {
    //   return res.status(500).json({ error: `Unexpected error: ${error}` });
    // }

    // next(error);
  }
}
export default new Middleware();
