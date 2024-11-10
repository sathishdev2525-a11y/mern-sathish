import { useDrag } from 'react-dnd';

export default function DraggableComponent({ component }) {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'COMPONENT',
        item: () => {
            return { ...component };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <li 
        ref={dragRef}
        className={`flex flex-col cursor-move hover:bg-gray-100 items-center p-2 rounded-md border transition-opacity duration-200 ${
            isDragging ? 'opacity-50' : 'opacity-100'
        } bg-[#fdfbfb] border-[#cd47e7]`}
    >
        <span className="text-[30px] text-[#d885e9]">{component.icon}</span>
        <span className="text-[10px] mt-1 text-[#ca71db]">{component.compName}</span>
    </li>
    
    );
}