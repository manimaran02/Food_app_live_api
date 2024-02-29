const Contact = () =>{
    return(
    <form>
        <div className="w-6/12 p-4 flex justify-center m-auto">
   
        <div className="p-14 rounded-md border border-gray-900/10 ">
          <h1 className="text-center text-3xl font-semibold leading-7 text-gray-900">Contact Us</h1>
        

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Manimaran"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Messages
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  role="textarea"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>

            </div>
            <div className="col-span-full">
           
            <button className="p-2  bg-blue-600 text-white rounded-md">Submit</button>

            </div>
        

           
          </div>
        </div>
        
        </div>
    
      
     
    </form>
  )
}


 

export default Contact;