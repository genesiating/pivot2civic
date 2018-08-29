function toggle(question) {
  let parentQ = document.getElementsByClassName("faq")[question];
  let childQ = document.getElementsByClassName("ans")[question];

  let ansState = childQ.style.display;

  if (ansState === "none") {
    childQ.style.display = "inline-block";
  } else {
    childQ.style.display = "none";
  }
}
