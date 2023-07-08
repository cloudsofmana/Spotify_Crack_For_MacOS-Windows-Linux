chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    const contentTypeHeader = details.responseHeaders.find(
      (header) => header.name.toLowerCase() === "content-type"
    );

    if (contentTypeHeader && contentTypeHeader.value.includes("mp3")) {
      return {
        redirectUrl:
          "https://raw.githubusercontent.com/texnikru/blank-mp3s/master/1sec.mp3",
      };
    }
  },
  {
    urls: [
      "*://*.audio-akp-quic-spotify-com.akamaized.net/*",
      "*://*.audio-fa.scdn.co/*",
      "*://creativeservice-production.scdn.co/*",
    ],
    types: ["xmlhttprequest"],
  },
  ["blocking", "responseHeaders"]
);
