import React, { useContext } from 'react'
import { ImageContext } from '../../misc/useContext';
import "../../scss/handlebtn.scss"
interface DownProps{
    chosenIdx : number[]
}
function DownloadBtn({chosenIdx}:DownProps) {
    const data = useContext(ImageContext).renderings;

    const setUrl = (url:string)=>{
      return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
    }

    const downloadImage = () => {
        chosenIdx.map(async i=> {
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = await setUrl(data[i]._id);
            a.download = `${i}`
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        console.log(chosenIdx);
        };
  return (
    <>
        <button className='down-btn' type='button' onClick={downloadImage}>다운로드</button>
    </>
  )
}

export default DownloadBtn