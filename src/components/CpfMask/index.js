import React from "react"
import { FormContainer, TextFieldStyled } from "./styles"

export default function CpfMask(props) {
    
    const cpfMask = (event) => {
        event.preventDefault()
        var temp = event.target.value
        
        document.getElementById("cpf").addEventListener("keydown", 
        function(e) {
            if(e.code == "Backspace" && e.target.value.length === 12) {
            temp = e.target.value.replace("-", "")
            props.setCpf(temp)
            return props.cpf
          } else if (e.code == "Backspace" && (e.target.value.length === 8 || e.target.value.length === 4 )) {
            temp = e.target.value.substr(0, e.target.value.length - 1)
            props.setCpf(temp)
            return props.cpf
        }})
        if(temp.length > 0 && temp.replaceAll(".","").replaceAll("-","").length % 3 === 0) {         
            if(temp.length === 11) {
            temp = temp + "-"
          } else if(temp.length === 3 || temp.length === 7){
            temp = temp + "."
          } 
        }
        props.setCpf(temp)
        console.log(temp, "cpf")
      }

    return (
      <div>
        <TextFieldStyled
        variant="outlined"
        margin="dense"
        size="small"
        label="CPF"
        value={props.cpf}
        type="text"
        id="cpf"
        placeholder="Somente números"
        onChange={(e) => cpfMask(e)}
        required
        style={{ margin: '8px 0' }}
      />
      </div>
    )
}