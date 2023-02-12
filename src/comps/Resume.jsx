
function Resume(props) {
    return (
        <button className='bg-teal-800 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-cyan-600
        duration-500'>
          {props.children}
        </button>
      )
    }
    

export default Resume