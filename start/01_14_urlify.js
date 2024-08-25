// Write your code here
const convertToUrl = (blogTitle) => {
  let url = blogTitle;

  // remove punctuation
  // trim
  // lowercase
  // replace spaces with hyphens.
  return (
    url
      .trim()
      .replace([" "], "-")
      .toLowerCase()

      //  .replace(/[!@£#$%^&*()\]\\/]/g, "");
      .replace(/[^a-z0-9-]/g, "")
  );
};

const title = "chris-LearNing javacsript]!@£#$%^&*()]\\/ ";
const url = convertToUrl(title);
console.log(title + " as url is: " + url);
