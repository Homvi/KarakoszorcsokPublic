



function importAll(r) {
    return r.keys().map(r);
  }
  
  const bigImagesArr = importAll(
    require.context("../img/galleryContent/picsFromAroundBig", false, /\.(png|jpe?g|svg)$/)
  );
  const smallImagesArr = importAll(
    require.context("../img/galleryContent/picsFromAroundSmall", false, /\.(png|jpe?g|svg)$/)
  );
  const OldImagesArr = importAll(
    require.context("../img/galleryContent/oldPictures", false, /\.(png|jpe?g|svg)$/)
  );
  
  const imagesArrayCreator = (oldArr, newArr) => {
    for (let i = 0; i < oldArr.length; i++) {
      const element = oldArr[i].default;
      let myOnePic = {
        original: element,
        thumbnail: element,
      };
      newArr.push(myOnePic);
    }
  };
  
  
  export const imagesBig = [];
  export const imagesSmall = [];
  export const OldImages = [];
  
  
  imagesArrayCreator(bigImagesArr, imagesBig);
  imagesArrayCreator(smallImagesArr,imagesSmall);
  imagesArrayCreator(OldImagesArr, OldImages);