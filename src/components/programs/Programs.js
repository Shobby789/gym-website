import './Programs.css'
import img1 from "./images/1.png";
import dumbell from "./images/dumbell.png";

export default function Programs() {
  return (
    <>
    <div className="programs">
        <h3 className='text-dark'>choose <span id='p'>Programs</span></h3>
        <img src={img1} alt="menu not found" className='menuIcon'/>
        <p>
            Training Studio is free CSS template for gyms and fitness centers. You are <br/>allowed to use this layout for your business website.
        </p>

        
        <div className='features d-flex justify-content-between flex-direction-column'> 
            <div class="d-flex d1">
                <div class="flex-shrink-0 border border-primary myImg">
                    <img src={dumbell} alt="..."/>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Basic Fitness</h5>
                    <p>Please do not re-distribute this template ZIP file on any <br />template collection website. This is not allowed.</p>
                </div>
            </div>
            
            <div class="d-flex d1 px-5 b2">
                <div class="flex-shrink-0 border border-primary myImg">
                    <img src={dumbell} alt="..."/>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Basic Fitness</h5>
                    <p>You may want to browse through Digital Marketing or<br /> Corporate HTML CSS templates on our website.</p>
                </div>
            </div>
        </div>

        <div className='features d-flex justify-content-between flex-direction-column'>
            <div class="d-flex d1">
                {/* this dumbell box and text with it */}
                <div class="flex-shrink-0 border border-primary myImg">
                    <img src={dumbell} alt="..."/>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Basic Fitness</h5>
                    <p>Please do not re-distribute this template ZIP file on any <br />template collection website. This is not allowed.</p>
                </div>
            </div>

            <div class="d-flex d1 px-5 b2">
                {/* this dumbell box and text with it */}
                <div class="flex-shrink-0 border border-primary myImg">
                    <img src={dumbell} alt="..."/>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Basic Fitness</h5>
                    <p>Please do not re-distribute this template ZIP file on any <br />template collection website. This is not allowed.</p>
                </div>
            </div>
        </div>

        <div className='features d-flex justify-content-between flex-direction-column'>
            <div class="d-flex d1">
                {/* this dumbell box and text with it */}
                <div class="flex-shrink-0 border border-primary myImg">
                    <img src={dumbell} alt="..."/>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Basic Fitness</h5>
                    <p>Please do not re-distribute this template ZIP file on any <br />template collection website. This is not allowed.</p>
                </div>
            </div>

            <div class="d-flex d1 px-5 b2">
                {/* this dumbell box and text with it */}
                <div class="flex-shrink-0 border border-primary myImg">
                    <img src={dumbell} alt="..."/>
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Basic Fitness</h5>
                    <p>Please do not re-distribute this template ZIP file on any <br />template collection website. This is not allowed.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
