import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './CardAnimation.css';
import './styles.css';

const CardComponent = ({ logo, partner, title, listItems = [], onJoin, onCertify }) => (
  <Container className="mt-5">
    <Card className="card shadow-lg">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <img src={logo} alt="Logo" className="logo-img" />
          <img src={partner} alt="Partner" className="partner-img" />
        </div>
        <Card.Title className="mt-4 text-center">{title}</Card.Title>
        {listItems.length > 0 && (
          <Card.Text className="mt-3">
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card.Text>
        )}
        <div className="text-center mt-4">
          <Button variant="warning" size="lg" onClick={onJoin}>
            Join us
          </Button>
          <Button variant="info" size="lg" onClick={onCertify}>
            Certified
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Container>
);

const Why = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      logo: 'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/451584926_798028342482216_9187260991167753030_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OgYn7n14GiUQ7kNvgGhULMc&_nc_zt=23&_nc_ht=scontent.ftun15-1.fna&_nc_gid=AdMex0u46tZ6x5h6vZ_kXDT&oh=00_AYA165lRzVtTxlxgM-T4XrKtI06KBIUlJGkcCxAkbTfglw&oe=677C7C48',
      partner: 'https://cdn-icons-png.freepik.com/256/6171/6171939.png',
      title: 'Soft Skills Training',
      listItems: ['Professional CV Development', 'Interview Preparation', 'LinkedIn', 'Strategic Planning'],
    },
    {
      logo: 'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/451584926_798028342482216_9187260991167753030_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OgYn7n14GiUQ7kNvgGhULMc&_nc_zt=23&_nc_ht=scontent.ftun15-1.fna&_nc_gid=AdMex0u46tZ6x5h6vZ_kXDT&oh=00_AYA165lRzVtTxlxgM-T4XrKtI06KBIUlJGkcCxAkbTfglw&oe=677C7C48',
      partner: 'https://www.svgrepo.com/show/343854/digital-marketing-promotion-advertising.svg',
      title: 'Digital Marketing Training',
      listItems: [],
    },
    {
      logo: 'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/451584926_798028342482216_9187260991167753030_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OgYn7n14GiUQ7kNvgGhULMc&_nc_zt=23&_nc_ht=scontent.ftun15-1.fna&_nc_gid=AdMex0u46tZ6x5h6vZ_kXDT&oh=00_AYA165lRzVtTxlxgM-T4XrKtI06KBIUlJGkcCxAkbTfglw&oe=677C7C48',
      partner: 'https://cdn-icons-png.flaticon.com/512/912/912125.png',
      title: 'Formation E-mail Professionnel',
      listItems: [],
    },
    {
      logo: 'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/451584926_798028342482216_9187260991167753030_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OgYn7n14GiUQ7kNvgGhULMc&_nc_zt=23&_nc_ht=scontent.ftun15-1.fna&_nc_gid=AdMex0u46tZ6x5h6vZ_kXDT&oh=00_AYA165lRzVtTxlxgM-T4XrKtI06KBIUlJGkcCxAkbTfglw&oe=677C7C48',
      partner: 'https://cdn-icons-png.flaticon.com/512/3281/3281294.png',
      title: 'Formation en Management Stratégique',
      listItems: [],
    },
  ];

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % cards.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <>
      <style>{`
      .hero-title {
        font-size: 2.5rem;
        font-weight: bold;
      }
    .logo-img, .partner-img {
      max-width: 100%;
      object-fit: contain;
    }
        .card {
          border-radius: 10px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          margin-left:-70px;
          margin-top:-50px;
        }
        .card:hover {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(65, 112, 148, 0.78);
        }
        @media screen and (max-width: 767px) and (min-width:575) {
        .card {
          margin-left: 0;
          transform: none; 
        }
        }
        .logo-img {
          height: 100px;
        }
        .partner-img {
          height: 70px;
        }
      `}</style>
      <div>
        <h1 className="hero-title text-center cursor typewriter-animation">Why Us</h1>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <CardComponent
                {...cards[currentCard]}
                onJoin={() => alert('Join Us clicked!')}
                onCertify={() => alert('Certified clicked!')}
              />
              <div className="mt-3 text-center">
                <button className="btn btn-secondary" onClick={prevCard}>
                  Previous
                </button>
                <button className="btn btn-primary ml-2" onClick={nextCard}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
