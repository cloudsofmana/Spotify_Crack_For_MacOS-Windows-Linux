const selectorsToRemove = [
  'button[title="Upgrade to Premium"]',
  'button[title="Effettua l\'upgrade a Premium"]',
  'div[data-testid="test-ref-div"]',
  'a[href="/download"]',
  'a[href="https://www.spotify.com/premium/"]',
];

selectorsToRemove.forEach((selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.style.display = "none";
  });
});

// Example: Modify the page content
const pageTitleElement = document.querySelector("title");
if (pageTitleElement) {
  pageTitleElement.textContent = "Modified Title";
}

// Example: Send a message to the background script
chrome.runtime.sendMessage({ message: "Content script loaded" });
