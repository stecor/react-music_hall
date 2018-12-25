import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {

    state={
      discountStart: 0,
      discountEnd: 30,
    }

    percentage=()=>{
      if(this.state.discountStart < this.state.discountEnd){
          this.setState({
          discountStart:this.state.discountStart + 1
          })
      }
    }


    componentDidUpdate=()=> {
      setTimeout(()=>{
        this.percentage()
      },30)
    }

  render() {
    return (
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <Fade onReveal={()=>this.percentage()}>
              <div className="discount_percentage">
                <span>{this.state.discountStart}%</span>
                <span>OFF</span>
              </div>
            </Fade>

            <Slide right>
              <div className="discount_description">
                <h3>Purchase tickets before 20th JUNE</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div>
                  <MyButton
                    text="Purchase tickets"
                    bck="#ffa800"
                    color="#fff"
                    link="http://google.com"/>
                </div>
              </div>
            </Slide>

          </div>
        </div>
    );
  }

}

export default Discount;
