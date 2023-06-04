  // 이미지 변경 함수
  function changeImage() {
      var image1 = document.getElementById("image1");
      var image2 = document.getElementById("image2");
      var image3 = document.getElementById("image3");

      // 이미지 상태에 따라 보이기/감추기
      if (image1.style.display === "inline" && image2.style.display === "inline" && image3.style.display === "inline") {
        image1.style.display = "inline";
        image2.style.display = "none";
        image3.style.display = "none";
      } else if (image1.style.display === "inline" && image2.style.display === "none" && image3.style.display === "none") {
        image1.style.display = "none";
        image2.style.display = "inline";
        image3.style.display = "none";
      } else if (image1.style.display === "none" && image2.style.display === "inline" && image3.style.display === "none") {
        image1.style.display = "none";
        image2.style.display = "none";
        image3.style.display = "inline";
      } else {
        image1.style.display = "inline";
        image2.style.display = "inline";
        image3.style.display = "inline";
      }
    }