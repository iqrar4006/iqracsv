import React, { useContext, useState } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { parse } from 'papaparse';
import UserContext from '../context/UserContext';
import { ClipLoader } from 'react-spinners';



const Upload_middle = () => {
  const { data, setData } = useContext(UserContext)
  const [partialData, setPartialData] = useState(null)
  const [csvFileName, setCsvFileName] = useState('')
  const [loading, setLoading] = useState(false)

  // console.log('data',data)

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const text = await readFileAsync(file);
      let result = parse(text, { header: true })
      setCsvFileName(file.name)
      setPartialData(result.data)
    }
  }

  const handleUploadButton = () => {
    // console.log('upload')
    if (!data && partialData) {
      setLoading(true)
      setTimeout(() => {
        setData(partialData)
        setLoading(false)
      }, 1000)
    }


  }


  return (
    <>
      <div className='w-full py-3 flex flex-col items-center justify-center'>
        <div className='w-full pl-16 font-mono text-2xl font-bold mb-2 md:hidden'>
          Upload CSV
        </div>
        <div className='w-[85%] md:w-[75%]  bg-white border border-gray-300 rounded-xl  p-2'>
          <div
            className='flex flex-col items-center justify-center border-2 border-dotted rounded-md p-5'
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDrop={async (event) => {
              event.preventDefault();
              const file = event.dataTransfer.files[0];

              if (file) {
                const text = await readFileAsync(file);
                let result = parse(text, { header: true })
                setCsvFileName(file.name)
                setPartialData(result.data)
              }
            }}
          >
            <div>
              <PiMicrosoftExcelLogoFill style={{ color: '#166534' }} size={42} />
            </div>
            <div>
              {csvFileName ? (
                <div className='flex flex-col'>
                  {csvFileName}
                  <button className='text-red-600	' onClick={() => {
                    setData(null)
                    setCsvFileName('')
                    setPartialData(null)
                  }
                  }>Remove</button>
                </div>
              ) : (
                <>
                  <div className='hidden md:block'>
                    Drop your excel sheet here or{' '}
                    <label className='text-[#286DE0] hover:text-[#4749cc] cursor-pointer'>
                      browse
                      <input type="file" accept='.csv' onChange={handleFileUpload} className='hidden' />
                    </label>
                  </div>
                  <div className='block md:hidden'>
                    Upload your excel sheet{' '}
                    <label className='text-[#286DE0] hover:text-[#4749cc] cursor-pointer'>
                      here
                      <input type="file" accept='.csv' onChange={handleFileUpload} className='hidden' />
                    </label>
                  </div>

                </>
              )}
            </div>

          </div>


          <div className="w-full flex items-center mt-2">
            <p className={`w-full flex items-center justify-center font-mono text-xl font-bold ${data ? 'bg-[#9294e6]' : 'bg-[#5C5EEE] hover:bg-[#4749cc]'} rounded-md text-white p-2 cursor-pointer`} onClick={handleUploadButton}>

              {loading ? <ClipLoader color="#FFFFFF" size={28} /> :
                <>
                  <MdOutlineFileUpload className="mr-2" /> Upload
                </>
              }




            </p>
          </div>

        </div>
      </div>


    </>
  )
}

export default Upload_middle




