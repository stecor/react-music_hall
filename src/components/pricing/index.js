import React, { Component } from 'react';
import Button from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {


state={
  prices:[100,150,250],
  positions:['Balcony', 'Medium', 'V.I.P.'],
  desc:[
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to '
  ],
  linkto:[
    'http://sales/balcony',
    'http://sales/medium',
    'http://sales/vip'
  ],
  delay:[500,0,500]
}

showBoxes=()=>(
  this.state.prices.map((box,i)=>(
    <Zoom delay={this.state.delay[i]} key={i}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">
            {this.state.desc[i]}
          </div>
          <div className="pricing_buttons">
            <Button
              text="Purchase"
              bck="#ffa800"
              color="#fff"
              link={this.state.linkto[i]}
              />
          </div>
        </div>
      </div>
    </Zoom>

  ))
)

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
