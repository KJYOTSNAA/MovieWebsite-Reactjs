import React, { Component } from 'react';
import styles from  './style.module.css'
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api : props,
            overlay : false 
        }
    }

    

    render() { 
        let {Title,Poster} = this.state.api.props
        const toggleOverlay =()=> {
            this.state.overlay ? this.setState({overlay : false}) : this.setState({overlay : true})

        }
        return(
            

            <div onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay} className={styles.Card}>
                <img src={Poster} alt={Title + "png"}/>
                {this.state.overlay ? <div className={styles.Overlay}>
                    <h3>{Title}</h3>
                </div> : null}
            </div>
        );
    }
}
 
export default Card;
