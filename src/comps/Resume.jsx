
function Resume(props) {
    return (
        <button className='bg-gradient-to-r from-emerald-600 to-sky-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-sky-700
        duration-500'>
          {props.children}
        </button>
      )
    }
    

export default Resume