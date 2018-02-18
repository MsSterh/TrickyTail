import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox9 from '../../images/fox/f9.png'

export default class Page9 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Спасибо за снимок!
        </Text>
        <Text style={styles.paragraph}>
          Я отлично получился! Красавец - нет слов! У моей мамы очень много подруг, будет кому меня в пример ставить ^_^
        </Text>
        <Text style={styles.paragraph}>
          Ну все, мне пора, счастливенько оставаться! Я пошёл =) Ах, да, твой подарочек... ну я уже вышел, так что одевайся-обувайся, жду тебя возле подъезда. Да, смотри там холодно. Не замерзни.
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox9}
            style={styles.fox9}
          />
        </View>

        <Hint
          count="1"
          text="Ты точно тепло одет?"
        />
        <Hint
          count="2"
          text="И обут?"
        />
        <Hint
          count="3"
          text="Тогда выходи на улицу, тебе больше не нужны мои подсказки =)"
        />
      </View>
    )
  }
}
