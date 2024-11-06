import Image from 'next/image';

const FlexCardComp = (props) => {
  
  if(!props.obj) return <div>No Data!</div>
  

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {props.obj.renderDatas.map((card, index) => (
          <div key={index} className="bg-white w-[30%] p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transform transition duration-300">
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={300}
              height={200}
              className="rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-center mb-4">{card.description}</p>
            <a
              href={card.buttonLink}
              className="inline-block px-4 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-purple-600 transition duration-300"
            >
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexCardComp;
