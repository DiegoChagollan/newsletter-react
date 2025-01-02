import {Card, Button, Header, Input, InfoListItem} from '../../components/index';
import coverImage from '../../assets/illustration-sign-up-mobile.svg';

const SubscriptionPrompt = () => {
  return (
      <main className='mainContent'>
        <Card width='888px' height='606px' direction='row'>
          <div className='cardContent-subscription'>
            <div className='middleContent'>
              <Header
              title='Stay updated!'
              description = 'Join 60,000+ product managers receiving monthly updates on:'
              titleFontSize='56px'
              descriptionFontSize='16px'
              descriptionLineHeight='24px' />

              <ul className='list-item-with-icon'>
                <InfoListItem text='Product discovery and building what matters'/>

                <InfoListItem text='Measuring to ensure updates are a success' />

                <InfoListItem text='And much more!' /> 
              </ul>
            </div>
            <div className='shippingContent'>
              <Input />

              <Button text='Subscribe to monthly newsletter' fontSize='16px' height='60px ' />
            </div>
          </div>
          <div className='coverImage' alt='alternativeText'>
            <img src={coverImage}/>
          </div>
        </Card>
      </main>
  );
};

export default SubscriptionPrompt;
