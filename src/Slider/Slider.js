import React, {useState} from 'react'
import './Slider.css'


const Slider = (props) => {


    let images = [
        {url: 'https://lh3.googleusercontent.com/upVaaE4cnUBQCPV5vEgNqmjtPb8CsDQzfP-UV3hXZEFzjyAFJnUIltPUDeo5Z5XJXkgz87SzpFOZX_YpbsUyyJAkKQi7zApg60uHqA=w1064-v0'},
        {url: 'https://designstil.info/wp-content/uploads/2019/03/Goluboj-tsvet-sten-1.png'},
        {url: 'https://impicode.pl/wp-content/uploads/2019/09/przyklady-aplikacji-napisanych-w-react-native-1.jpg'}
    ]


    const [current, setCurrent] = useState(0);
    const length = images.length;


    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }


    let buttonElement = images
        .map(b => <button className='navigationButton'>0</button>);

    let imageElement = images.map((img, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'}
            key={index}>
                {index === current && (<img src={img.url}/>)}
            </div>
        )
    })


    return (
        <div>
            <div className='slider'>
                <button className='prev' onClick={prev}> 0 </button>
                {imageElement}
                <button className='next' onClick={next}> > </button>
            </div>
            <div className='navigation'>
                {buttonElement}
            </div>
        </div>
    );
}

export default Slider