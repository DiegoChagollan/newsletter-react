import {Card, Button, Header} from '../../components/index';
import successList from '../../assets/icon-list.svg'
import {useNavigate} from 'react-router-dom';

const SuccessSubmit = () => {
  const navigate = useNavigate();
  const handleSuccessClick = () => {
    navigate('/');
  }
  
  return (
    <main className='mainContent'>
        <Card width='366px' height='380px' direction='column' border='32px'>
            <div className='cardContent-success'>
                <div className='infoSuccessWrapper'>
                    <figure className='successList' alt='alternativeText'>
                        <img src={successList}/>
                    </figure>

                    <Header
                        title='Thanks for subscribing!'
                        description = 'A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.' 
                        titleFontSize='40px'
                        titleLineHeight='44px'
                        descriptionFontSize='13px'
                        descriptionLineHeight='20px' 
                    />
                </div>

                <Button
                text='Dismiss message'
                height='48px'
                fontSize='16px'
                onClick={handleSuccessClick}/>
            </div>
        </Card>
    </main>
  );
};

export default SuccessSubmit;
