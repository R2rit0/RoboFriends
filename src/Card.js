import react from 'react';

class Card extends react.Component{
    render(){
        return(
            <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='Robot Image' src={`https://robohash.org/${this.props.id}`}/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;