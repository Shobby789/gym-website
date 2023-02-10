import "./CLasses.css";
import image1 from "../programs/images/1.png";
import image2 from "../imgs/karsten.jpg";

export default function Classes() {
  return (
    <div className="classes">
      <h3 className="text-dark">
        our <span id="p">classes</span>
      </h3>
      <img src={image1} alt="menu not found" className="myMenuIcon" />
      <p>
        Training Studio is free CSS template for gyms and fitness centers. You
        are <br />
        allowed to use this layout for your business website.
      </p>
      <div className="text-uppercase fw-bold leftBox">
        <div className="border w-50 sessions shadow p-3 mb-4 bg-body rounded fs-5 text-danger">
          first training class
        </div>
        <div className="border w-50 sessions shadow p-3 mb-4 bg-body rounded rounded fs-5">
          second training class
        </div>
        <div className="border w-50 sessions shadow p-3 mb-4 bg-body rounded rounded fs-5">
          third training class
        </div>
        <div className="border w-50 sessions shadow p-3 mb-4 bg-body rounded rounded fs-5">
          fourth training class
        </div>
        <div className="border w-50 mt-2 sessions shadow p-3 rounded rounded fs-5 vewSchedule">
          view all schedules
        </div>
      </div>

      <div className="float-right schedule w-50">
        <img src={image2} alt="image not found" className="karsten" />
        <h3>First Training Class</h3>
        <p className="float-left d-inline-block">
          Phasellus convallis mauris sed elementum vulputate. Donec posuere leo
          sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula
          ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam
          nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.
        </p>
        <button className="btn text-uppercase text-white">view schedule</button>
      </div>
    </div>
  );
}
