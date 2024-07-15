
import img1 from '../../../assets/images/banner/2.jpg'
import img2 from '../../../assets/images/banner/3.jpg'
import img3 from '../../../assets/images/banner/4.jpg'
import img4 from '../../../assets/images/banner/5.jpg'
// import img5 from '../../../assets/images/banner/1.jpg'
// import img6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full rounded-xl"  />
    <div className="absolute items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full  right-5 flex ">
    <div className='text-white w-1/3 space-y-2 pl-3'>
      <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
   
    <button className="btn btn-outline mr-5 btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
 
    </div>
    </div>
    
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide4" className="btn mr-5 btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>



  </div>
 {/* img2 */}
  
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full" />
       <div className="absolute items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full  right-5 flex ">
    <div className='text-white w-1/3 space-y-2 pl-3'>
      <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
   
    <button className="btn btn-outline mr-5 btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
 
    </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn mr-5 btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>



  </div>
 {/* img3 */}
  
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full " />
    <div className="absolute items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full  right-5 flex ">
    <div className='text-white w-1/3 space-y-2 pl-3'>
      <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
   
    <button className="btn btn-outline mr-5 btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
 
    </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn mr-5 btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>



  </div>
 {/* img2 */}
  
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
       <div className="absolute items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full  right-5 flex ">
    <div className='text-white w-1/3 space-y-2 pl-3'>
      <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
   
    <button className="btn btn-outline mr-5 btn-primary">Primary</button>
    <button className="btn btn-outline btn-secondary">Secondary</button>
 
    </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn mr-5 btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>



  </div>
 {/* img2 */}
  
</div>
    );
};

export default Banner;