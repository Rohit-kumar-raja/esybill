import React, { useEffect, useState } from "react"


const AddImage = () => {
  const [file, setFile] = useState("")
  const [imageText, setImageText]  = useState("")
  const [disabled, setDisabled] = useState(true)
  const handleFile = (e) => {
    if(e.target.files)
      setFile(e.target.files[0])
  }
  useEffect(()=>{
    console.log(file)
  },[file])

  useEffect(()=>{
    if(imageText !== ""){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  },[imageText])
  const handleUpload = (e) => {
    e.preventDefault()
    alert(URL.createObjectURL(file))
    const formData = new FormData()
    formData.append("file", file)
    console.log(file)
  }

  const removeSelectedImage = () => {
    setFile("") 
  }

  const saveInfo = () => {

  }
  return (
    <>
     

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-2 py-3 md:px-6">
        {/* {
              file?.map(category => (
                <div>
                  <CategoryCardComponent 
                    category={category} 
                    setEdit={setEdit}
                    deletePopup={deletePopup} setDeletePopup={setDeletePopup}
                    setIndCategory={setIndCategory}/>
                </div>
              ))
            }*/}
        <div>
          <form onSubmit={handleUpload}>
            <input type="file" name="file" onChange={handleFile} accept="image/*" defaultValue={file} />
            <button type="submit" className="font-normal  bg-green-600 text-[white] flex items-center 
    rounded-md py-2 my-6 text-[14px] px-3 mr-auto
    cursor-pointer opacity-100">Upload</button>
          </form>
          { 
            file && (
              <>
                <div className="mt-5 flex flex-col">
                  <img src={URL.createObjectURL(file)} alt="thumb" className="w-52 h-52" />  
                  <input type="text" className="appearance-none block  border-2 border-[#DDDDDD]
            focus:shadow-lg focus:shadow-[#800080]-500/50 focus:border-2 focus:border-[#800080]
             w-full h-[42px] my-4
             rounded-md  px-4 mb-3 leading-tight focus:outline-none" placeholder="Enter text.." 
                  value={imageText} onChange={(e) => setImageText(e.target.value)}
                  />
                  <div className="flex gap-3">
                    <button onClick={saveInfo} type='button' 
                      className={`font-normal   text-[white] 
                  flex items-center rounded-md py-2 my-6 text-[14px] px-3 
                  opacity-100
                  ${disabled ? "cursor-not-allowed bg-green-400" : "cursor-pointer bg-green-600"}
                  `}
                      disabled={disabled}>Save</button>
                    <button onClick={removeSelectedImage} className="font-normal 
                   bg-red-600 text-[white] flex items-center 
                    rounded-md py-2 my-6 text-[14px] px-3 
                    cursor-pointer opacity-100">Remove</button>
                  </div>
                  
                </div>
              </> 
            )
          }
        </div>
        
      </div>


    </>
  )
}

export default AddImage