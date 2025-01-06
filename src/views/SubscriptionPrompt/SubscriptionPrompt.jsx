import {Card, Button, Header, Input, InfoListItem} from '../../components/index';
import coverImage from '../../assets/illustration-sign-up-mobile.svg';
import {useNavigate} from 'react-router-dom';

const SubscriptionPrompt = () => {
  const navigate = useNavigate();
  const handleSubscribeClick = () => {
    navigate('/success-submit');
  }

  return (
      <main className='mainContent'>
        <Card width='888px' height='606px' direction='row' border='32px'>
          <div className='styleWrapper'>
            <div className='cardContent-subscription'>
              <div className='infoWrapper'>
                <Header
                  title='Stay updated!'
                  description='Join 60,000+ product managers receiving monthly updates on:'
                  titleFontSize='56px'
                  descriptionFontSize='16px'
                  descriptionLineHeight='24px'
                />

                <ul className='list-item-with-icon'>
                  <InfoListItem text='Product discovery and building what matters'/>

                  <InfoListItem text='Measuring to ensure updates are a success' />

                  <InfoListItem text='And much more!' /> 
                </ul>
              </div>
              <div className='shippingContent'>
                <Input />

                <Button text='Subscribe to monthly newsletter' fontSize='16px' height='60px' onClick={handleSubscribeClick} />
              </div>
            </div>
          </div>
          <div className='coverImage'>
            <img src={coverImage} alt='Illustration for subscription'/>
          </div>
        </Card>
      </main>
  );
};

export default SubscriptionPrompt;
