import React from 'react'


const Location = () => {
  return (
    <div className="location_wrapper">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4494953996!2d-96.76806748444004!3d32.780338880970895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e98942ededf99%3A0x18c5ba88d6e5130d!2sMusic+Hall+at+Fair+Park%2C+909+1st+Ave%2C+Dallas%2C+TX+75210%2C+USA!5e0!3m2!1sen!2sca!4v1545786754173"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen>
        </iframe>

        <div className="location_tag">
          <div>Location</div>
        </div>
    </div>
  )
}

export default Location;
