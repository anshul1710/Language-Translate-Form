import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
class Button extends React.Component{
   
    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(text)=>text==='english'? 'Submit':'Voorleggen'}
                </LanguageContext.Consumer>
                </button>
        );
    }
    render(){

        // const text=this.context==='english'? 'Submit':'Voorleggen';
        return(
            <ColorContext.Consumer>
            {(color)=>this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}
export default Button;