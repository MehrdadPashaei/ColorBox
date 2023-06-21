import "./style.css"

const Box = ({color}) =>{

    return(
        <div>
            <div className="box" style={{backgroundColor : color}} >

            </div>
        </div>
    )
}

export default Box;