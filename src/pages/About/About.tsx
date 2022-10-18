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
    <>
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
          тематике моделизма. Мы - это группа моделистов из Москвы, стремимся
          сделать хобби более доступным и интересным для всех и каждого. Не
          останавливаясь на достигнутом представляем вашему вниманию полноценный
          интернет-магазин. Здесь вы обязательно найдете всё необходимое для
          нашего хобби.
          <br /> Стремление к совершенству.
          <br /> Ассортимент магазина &#34;МОДЕЛЬКА&#34; будет постоянно
          расширяться. Каждая позиция в каталоге является оригинальной. Наши
          цены это результат прямых переговоров с поставщиками, выбор лучшей
          логистики. Мы изучаем каждый каждый инструмент и расходный материал
          перед продажей. Мы не жалеем усилий, чтобы получить лучшее от мира
          моделизма. Мы постоянно стараемся превзойти ожидания моделистов. Наше
          стремление к совершенству бесконечно.
          <br /> Наша миссия
          <br />
          Мы стремимся зарекомендовать себя как один из лучших магазинов. В то
          же время нас больше беспокоит будущее модельного сообщества. Мы ведём
          telegram канал, специально, для каждого, чтобы познакомить вас с миром
          моделизма. Мы также постоянно проводим различные конкурсы, а в
          дальнейшем и модельные мероприятия . Мы надеемся, что наши усилия
          могут способствовать постоянному развитию культуры нашего с вами
          хобби. На первом месте для нас являетесь вы, а не прибыль. Мы любим
          свое дело и стараемся постоянно совершествоваться для вас.
        </Text>
      </DefaultWrapper>
    </>
  );
};

export default About;
