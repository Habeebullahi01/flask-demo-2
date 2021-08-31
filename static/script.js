// const imageDiv = document.getElementById("imageDiv");

// const url = "https://picsum.photos/200/300";
// fetch(url).then((res) => {
//   imageDiv.attributes.src = res;
// });

const btn = document.getElementById("getImg");
const pame = document.getElementById("compName");
const img = document.getElementById("compImg");

pame.addEventListener("blur", () => {
  const compoundName = pame.value;
  fetch(
    `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${compoundName}/PNG`
  ).then((res) => {
    if (!res.ok) {
      console.log("Enter vaalid name");
      //   img.setAttribute("hidden", false);
      img.setAttribute("src", "/static/no-image.jfif");
    } else {
      img.setAttribute(
        "src",
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${compoundName}/PNG`
      );
      //   img.setAttribute("hidden", false);
    }
  });
  //   console.log(compoundName);
});
