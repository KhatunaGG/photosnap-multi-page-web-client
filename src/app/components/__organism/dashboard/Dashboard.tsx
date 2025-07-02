import Gallery from "../gallery/Gallery";
import Info from "../info/Info";
import Slider from "../slider/Slider";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <Gallery />
      <Slider />
      <Info />
    </div>
  );
};

export default Dashboard;
