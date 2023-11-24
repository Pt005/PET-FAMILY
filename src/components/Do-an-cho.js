import React from 'react';

const DogFood = () => (
  <div className="container-fluid" style={{ marginLeft: '471px', width: '1290px', marginTop:'25px' }}>
    <div className="row">
      {[
        { title: 'Thức ăn cho chó con ROYAL CANIN', image: require('/PET-FAMILY-MAIN/src/assets/royal-dog.png'), price: '215.000₫' },
        { title: 'Thức ăn cho chó Poodle ROYAL CANIN', image: require('/PET-FAMILY-MAIN/src/assets/poodle.png'), price: '175.000₫' },
        { title: 'Đồ chơi chó IAMSO', image: require('/PET-FAMILY-MAIN/src/assets/iamso.png'), price: '360.000₫' },
      ].map((cardData, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
            <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
                <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
                  {cardData.title === ''} {cardData.title}
                </a>
              </p>
              <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>
                {cardData.originalPrice && <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>{cardData.originalPrice}</span>}
                {cardData.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>


    <div className="row">
  {[
    { title: 'Đồ ăn cho chó vị thịt cá Big Brush ', image: require('/PET-FAMILY-MAIN/src/assets/big-brush.png'), price: '260.000₫' },
    { title: 'Thức ăn cho chó w/d ', image: require('/PET-FAMILY-MAIN/src/assets/wd.png'), price: '380.000₫' },
    { title: 'Đồ ăn cho chó Dog Chow ', image: require('/PET-FAMILY-MAIN/src/assets/cho-chow.png'), price: '420.000₫' },
  ].map((cardData, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
            <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
              {cardData.title}
            </a>
          </p>
          <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>{cardData.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="row">
  {[
    { title: 'Đồ ăn cho chó Chappi ', image: require('/PET-FAMILY-MAIN/src/assets/chappi.png'), price: '460.000₫' },
    { title: 'Đồ chơi cho chó Wilderness ', image: require('/PET-FAMILY-MAIN/src/assets/cho-soi.png'), price: '360.000₫' },
    { title: 'Thức ăn cho chó vị lúa mạch Established ', image: require('/PET-FAMILY-MAIN/src/assets/lua-mach.png'), price: '320.000₫' },
  ].map((cardData, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card" style={{ width: '40rem', height: '40rem', position: 'relative' }}>
        <div className="d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={cardData.image} className="card-img-top" alt="..." style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text mt-auto text-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: 'none', transition: 'color 0.3s' }}>
            <a href={`/balo-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`} title={`Balo ${cardData.title}`} className="d-block" style={{ color: 'black', textDecoration: 'none' }}>
              {cardData.title}
            </a>
          </p>
          <p style={{ fontSize: '2.5rem', color: 'black', textAlign: 'center' }}>{cardData.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
);

export default DogFood;
