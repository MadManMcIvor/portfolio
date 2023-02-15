
function ProjectElement({ title, description, link, photo }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
        <div className="p-5">
            <div className="group relative">
                <img className="rounded h-52 w-full object-cover"
                    src={photo} alt={title} />
                <div
                    className="rounded absolute top-0 left-0 w-full px-2 h-full md:h-0 flex flex-col justify-center items-center bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-80 md:opacity-0 group-hover:h-full group-hover:opacity-80 duration-500 text-center">
                    <h1 className="text-2xl underline text-white font-semibold ">{title}</h1>
                    <p className="text-white text-start ">{description}</p>
                </div>
            </div>
        </div>
     </a> 
 )
}

export default ProjectElement