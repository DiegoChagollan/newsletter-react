import Article from "./components/Article/Article";
import Button from "./components/Button/Button";
import Figure from "./components/Figure/Figure";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Main from "./components/Main/Main";
import Middle from "./components/Middle/Middle";
import Section from "./components/Section/Section";

const BackgroundView = () => {
  return (

      <Main>

        <Article>

          <Section>

            <Middle>

              <Header title = 'Stay updated!' content = 'Join 60,000+ product managers receiving monthly updates on:' />
              <List />

            </Middle>

            <Form>

              <Input /> 
              <Button text = 'Subscribe to monthly newsletter'/>

            </Form>

          </Section>

          <Figure />

        </Article>

      </Main>

  );
};

export default BackgroundView;
