import "../styles/inputcomponent.css"

const InputComponent = ({name,inputType,placeholder,color,space,setter}:
                      {name:string,inputType:string,placeholder:string
                      color?:string,space?:string,setter:any
                      }) => {
  return (
    <div className='inputcomponent-container'>
      <div style={{backgroundColor:color ? color : 'transparent',marginBottom:space}}>
         <p>{name}</p>
      </div>
      <div className="input-container">
        <input className="formatted-input" type={inputType} placeholder={placeholder}
      onChange={(e)=>setter(e.target.value)}
        />
      </div>

    </div>
  )
}

export default InputComponent