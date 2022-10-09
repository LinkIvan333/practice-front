import * as React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultWrapper, PageWrapper, Text, Title } from './About.styles';
const About = () => {
  const params = useParams();
  const blocks = {
    block1: React.useRef(null),
    block2: React.useRef(null),
    block3: React.useRef(null),
  };

  const scrollToBlock = (block = '') => {
    if (block in blocks) {
      blocks[block].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  React.useEffect(() => {
    scrollToBlock(params.block);
  }, [params]);

  return (
    <PageWrapper>
      <DefaultWrapper>
        <Title>Оплата и доставка</Title>
        <Text ref={blocks.block1}>Информация по оплате и доставке</Text>
      </DefaultWrapper>
      <DefaultWrapper>
        <Title>Контакты</Title>
        <Text ref={blocks.block2}>Информация по оплате и доставке</Text>
      </DefaultWrapper>
      <DefaultWrapper>
        <Title ref={blocks.block3}>О нас</Title>
        <Text>
          Создавая в 2017 году наш канал в Telegram, мы не подозревали, что со
          временем он превратится в самый большой и востребованный ресурс по
          тематике моделизма. Мы не останавливаемся на достигнутом и
          представляем вашему вниманию полноценный интернет-магазин со сборными
          моделями и не только, здесь Вы найдете наши авторские дополнения и
          интересные решения для изготовления масштабных моделей. Вы обязательно
          подберёте для себя то, что возможно станет, или уже стало смыслом всей
          Вашей жизни. Мы-команда моделистов, которые объединились для
          популяризации моделизма, для того, чтоб сделать его еще более
          доступным! Для Вас, ради Вас и нашего хобби! Добро пожаловать в Мир
          Моделизма!
        </Text>
      </DefaultWrapper>
    </PageWrapper>
  );
};

export default About;
