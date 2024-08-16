# Link Style Inline or Reference

Text [url](https://example.com) text

Text ![url](https://example.com) text

Text [url](<https://example.com>) text

Text ![url](<https://example.com>) text

Text [url](https://example.com "title") text

Text ![url](https://example.com "title") text

Text [url](https://example.com
"title") text

Text ![url](https://example.com
"title") text

Text [text][url] text

Text ![text][url] text

Text [url][] text

Text ![url][] text

Text [url] text

Text ![url] text

Text <https://example.com> text {MD054}

[url]: https://example.com "title"

[undefined]

Text [url](https://example.com/embedded\3backslash) text

Text [url](https://example.com/backslash\[escape) text

Text [embedded-backslash] text

Text [backslash-escape] text

Text <https://example.com/embedded\3backslash> text {MD054}

Text <https://example.com/backslash[no-escape> text {MD054}

[embedded-backslash]: https://example.com/embedded\3backslash

[backslash-escape]: https://example.com/backslash\[escape

Text [url](<https://example.com/embedded space>) text

Text [url](<https://example.com/embedded)paren>) text

Text [url](https://example.com/\(parens\)) text

Text [url](https://example.com/pa(re(ns))) text

Text [url](relative/path) text

Text [url](#fragment) text

Text <https://example.com/pa)re(ns> text {MD054}

Text [url](https://example.com/an>g<le>) text

<!-- markdownlint-configure-file {
  "link-fragments": false,
  "link-image-style": {
    "autolink": false
  }
} -->
