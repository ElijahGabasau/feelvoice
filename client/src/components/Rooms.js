import Room from './Room';

const elements = [
  {
    title: 'Вариант кабинета №1',
    data: [
      {
        title: 'Фортепиано',
        text: 'У нашего электронного фортепиано чистый звук. И неважно, какое направление Вы выберете. Оно точно пригодится для занятий!  '
      },
      {
        title: 'Звукоизоляция',
        text: 'Звукоизоляция нужна для того, чтобы шум, возникающий во время занятий, не отвлекал других учеников и преподавателей. Она есть в каждой учебной комнате, поэтому заниматься Вы точно будете с комфортом! '
      },
      {
        title: 'Зеркало',
        text: 'Это зеркало стоит здесь не случайно. В него ученик смотрится при выполнении упражнений и пении для того, чтобы не только слышать и чувствовать, но и видеть себя. Это помогает в лучшем понимании своего организма и выполнении упражнений.'
      },
      {
        title: 'Колонки',
        text: 'В нашей колонке Вы будете слышать не только музыку, под которую поете, но и свой голос. Она точно передает каждую ноту и помогает в эффективной работе! '
      },
      {
        title: 'Микрофон',
        text: 'На уроках вокала микрофон будет Вашим лучшим другом: без него не обойтись! В нашей студии микрофоны с шумоподавлением, отлично передают все нюансы Вашего голоса.'
      },
    ]
  },
  {
    title: 'Главный холл',
    data: [
      {
        title: 'Елочка',
        text: 'Мы обязательно украшаем нашу студию по большим праздникам. Наша школа - это семья, и здесь уютно, как дома!'
      },
      {
        title: 'Стойка',
        text: 'За этой стойкой - рабочее место администратора студии, который будет встречать Вас каждый день.'
      },
      {
        title: 'Чайник с чаем',
        text: 'Администратор обязательно предложит Вам выпить горячего чаю. Выбор чая у нас очень большой, на любой вкус!'
      },
      {
        title: 'Стулья',
        text: 'На удобных стульях Вы можете провести время, пока ожидаете, когда начнется занятие.'
      },
      {
        title: 'Телевизор',
        text: 'Небольшое развлечение для тех, кому нужно дождаться своего занятия. Мы обычно показываем красочные музыкальные клипы, а это значит, что в нашей студии всегда играет хорошая музыка.'
      },
    ]
  },
  {
    title: 'Вариант кабинета №2',
    data: [
      {
        title: 'Микрофон',
        text: 'На уроках вокала микрофон будет Вашим лучшим другом: без него не обойтись! В нашей студии микрофоны с шумоподавлением, отлично передают все нюансы Вашего голоса.'
      },
      {
        title: 'Микшер',
        text: 'С помощью этого устройства мы можем настраивать звук, поэтому и Ваш голос, и музыка будет звучать приятно и без лишних шумов, что немаловажно в занятиях вокалом.'
      },
      {
        title: 'Пюпитр',
        text: 'Пюпитры есть в каждом кабинете. Они нужны для того, чтобы Вы могли удобно расположить тексты песен для их изучения. На наших пюпитрах удобно даже писать конспекты.'
      },
      {
        title: 'Колонки',
        text: 'В нашей колонке Вы будете слышать не только музыку, под которую поете, но и свой голос. Она точно передает каждую ноту и помогает в эффективной работе!'
      },
    ]
  },
];

function Rooms (props) {
  const render = [];
  
  for (let i = 0; i < elements.length; i++) {
    if (i === elements.length - 1) {
      render.push(
        <Room 
          key={`room-${i}`} 
          order={i}
          title={ elements[i].title }
          data={ elements[i].data } 
          className={props.className? props.className : ''} 
        />
      )

      continue;
    }

    render.push(
      <Room 
        key={`room-${i}`} 
        order={i}
        title={ elements[i].title }
        data={ elements[i].data } 
        className={props.className? props.className : ''} 
      />
    )
  }

  return (render)
} 

export default Rooms;