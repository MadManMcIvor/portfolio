
function SkillElement({icon, text}) {
  return (
    <>
        <div className='text-7xl text-white bg-gradient-to-r from-emerald-600 to-sky-600 inline-block px-2 py-1 m-2 text-center'>
        {icon}
        <h3 className='text-lg'>{text}</h3>
      </div>
    </>
    )
}

export default SkillElement
