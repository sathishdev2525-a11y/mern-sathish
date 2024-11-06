import Image from 'next/image';

const GridSection = (props) => {
    
  
  if(!props.obj.renderDatas) return <div>No Data!</div>
  

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Offerings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {props.obj.renderDatas.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-500 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;
