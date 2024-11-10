
const { createContext, useContext, useState } = require("react");

const UseContextData = createContext()

const StoreDatas = ({children})=>{

    const [preview,setPreview] = useState(false)
   

    const [createdSite, setCreatedSite] = useState({});
  

const removeComponent = (index, pageName) => {
  if(pageName === 'navbar'){
    setCreatedSite((prev) => {
        const { navbar, ...rest } = prev;
        return rest;
    });
  }
  else{
    setCreatedSite((prev) => ({
        ...prev,
        [pageName]: prev[pageName].filter((_, i) => i !== index), // Filter out the item by index
    }));
  }
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
  
  const addNav=(navData)=>{
        setCreatedSite((prev) => ({
            ...prev,
            navbar: navData,
        }));
  }
  const getNav=()=>{
    return createdSite && createdSite.navbar ? createdSite.navbar : null
  }

  const addPage=(pageName)=>{

    setCreatedSite((prev) => {
      return {...prev, navbar : {...prev.navbar , renderDatas:{...prev.navbar.renderDatas, links:[...prev.navbar.renderDatas.links,pageName]}}}
    });
   
    
  }

  const recursionFunction=(id, item, children)=>{
      let temp = children.find((val)=>{
          if(val.id === id){
            
            val.children.push({...item, id:Math.random()})
          }
          else{
            if(val.children.length < 1) return;
            
            recursionFunction(id,item, val.children)
          }
      })
  }
  const handleNestedDrop = (id, item, pageName) => {
   
    recursionFunction(id,item, createdSite[pageName])

};

const editSiteName = (siteName) => {
    let temp = {...createdSite.navbar, renderDatas:{
        ...createdSite.navbar.renderDatas, logo:siteName
      }}
  setCreatedSite((prev) => ({...prev, navbar:temp}));
};

  

    return <UseContextData.Provider value={{ addPage,
        handleNestedDrop, 
         createdSite, 
        setSiteDatasToStore,
        preview, setPreview, removeComponent,
        editSiteName,
        addNav,
        getNav
        
    }}>
        {children}
    </UseContextData.Provider>
}

export default StoreDatas;

export const getStoreData =()=>{
    return useContext(UseContextData)
} 