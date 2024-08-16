// @ts-check

"use strict";

const { forEachLine, getLineMetadata } = require("../../helpers");

/** @type import("../../lib/markdownlint").Rule */
module.exports = {
  "names": [ "every-n-lines" ],
  "description": "Rule that reports an error every N lines",
  "tags": [ "test" ],
  "parser": "markdownit",
  "function": (params, onError) => {
    const n = params.config.n || 2;
    forEachLine(getLineMetadata(params), (line, lineIndex) => {
      const lineNumber = lineIndex + 1;
      if ((lineNumber % n) === 0) {
        onError({
          "lineNumber": lineNumber,
          "detail": "Line number " + lineNumber
        });
      }
    });
  }
};
