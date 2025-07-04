import Gallery from "../gallery/Gallery";
import Info from "../info/Info";
import Slider from "../slider/Slider";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Gallery />
      <Slider />
      <Info />

<div className="relative w-full h-screen overflow-hidden" style={{
  background: 'radial-gradient(ellipse at center, black 30%, #576bff 100%), linear-gradient(135deg, #576bff 0%, black 50%, #576bff 100%)',
  backgroundBlendMode: 'overlay'
}}>
  {/* Background glow lights */}
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[300px] h-[300px] top-1/2 left-1/4 rounded-full bg-[#576bff] opacity-20 blur-[100px]"></div>
    <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 rounded-full bg-[#bf44cf] opacity-10 blur-[100px]"></div>
  </div>
  {/* Your glassy blurred bar */}
  <div className="relative z-10 w-full h-20 glassy-bar text-white flex items-center justify-center">
    111
  </div>
</div>

    </div>
  );
};

export default Dashboard;






// <div
//   className="relative w-full h-screen overflow-hidden"
//   style={{
//     background: `linear-gradient(
//       to top right,
//       #576bff 0%,    /* blue at bottom left */
//       black 30%,     /* start black at 30% */
//       black 70%,     /* end black at 70% */
//       #576bff 100%   /* blue at top right */
//     )`
//   }}
// >
//   {/* Background glow lights */}
//   <div className="absolute inset-0 z-0">
//     <div className="absolute w-[300px] h-[300px] top-1/2 left-1/4 rounded-full bg-[#576bff] opacity-20 blur-[100px]"></div>
//     <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 rounded-full bg-[#bf44cf] opacity-10 blur-[100px]"></div>
//   </div>

//   {/* Your glassy blurred bar */}
//   <div className="relative z-10 w-full h-20 glassy-bar text-white flex items-center justify-center">
//     111
//   </div>
// </div>