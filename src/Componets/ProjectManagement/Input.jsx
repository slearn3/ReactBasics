import { forwardRef } from "react"

const Input = forwardRef( function Input({label,textarea, ...props},ref){
    return(
        <div className="form-group">
            <label> {label}  </label>
            {textarea?<textarea ref={ref} className="form-control" {...props}/>:<input ref={ref} className="form-control" {...props}/>}
        </div>
    )
})
export default Input;