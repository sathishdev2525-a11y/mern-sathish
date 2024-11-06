
const { createContext, useContext, useState } = require("react");

const UseContextData = createContext()

const StoreDatas = ({children})=>{

    const [preview,setPreview] = useState(false)
   

    const [createdSite, setCreatedSite] = useState({});
  

const removeComponent = (index, pageName) => {
  
  setCreatedSite((prev) => ({
      ...prev,
      [pageName]: prev[pageName].filter((_, i) => i !== index), // Filter out the item by index
  }));
};




    const setSiteDatasToStore = (pageName, data) => {
      
      let temp = createdSite && createdSite[pageName] 
          ? [...createdSite[pageName], data]
          : [data];
      setCreatedSite((prev) => ({
          ...prev,
          [pageName]: temp,
      }));
  };
  

  const addPage=(pageName)=>{
    let temp = componentsData.find((val)=>val.compName === 'navbar')
    temp.renderDatas.links.push(pageName)
  }

  const recursionFunction=(id, item, children)=>{
      let temp = children.find((val)=>{
        console.log(val.id, id)
          if(val.id === id){
            debugger
            val.children.push({...item, id:Math.random()})
          }
          else{
            if(val.children.length < 1) return;
            debugger
            recursionFunction(id,item, val.children)
          }
      })
  }
  const handleNestedDrop = (id, item, pageName) => {
    console.log(createdSite[pageName])
    debugger
    recursionFunction(id,item, createdSite[pageName])

};

  

    return <UseContextData.Provider value={{ addPage,
        handleNestedDrop, 
         createdSite, 
        setSiteDatasToStore,
        preview, setPreview, removeComponent
    }}>
        {children}
    </UseContextData.Provider>
}

export default StoreDatas;

export const getStoreData =()=>{
    return useContext(UseContextData)
} 