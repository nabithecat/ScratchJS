
const scContainer = document.getElementById('js--sc--container');
const randomImageSrcList = [
  'img/PeterCrown300.png',
  'img/PeterMonocle300.png',
  'img/PeterFez300.png',
  // 다른 이미지 URL을 여기에 추가할 수 있습니다
];

// 랜덤한 이미지 선택 함수
function getRandomImageSrc() {
  const randomIndex = Math.floor(Math.random() * randomImageSrcList.length);
  return randomImageSrcList[randomIndex];
}

 sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: 'img/ScratchCover300.png',
  imageBackgroundSrc: getRandomImageSrc(),
  // htmlBackground: '<div class="inner_html"><p>Subscribe for more Videos</p></div>',
  clearZoneRadius: 30,
  nPoints:50,
  pointSize: 4,
})

sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
//    scInfos.innerHTML = percent + '%';
    console.log(percent)
  })
}).catch((error) => {
  alert(error.message);
});
