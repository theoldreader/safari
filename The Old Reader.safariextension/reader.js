function getPageTitle(messageEvent) {
  if (messageEvent.name === "getPageTitle") {
    safari.self.tab.dispatchMessage("sendPageTitle", document.title);
  }
}

safari.self.addEventListener("message", getPageTitle, false);
