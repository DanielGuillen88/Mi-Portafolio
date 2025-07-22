import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';

export default function App() {

  return (
    <div className="bg-white font-sans text-gray-800 p-5 max-w-screen-lg mx-auto min-h-screen">
        <div className="shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">

          <div className="md:col-span-1">
            <LeftColumn/>
          </div>

          <div className="md:col-span-2">
            <RightColumn/>
          </div>

        </div>
    </div>

  )
}