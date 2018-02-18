import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Hint from '../Hint'
import Button from '../Button'
import Input from '../Input'

import fox6 from '../../images/fox/f6.png'

export default class Page6 extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick } = this.props

    return (
      <View style={styles.containerView}>
        <Text style={styles.title}>
          Кулинар!
        </Text>
        <Text style={styles.paragraph}>
          М-м-м-мммм-м-ммм... ням-ням как вкусно! Спасибо за роскошные блюда! Давненько не едал я таких вкусностей! ^_^
        </Text>
        <Text style={styles.paragraph}>
          *поет*{'\n'}
          Счастье лисье{'\n'}
          Счастье есть,{'\n'}
          Сладко спать и вкусно есть!..
        </Text>
        <Text style={styles.paragraph}>
          Хррр-рр-рр-р-ррр...
        </Text>
        <Text style={styles.title}>
          Ой! Мамочки-лисёночки! 
        </Text>
        <View style={styles.foxImg}>
          <Image
            source={fox6}
            style={styles.fox6}
          />
        </View>
        <Text style={styles.paragraph}>
          Я кажется встать не могу, даже на другой бочок перевернуться не могу. Ой-ой, кажется весу набрал... А посмотри, сколько там лишних килограмм у меня? Мой идеальный вес = 27.6 фунтов!
        </Text>

        <Input
          onSubmitText={onClick}
        />
        <Button
          text="Много!"
          onPress={onClick}
        />

        <Hint
          count="1"
          text="Посмотри на весы"
        />
        <Hint
          count="2"
          text="Надо посчитать сколько лишних килограммов, а не фунтов. Что-то я тоже в них путаюсь."
        />
        <Hint
          count="3"
          text="По мои сведениям в одном фунте 0,4536 кг."
        />
      </View>
    )
  }
}
