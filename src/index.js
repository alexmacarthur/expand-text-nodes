const expandTextNodes = (element) => {
  [...element.childNodes].forEach((child) => {
    if (child.nodeValue) {
      child.nodeValue.split(/.*?/u).forEach((c) => {
        child.parentNode.insertBefore(document.createTextNode(c), child);
      });

      child.remove();
      return;
    }

    expandTextNodes(child);
  });
};

export default expandTextNodes;
