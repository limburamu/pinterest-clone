import React from 'react'
import "../styles/PinStyles.css"

// function upload_img(event, setPinImage) {
//     if(event.target.files && event.target.files[0]) {
//         if(/image\/*/.test(event.target.files[0].type)) {
//         const reader = new FileReader();

//         reader.onload = function() {
//             setPinImage(reader.result);
//         }
//         reader.readAsDataURL(event.target.files[0]);
//         }
//     }
// }

function Pin(props) {
    console.log('pin props is: ', props);
    // const [pinState, setPinState] = useState();
    return (
        <div>
            {/* <input onChange={event => upload_img(event, setPinImage)} type="file" name="picture" id="picture" value="" /> */}

            <div className='card'>
                <div className='pinTitle'></div>

                <div className='pinModal'>
                    <div className='modalHead'>
                        <div className='saveCard'>Save</div>
                    </div>

                    <div className='modalFoot'>
                        <div className='destination'>
                            <div className='pint_mock_icon_container'>
                                <img src={require('../images/arrow.png')} alt='destination' className='pint_mock_icon' />
                            </div>
                            <span>Eatery</span>
                        </div>
                        <div className='pint_mock_icon_container'>
                            <img src={require('../images/share.png')} alt='fis' className='pint_mock_icon' />
                        </div>

                        <div className='pint_mock_icon_container'>
                            <img src={require('../images/dots.jpg')} alt='nar' className='pint_mock_icon' />
                        </div>
                    </div>
                </div>
                <div className='pin_Image'>
                    This is pin
                    <img src={props.img.imgUrl} alt={props.altText} />
                </div>
            </div>
            {/* This is pin
            <img src={props.imgUrl} alt='pinImage' /> */}
        </div>
    )
}

export default Pin
