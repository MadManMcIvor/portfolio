
function SkillElement({icon, text}) {
  return (
    <>
        <div className='bg-gradient-to-r from-emerald-600 to-sky-600 inline-block px-2 py-1 m-2 text-center'>
          <div className="max-w-[100px] mx-auto transform transition duration-500 hover:scale-110 py-1">
            {icon}
          </div>
        <div className="flex justify-center">
          <h3 className=' text-white text-lg text-center'>{text}</h3>
        </div>
      </div>
    </>
    )
}

export default SkillElement
