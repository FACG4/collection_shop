// .classList.remove('disable');
const userInfo = selector("userInfo")
userInfo.addEventListener('click' , (e)=>{
  const disabledDiv = selector("disabledDiv")
  disabledDiv.classList.remove('disable')
})
