import React, {useState} from 'react'
import './Slider.css'
import Data from '../slider.json'

const Slider = () => {
    const [current, setCurrent] = useState(0);

    const length = Data.length;

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    let buttonElement = Data
        .map(b => <button className='navigationButton'>0</button>);

    let imageElement = Data.map((img, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'}
                 key={index}>
                {index === current && (<div>
                    <img src={img.url} alt='text'/>
                    <div className='text'>
                        <h2>{img.txt}</h2>
                        <p className='news'>{img.news}</p>
                    </div>
                    </div>
                    )}
                </div>);
    })


                return (
                <div>
                    <div>
                    <button className='prev' onClick={prev}> &lt; </button>
                    <button className='next' onClick={next}> &gt;</button>
                    <div className='slider'>
                        {imageElement}
                    </div>
                    </div>
                    <div className='navigation'>
                        {buttonElement}
                    </div>
                </div>
                )}


                export default Slider