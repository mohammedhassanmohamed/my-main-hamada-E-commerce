import Carousel from 'react-bootstrap/Carousel';
import './Sliderbar.css'
import { useSelector } from 'react-redux';


const Sliderbar = () => {
      const itemList = useSelector((state) => state.items);

    return (

        <div className='allslider'>
        <Carousel className='slider' slide={false}>
            {itemList?.map((item,index)=>
            <Carousel.Item key={index}>
                <img src={item.image} alt='slider1' width={'730px'} height={'410px'} />
                <div>
               <Carousel.Caption>
                    <h3 id='colortext'>{item.category}</h3>
                    <p id='colortext'>{item.title}</p>
                    <p id='colortext'>{item.price}</p>
             
             
                </Carousel.Caption>
                </div> 
            </Carousel.Item>
            )
}
           
        </Carousel>
        </div>
    );
}

export default Sliderbar;