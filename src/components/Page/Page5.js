import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox5 from '../../images/fox/f5.png'

export default class Page5 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Ой, спасибо!
        </Text>
        <Text style={styles.paragraph}>
          Чувствую себя уже как дома. За мой ухаживают ^_^ Надеюсь, ты это не только из корысти делаешь? что подарок хочешь получить? Ну если ты и правда такой добрый, как о тебе говорят, а о тебе говорят! Уж поверь мне =) то, может быть, ты меня покормишь? Ась? Со вчерашнего дня во рту курочки не было... есть так хочется...
        </Text>
        <Text style={styles.paragraph}>
          Приготовь мне что-нибудь из той поваренной книги, что у вас на кухне в шкафу. А там глядишь, я поем и подобрею и все на свете секреты тебе расскажу ^_^
        </Text>
        <Text style={styles.paragraph}>
          Сытый Хвост - довольный Хвост!
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox5}
            style={styles.fox5}
          />
        </View>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Приятного аппетита!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Спрашиваешь где книга-то? Ну я же сказал, что на кухне в шкафу. Где же ей ещё быть?"
        />
        <Hint
          count="2"
          text="Не в этом шкафу, тут только посуда. Для книги должен быть отдельный шкаф!"
        />
        <Hint
          count="3"
          text="Посмотри повыше. Повыше и правее. Немудрено в стольких шкафах-то запутаться!"
        />
      </View>
    )
  }
}
