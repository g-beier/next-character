const clipboard = (str: string) => {
  const clipboardItem = new ClipboardItem({
    "text/plain": new Blob([str], { type: "text/plain" }),
  });
  navigator.clipboard
    .write([clipboardItem])
    .then(() => {
      console.log("Copied!", str);
    })
    .catch((err) => {
      console.error("Error! Unable to copy to clipboard", err);
    });
};
export default clipboard;
