import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox8 from '../../images/fox/f8.png'

export default class Page8 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Спасибо, ты настоящий друг!
        </Text>
        <Text style={styles.paragraph}>
          Мне уже значительно лучше. Признаться, мне ещё никогда не было так хорошо! ...хоть песни пой...
        </Text>
        <Text style={styles.paragraph}>
          ..Хитрый Хвост - довольный хвост,{'\n'}
          Твой подарочек унёс,{'\n'}
          В феврале явился спрос{'\n'}
          И утёр лисёнок нос!..
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox8}
            style={styles.fox8}
          />
        </View>
        <Text style={styles.paragraph}>
          Ну ладно, не буду мучать больше тебя испытаниями, только вот просьбочка будет одна... Пока я такой счастливый и довольный, может ты меня сфотографируешь на память? Только чтобы красиво вышло, я хочу маме фотокарточку послать в Тёмный лес. Вот она порадуется! ^_^
        </Text>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Сейчас вылетит птичка!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Хочу очень качественное фото, чтобы как в фотоателье."
        />
        <Hint
          count="2"
          text="Поищи, может у тебя есть хороший фотоаппарат, где я был бы во всей красе ^_^"
        />
      </View>
    )
  }
}
